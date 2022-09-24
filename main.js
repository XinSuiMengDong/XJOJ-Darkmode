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
    let DkEnable = localStorage.getItem('DKEnable') === 'true';
    let btnArea = document.querySelector("body");
    let btn = document.createElement("button");
    btn.textContent = DkEnable ? "Dark" : "Light";
    btn.addEventListener("click", () => {
        DkEnable = !DkEnable;
        localStorage.setItem("DKEnable", DkEnable);
        btn.textContent = DkEnable ? "Dark" : "Light";
        if (DkEnable) {
            //Dark mode
            console.log('Dark mode')
        } else {
            //Light mode
            location.reload();
        }
    });
})();