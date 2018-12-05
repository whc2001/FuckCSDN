// ==UserScript==
// @name         FUCK CSDN
// @namespace    [TODO]
// @version      1.0
// @description  CSDN 你🐴炸了
// @author       whc2001
// @match        blog.csdn.net/*/article/details/*
// ==/UserScript==

var loop = 0;
var content = null;
var html = document.getElementsByTagName("html")[0];
var head = document.getElementsByTagName("head")[0];
var body = document.getElementsByTagName("body")[0];

var timer = setInterval(function()
{
    console.log("RUN");
    var time = document.getElementById("check-adblock-time");
    time.innerHTML = 2147483647;
    // https://stackoverflow.com/questions/3141064/how-to-stop-all-timeouts-and-intervals-using-javascript
    var maxTimerHandle = setInterval(function(){}, 1000);
    for (var i = 0; i < maxTimerHandle; ++i)
        if(i != timer)
            clearInterval(i);
    for(var j = head.children.length - 1; j >= 0; --j)
    {
        var item = head.children[j];
        if(item.tagName != "TITLE" && item.tagName != "META")
            head.removeChild(item);
    }
    content = document.getElementById("content_views").cloneNode(true);
    if(content !== null)
    {
        html.removeChild(body);
        body = document.createElement("body");
        body.appendChild(content);
        html.appendChild(body);
    }
    if(++loop > 10)
        clearInterval(timer);
}, 500);