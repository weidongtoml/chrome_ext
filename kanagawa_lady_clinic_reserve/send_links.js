/** Sample HTML

<table border="0" cellspacing="1" cellpadding="1" id="yoyaku_koho">
<tr>
<th>&nbsp;</th>
<th>7/23<br>（<span style="color:#f00;">日</span>）</th>
<th>7/24<br>（月）</th>
<th>7/25<br>（火）</th>
<th>7/26<br>（水）</th>
<th>7/28<br>（金）</th>
</tr>
<tr>
<th>終日<br> 小林院長</th>
<td><a href="custp008.php?stm2=&respcd=01&stype=0&sdeptgr=01&sdept=04&sobj=005&syear=2017&smonth=7&sday=23&stm=5&" rel="external"><span class="marubatu">46番目</span><span class="tm2">8:30～<br>12:00</span><span class="tm2"></span></a></td>
<td><span class="marubatu">－</span><span class="tm2">8:30～<br>19:00</span><span class="tm2"></span></td>
<td><span class="marubatu">－</span><span class="tm2">8:30～<br>19:00</span><span class="tm2"></span></td>
<td><span class="marubatu">－</span><span class="tm2">8:30～<br>19:30</span><span class="tm2"></span></td>
<td><span class="marubatu">－</span><span class="tm2">8:30～<br>19:00</span><span class="tm2"></span></td>
</tr>
<tr>
<th>終日<br> 斎藤先生</th>
<td><span class="marubatu2">休</span></td>
<td><span class="marubatu">－</span><span class="tm2">8:30～<br>19:00</span><span class="tm2"></span></td>
<td><span class="marubatu">－</span><span class="tm2">8:30～<br>19:00</span><span class="tm2"></span></td>
<td><span class="marubatu2">休</span></td>
<td><span class="marubatu">－</span><span class="tm2">8:30～<br>19:00</span><span class="tm2"></span></td>
</tr>
</table>

*/

var g_doctorName = '斎藤先生';
// var g_doctorName = '小林院長';

window.console.log('getting reserveation link in send_links.js');

function getReservationLink() {
  var defaultRet = {msg: "not_found"};

  var table = document.getElementById('yoyaku_koho');
  if (table === null) {
    return defaultRet;
  }
  var rows = table.getElementsByTagName('tr');
  if (rows === null) {
    return defaultRet;
  }
  var i = 0;
  var curRow;
  var col;
  var links;
  for (i = 0; i < rows.length; i++) {
    curRow = rows[i];
    col = curRow.getElementsByTagName('th')[0];
    if (col !== null && col.innerText.indexOf(g_doctorName) !== -1) {
      links = curRow.getElementsByTagName('a');
      if (links !== null && links[0] && links[0].href) {
        return {msg: "found", data: links[0].href};
      }
    }
  }
  return defaultRet;
}

var reserveLink = getReservationLink();


chrome.extension.sendRequest(reserveLink);