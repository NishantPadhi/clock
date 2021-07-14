let myTimer = setInterval(timer, 1000)

function timer() {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  hrotation = 30 * htime + mtime / 2;
  mrotation = 6 * mtime;
  srotation = 6 * stime;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
}


function displayTime() {
  const x = document.querySelector('input[type="time"]');
  time = ""+x.value+"";
  htime = time.substring(0,2);
  mtime = time.substring(3,5);
  stime = time.substring(6,8);
  hrotation = 30 * htime + mtime / 2;
  mrotation = 6 * mtime;
  srotation = 6 * stime;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
  clearInterval(myTimer);
}

function restartTime() {
  myTimer = setInterval(timer, 1000);
}