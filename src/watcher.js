const socket = io.connect();
socket.on('change', data=>{
    let script = document.getElementById('task');
    let srcList = script.src.split('?');
    script.parentNode.removeChild(script);
    clearInterval(window.localTimerTask);
    let newScript = document.createElement('script');
    newScript.src = srcList[0] + '?' + (parseInt(srcList[1]) + 1);
    document.getElementsByTagName('head')[0].appendChild(newScript);
});
