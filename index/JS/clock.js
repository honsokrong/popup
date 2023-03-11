const paraGraph = document.querySelector('p');

//setInterval
setInterval(function(){
    let d  = new Date().toLocaleTimeString();
    paraGraph.innerHTML = d;
},1000);