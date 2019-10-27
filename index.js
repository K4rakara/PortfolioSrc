// =======================================================================
// Copyright (c) 2019-2019 Jack Johannesen. https://insertdomain.name
// liscensed under the mit liscense.
// See GitHub for details. https://github.com/K4rakara/PortfolioSrc/blob/master/LICENSE
// =======================================================================

window.addEventListener('load',function(){
    let text = document.getElementById('comingsoon');
    if (window.devicePixelRatio > 1) {
        text.style.fontSize = '64px';
    }
    text.style.left = 'calc(50vw - '+(text.offsetWidth/2)+'px)';
    text.style.top = 'calc(50vh - '+(text.offsetHeight/1.5)+'px)';
    dynamics.animate(text, {
        scale: 1
    }, {
        type: dynamics.spring
    });
    let injectScript = document.createElement('script');
    injectScript.src = 'background.js';
    document.head.appendChild(injectScript);
});