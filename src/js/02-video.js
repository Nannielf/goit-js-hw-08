import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    const KEY_TIME = 'videoplayer-current-time';
    
    player.on('timeupdate', throttle(upTime, 1000));

    function upTime({ seconds }) {
      localStorage.setItem(KEY_TIME, seconds);
    };
    window.addEventListener("load", 
    player.setCurrentTime(localStorage.getItem(KEY_TIME) || 0));
