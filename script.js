// Header
const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const navListItems = document.querySelectorAll('.nav__list-item');

const toggleActiveClass = () => {
  header.classList.toggle('active');
};

burger.addEventListener('click', toggleActiveClass);

navListItems.forEach((item) =>
  item.addEventListener('click', toggleActiveClass)
);
// End of Header

// Video Controls
const video = document.querySelector('.video');
const videoButton = document.querySelector('.video__button i');
const videoBar = document.querySelector('.video__bar');

const playPauseVideo = () => {
  if (video.paused) {
    video.play();
    videoButton.className = 'fa-regular fa-circle-play';
    video.style.opacity = '0.7';
  } else {
    video.pause();
    videoButton.className = 'fa-regular fa-circle-pause';
    video.style.opacity = '0.3';
  }

  videoButton.classList.toggle('fa-circle-pause');
  videoButton.classList.toggle('fa-circle-play');
};

video.addEventListener('timeupdate', () => {
  const { currentTime, duration, ended } = video;

  const playedPercent = (currentTime / duration) * 100;
  videoBar.style.width = `${playedPercent}%`;

  if (ended) {
    videoButton.className = 'fa-regular fa-circle-play';
    video.style.opacity = '0.3';
  }
});

videoButton.addEventListener('click', playPauseVideo);
// End of Video Controls
