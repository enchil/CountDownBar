const startTime = new Date().getTime();

// 目標時間(要倒數幾秒)。
const targetSeconds = 120;


// timer
let timer = function (startTime) {
  // 當前時間。
  let currentTime = new Date().getTime();
  
  // 當前時間 - 起始時間 = 經過時間。(因為不需要毫秒，所以將結果除以1000。)
  let diffSec = Math.round((currentTime - startTime) / 1000);
  
  // 目標時間 - 經過時間 = 剩餘時間。
  let remainingTime = targetSeconds - diffSec;
  
  // update progess.  
  update(remainingTime);   
  
  if (remainingTime == 0) {
    // stop the timer.
    clearInterval(timerId);
    
    // do anything you want to.
    $(".msg").text("TIMES UP!");
  } 
}

// start the timer.
let timerId = setInterval( function () { timer(startTime); }, 1000);

// update bar跟文字 with the timer.
function update (seconds) {
  barRenderer(seconds);
  textRenderer(seconds);
}

// 隨時間更新bar長度
function barRenderer (seconds) {
  let percent = (seconds / targetSeconds) * 100;
  $(".bar").css("width", percent + "%");
}

// 隨時間更新秒數文字
function textRenderer (seconds) {
  let sec = seconds % 60;  
  let min = Math.floor(seconds / 60); 

  /* 兩種作法都可以 */
  //min = min > 9 ? min : "0" + min;
  //sec = sec > 9 ? sec : "0" + sec;  
  min = min.toString().padStart(2, '0');
  sec = sec.toString().padStart(2, '0');
  
  $(".text").text(min + ":" + sec);		
}