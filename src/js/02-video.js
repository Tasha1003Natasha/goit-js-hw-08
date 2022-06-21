import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const VIDEOPLAYER_TIME = `videoplayer-current-time`;


player.on('timeupdate', throttle(function (data) {
  // console.log(data);

  // JSON.stringify(localStorage.setItem(VIDEOPLAYER_TIME, data.seconds));
  // console.log(VIDEOPLAYER_TIME);

 localStorage.setItem(VIDEOPLAYER_TIME, data.seconds);
  console.log(VIDEOPLAYER_TIME);

}, 1000));


// const setTime = player.setCurrentTime(JSON.parse(localStorage.getItem(VIDEOPLAYER_TIME)));
// console.log(setTime);


const setTime =  player.setCurrentTime(localStorage.getItem(VIDEOPLAYER_TIME));
console.log(setTime);


// function iframeAll ()  {
   
// }  

// player.on(`play`, iframeAll) 
// player.off(`play`, iframeAll) 
