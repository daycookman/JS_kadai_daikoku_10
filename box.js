// ゲームステータスの表示
var mystatus;
// タイマー
var myTimer;
// 表示されてる画像
var correct;
// クリック数
var count;


//初期処理
function initialize() {
  // ゲームステータスの取得
  mystatus = document.getElementById("mystatus");
}
// BOXをクリックして実行
function clickBox(num){


  // ゲーム中か検証
  if (myTimer == null){
    // ゲーム中でない場合、何もしない
    return;
  }
  // 正解かどうか
  if (correct == num){
    // 正解の場合、正解数加算
    count++;
  }
  //ゲーム終了
  if(count >= 5){
    stopGame();
    alert("ゲームクリア！");
  }
}

//ゲームの開始
function startGame(){
// 既にゲーム中なら何もしない
  if (myTimer != null) {
    return;
  }
// カウントを初期へ
  count = 0;
// ステータス変更
  mystatus.innerHTML="ゲーム中";
// 画像表示
  myTimer = setInterval(warumonoRun,700);
}
//ゲーム終了
function stopGame(){
  // ステータス変更
  mystatus.innerHTML="停止";
// タイマー終了
  if (myTimer != null){
    clearInterval(myTimer);
  }
  // 中身をnullに
  myTimer = null;
}

function warumonoRun(){
  // boxの中身をランダムに取得
  correct = Math.floor(Math.random()*7);
// 全てのmyboxタグを取得
  var divs = document.getElementsByClassName("mybox");
  // 全てのmyboxの初期背景を白い背景にする
  for(var i=0; i<divs.length; i++){
    divs[i].style.background = "#fff";
  }
// 背景をわるものに変更
  divs[correct].style.background = "url('warumono.jpg')";
}
