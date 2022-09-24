// ==UserScript==
// @name         XJOJ Nightmode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  A Darkmode JS for XJOJ
// @author       XSMD
// @match        http://115.236.49.52:8000/*
// @icon         http://115.236.49.52:8000/images/logo_small.png
// @grant        none
// @license GPLv3
// ==/UserScript==

(function () {
    'use strict';
    console.log("Started!");
    // localStorage.setItem('DkEnable', 'false');
    let DkEnable = localStorage.getItem('DkEnable');

    //定义函数
    function Dkmode() {
        //alert('Dark' + String(DkEnable));
        DkEnable = 'true';
        document.querySelector("body").setAttribute('style', 'background-color: #000; color: #FFF;');
        try {
            document.querySelector("body > div.container.theme-showcase > div.uoj-content > div.row > div > div.table-responsive > table").setAttribute('style', 'color: #FFF;');
        } catch (error) {
            return;
        }

    };
    function Ltmode() {
        //alert('Light' + String(DkEnable));
        DkEnable = 'false';
        document.querySelector("body").setAttribute('style', 'background-color: #FFF; color: #111111;');
        try {
            document.querySelector("body > div.container.theme-showcase > div.uoj-content > div.row > div > div.table-responsive > table").setAttribute('style', 'color: #000;');
        } catch (error) {
            return;
        }

    };

    //初始化
    try {
        document.querySelector("body > div.container.theme-showcase > div.uoj-footer").remove();
        document.querySelector("body > div.container.theme-showcase > div.uoj-content > div.card.card-default > div").remove();
    } catch (error) {

    }
    if (DkEnable == 'true') Dkmode();
    else Ltmode();

    let btn = document.createElement('button');
    btn.setAttribute('stlye', 'position: relative; top: 300px; right: 0px; height: 30px; width: 30px');
    btn.textContent = DkEnable == 'true' ? "Light" : "Dark";
    btn.addEventListener('click', () => {
        if (DkEnable == 'true') Ltmode();
        else Dkmode();
        btn.textContent = DkEnable == 'true' ? "Light" : "Dark";
        localStorage.setItem('DkEnable', DkEnable);
    })
    document.body.appendChild(btn);
})();