import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const VIDEOPLAYER_TIME = `videoplayer-current-time`;


player.on('timeupdate', throttle(function (data) {
  // console.log(data);

 localStorage.setItem(VIDEOPLAYER_TIME, data.seconds);

}, 1000));

const savedTime = localStorage.getItem(VIDEOPLAYER_TIME);
if (savedTime) {
  player.setCurrentTime(savedTime);
}
console.log(savedTime);

