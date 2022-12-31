"use script";

let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

// let countDownDate = new Date("Aug 31, 2022 13:18:40");
let countDownDate = new Date("Sept 03, 2022 19:50:00");

const countDown = setInterval(function () {
  const now = new Date();
  const launchDate = countDownDate - now;

  const day = String(Math.floor(launchDate / (1000 * 60 * 60 * 24))).padStart(
    2,
    0
  );

  const hr = String(
    Math.floor((launchDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, 0);

  const min = String(
    Math.floor((launchDate % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, 0);

  const secs = String(Math.floor((launchDate % (1000 * 60)) / 1000)).padStart(
    2,
    0
  );

  days.innerHTML = day;
  hours.innerHTML = hr;
  minutes.innerHTML = min;
  seconds.innerHTML = secs;

  if (launchDate < 0) {
    clearInterval(countDown);
    days.innerHTML = "00";
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";

    document.querySelector(".rocket--img").style.animation =
      "rocket 4s linear forwards";

    document.querySelector(".launch").innerHTML = "We're Live!!!";
    // document.querySelector(".video").innerHTML =
    //   '<video src="./space.MP4" class="video" autoplay muted loop></video>';

    let video = document.createElement("video");
    video.src = "./space.MP4";
    video.class = "video";
    video.setAttribute("autoplay", "");
    video.setAttribute("loop", "");
    // video.setAttribute("muted", "");

    document.querySelector(".video-container").append(video);
  }
}, 1000);
