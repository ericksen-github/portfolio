!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);const n=document.getElementById("navbar"),i=n.offsetTop,a=e=>{const t=document.getElementById("currentProjectImg"),r=document.getElementById("currentProjectText");"weightTracker"==e?(t.src="./imgs/gifs/chartCapture.gif",s,t.alt="Weight Tracker gif",r.innerHTML='Weight tracking app using Chart.js\n    <br/><br/>\n    Record weight, calories, exercise, and protein to keep track over time of your progress and visualize \n    the journey displayed on the chart.\n    <br/><br/>\n    Some of its features are: \n    <br/><br/>\n    <li>Record new entries that are added to a table</li>\n    <li>Entries plotted on chart to view progress</li>\n    <li>Select specific stats to view on chart</li>\n    <li>Persistent data using localStorage</li>\n    <br/>\n    Check it out online \n        <a href="https://ericksen-github.github.io/calorie_tracker/">here</a>\n    <br/><br/>\n    Check out the source code\n        <a href="https://github.com/ericksen-github/calorie_tracker/">here</a>\n    '):"library"==e?(t.src="./imgs/gifs/libraryCapture.gif",t.alt="Library gif",r.innerHTML='Reading list app made with React\n    <br/><br/>\n    Record books that you\'ve read or wanting to read.\n    <br/><br/>\n    Some of its features are: \n    <br/><br/>\n    <li>Record new entries that are added to a table</li>\n    <li>Adjust read or not read status</li>\n    <li>Remove books</li>\n    <li>Persistent data using localStorage</li>\n    <br/>\n    Check it out online \n        <a href="https://ericksen-github.github.io/library_react/">here</a>\n    <br/><br/>\n    Check out the source code\n        <a href="https://github.com/ericksen-github/library_react/">here</a>\n    '):"etch"==e?(t.src="./imgs/gifs/etchAsketchCapture.gif",t.alt="Etch a Sketch gif",r.innerHTML='Etch a sketch app made using Javascript\n    <br/><br/>\n    Enjoy the function of an etch a sketch on your computer!\n    <br/><br/>\n    Some of its features are: \n    <br/><br/>\n    <li>Draws just like an etch a sketch</li>\n    <li>Adjust board size to change board resolution</li>\n    <li>Color choices that include black, a changing gradiant, or random colors for each new board pixel</li>\n    <br/>\n    Check it out online \n        <a href="https://ericksen-github.github.io/etch_a_sketch/">here</a>\n    <br/><br/>\n    Check out the source code\n        <a href="https://github.com/ericksen-github/etch_a_sketch">here</a>\n    '):"calc"==e?(t.src="./imgs/gifs/calculatorCapture.gif",t.alt="Calculator gif",r.innerHTML='Basic calculator made using Javascript\n    <br/><br/>\n    A basic calculator made as part of the front-end curriculum with The Odin Project.\n    <br/><br/>\n    It performs addition, subtraction, multiplication, and division operations. \n    <br/>\n    Check it out online \n        <a href="https://ericksen-github.github.io/calculator/">here</a>\n    <br/><br/>\n    Check out the source code\n        <a href="https://github.com/ericksen-github/calculator/">here</a>\n    '):"todo"==e&&(t.src="./imgs/gifs/todoCapture.gif",t.alt="Todo List gif",r.innerHTML='Todo list tracker made using Javascript\n    <br/><br/>\n    Record items for various lists and have them organized into projects. \n    <br/><br/>\n    Some of its features are: \n    <br/><br/>\n    <li>Adding new tasks and projects</li>\n    <li>Creating priorities for items</li>\n    <li>Delete finished list items</li>\n    <li>Persistent data using localStorage</li>\n    <br/>\n    Check it out online  \n        <a href="https://ericksen-github.github.io/todo_redo/">here</a>\n    <br/><br/>\n    Check out the source code\n        <a href="https://github.com/ericksen-github/todo_redo/">here</a>\n    ')};window.onscroll=function(){window.pageYOffset>=i?n.classList.add("sticky"):n.classList.remove("sticky")};const o=["weightTracker","library","etch","calc","todo"],c=document.getElementsByClassName("imgWrap");for(let e=0;e<c.length;e++)c[e].addEventListener("click",t=>{const r=document.getElementsByClassName("active");r[0].className=r[0].className.replace(" active",""),t.target.parentElement.className+=" active",a(o[e])});a("weightTracker")}]);