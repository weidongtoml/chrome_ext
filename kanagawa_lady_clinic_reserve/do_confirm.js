
/** Confirmation page

 <FORM action="custp003.php?rnd=20170723073205" method="post"  data-ajax="false" id="resv_confirm_frm">
  
  <div data-controltype="textblock">
    <p>予約内容を確認のうえ､｢予約の登録｣を選択してください。</p>
    <p class="kyocyo"><strong>※予約の登録はまだ完了していません！</strong><p>
  </div>
 
  <div data-controltype="textblock">
    <dl>
      <dt><p><b>お名前</b></p></dt>
        <dd>フ ラオ 様</dd>
      <dt><p><b>予約内容</b></p></dt>
        <dd><span>診療科：</span> 婦人科</dd>
        <dd><span>診察日：</span> 7月23日（日）</dd>
        <dd><span>時　間：</span> 
          終日8：30～12：00　
      </dd>
        <dd><span>診察室：</span> 小林院長</dd>
        <dd><span>目　的：</span> 診察</dd>
    </dl>
  </div>
  <div data-controltype="textblock">
  <dl>


  </dl>
  </div>

<!-- 次ページへのパラメータ配列を全てに対してHiddenタグを生成 -->
  <input type='hidden' name='deptgr' value='01'>
<input type='hidden' name='dept' value='04'>
<input type='hidden' name='dt' value='2017-07-23'>
<input type='hidden' name='type' value='0'>
<input type='hidden' name='tm' value='5'>
<input type='hidden' name='tm2' value=''>
<input type='hidden' name='obj' value='005'>
<input type='hidden' name='respcd' value='01'>
<input type='hidden' name='vaccd_kaisu' value=''>
<input type='hidden' name='notQuestFlg' value='1'>
<input type='hidden' name='cmail' value=''>
<input type='hidden' name='lm_year' value=''>
<input type='hidden' name='lm_month' value=''>
<input type='hidden' name='lm_day' value=''>
<input type='hidden' name='deccm31' value=''>
<input type='hidden' name='deccm31t' value=''>
<input type='hidden' name='pdeccm32' value=''>
<input type='hidden' name='deccm32' value=''>
  <p onclick="document.getElementById('resv_confirm_frm').submit()" id="submitbtn" class="torokubtn_kokodakekiiro">予約の登録</p>
  </FORM>
  <a href="custp033.php?tm=5&dept=04&fyear=2017&fmonth=7&fday=23&deptgr=01&obj=005&back=1&rnd=20170723073205&sdeptgr=01&sobj=005&year=2017&month=7&day=23&dept=04&tm=5" data-role="button" rel="external">戻　る</a>
</div>
<script type="javascript">
<!--
document.getElementById("submitbtn").className = "torokubtn_kokodakekiiro";
// -->
</script>

*/


var doSubmit = function() {
	window.console.log('In do_confirmation: doSubmit.');
	var submitButton = document.getElementById('submitbtn');
	if (submitButton) {
		window.console.log('Using submitButton.click()');
		submitButton.click();
	} else {
		window.console.log('using resv_confirm_frm.submit()');
		document.getElementById('resv_confirm_frm').submit();
	}
}


setTimeout(doSubmit, 500);