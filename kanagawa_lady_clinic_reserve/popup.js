// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This extension demonstrates using chrome.downloads.download() to
// download URLs.

function logMsg(msg) {
  var newEntry = document.createElement('p');
  newEntry.innerText = '' + (new Date()) + ':' + msg;
  var log = document.getElementById('log');
  log.appendChild(newEntry);
}


function executeSendLinkJsOnCurrentTab() {
  logMsg('In executeSendLinkJsOnCurrentTab');
    chrome.windows.getCurrent(function (currentWindow) {
      chrome.tabs.query({active: true, windowId: currentWindow.id}, function(activeTabs) {
      logMsg('In execute script: send_links.js');
        chrome.tabs.executeScript(
          activeTabs[0].id, {file: 'send_links.js', allFrames: true});
    });
  });
}

function confirmationCallback() {

}

function confirmReservationInTab(tab) {
  logMsg('In refreshAndCheckLink');
  chrome.tabs.executeScript(tab.id, {file: 'do_confirm.js'}, confirmationCallback)
}

function refreshAndCheckLink() {
  logMsg('In refreshAndCheckLink');
  chrome.windows.getCurrent(function (currentWindow) {
    chrome.tabs.query({active: true, windowId: currentWindow.id},
                      function(activeTabs) {
      chrome.tabs.reload(activeTabs[0].id, {bypassCache: true}, executeSendLinkJsOnCurrentTab);
    });
  });
}

var refreshPeriodMillisec = 1000;

chrome.extension.onRequest.addListener(function(reserveLink) {
  logMsg('in listener');
  if (reserveLink.msg === 'not_found') {
    document.getElementById('msg').innerText = 'Not Found';
    setTimeout(refreshAndCheckLink, refreshPeriodMillisec);
  } else if (reserveLink.msg === 'found') {
    document.getElementById('msg').innerText = 'Found, data: ' + reserveLink.data;
    // TODO(weiding): proceed to the given link to confirm registration
    chrome.windows.getCurrent(function (currentWindow) {
      chrome.tabs.query({active: true, windowId: currentWindow.id},
                      function(activeTabs) {
        chrome.tabs.update(activeTabs[0].id, {url: reserveLink.data}, confirmReservationInTab);
      });
    });

    chrome.tabs.create({
      url: reserveLink.data
    }, confirmReservationInTab);
  } else {

  }
});

// Set up event handlers and inject send_links.js into all frames in the active
// tab.
window.onload = executeSendLinkJsOnCurrentTab;