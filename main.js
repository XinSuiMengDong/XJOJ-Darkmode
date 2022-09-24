// ==UserScript==
// @name         XJOJ Nightmode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  A Darkmode JS for XJOJ
// @author       XSMD
// @match        http://115.236.49.52:8000/
// @icon         http://115.236.49.52:8000/images/logo_small.png
// @grant        none
// @license GPLv3
// ==/UserScript==

(function () {
    'use strict';
    console.log("Started!");
    // localStorage.setItem('DkEnable', 'false');
    let DkEnable = localStorage.getItem('DkEnable');
    function Dkmode {
        document.querySelector("body").setAttribute('style', 'background-color: #000; color: #FFF;');
        document.querySelector("body > div.container.theme-showcase > div.uoj-content > div.row > div > div.table-responsive > table").setAttribute('style', 'color: #FFF;');
    };
    function Ltmode {
        document.querySelector("body").setAttribute('style', 'background-color: #FFF; color: #111111;');
    };

    //初始化
    document.querySelector("body > div.container.theme-showcase > div.uoj-content > div.card.card-default > div").remove();
    if (DkEnable) Dkmode();
    else Ltmode();

    let btn = document.createElement('button');
    btn.setAttribute('stlye', 'position: relative; top: 300px; right: 0px; height: 30px; width: 30px');
    btn.textContent = DkEnable ? "Light" : "Dark";
    btn.addEventListener('click', () => {
        DkEnable = !DkEnable;
        btn.textContent = DkEnable ? "Light" : "Dark";
        localStorage.setItem('DkEnable', String(DkEnable));
        body = document.querySelector("body");
        if (DkEnable) Dkmode();
        else Ltmode();
    })
    document.body.appendChild(btn);
})();