"use strict";
let sec = 5;
function getTimeBySeconds(sec) {
  let a = Math.floor(sec / 3600);
  let b = Math.floor((sec % 3600) / 60);
  let c = (sec % 3600) % 60;
  let s;
  function zero(s) {
    if (s < 10) {
      s = "0" + s;
    }
    return s;
  }

  return zero(a) + ":" + zero(b) + ":" + zero(c);
}

console.log(getTimeBySeconds(48753));
