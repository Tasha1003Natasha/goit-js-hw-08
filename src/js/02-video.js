import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(function (data) {
//   console.log('played the video!');
//   console.log(data);

  localStorage.setItem(`videoplayer-current-time`, data.seconds);
//   console.log(videoplayer-current-time);

}, 1000));


// player.setCurrentTime()






// function iframeAll ()  {
   
// }  

// player.on(`play`, iframeAll) 
// player.off(`play`, iframeAll) 
