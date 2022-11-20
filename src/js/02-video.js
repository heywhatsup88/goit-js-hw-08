import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALE_CURRENT_TIME = 'videoplayer-current-time';

function onPlay(data) {
  const videoTimePoint = data.seconds;
  localStorage.setItem(LOCALE_CURRENT_TIME, videoTimePoint);
}

player.on('timeupdate', throttle(onPlay, 1000));

player
  .setCurrentTime(localStorage.getItem(LOCALE_CURRENT_TIME))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  });
