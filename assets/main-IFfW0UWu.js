(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();document.querySelector("#header").innerHTML=`
    <div id="logo-container">
      <a href="/">
        <h2 id="logo" class="julius-sans-one-regular">Pasha Drums</h2>
      </a>
    </div>
    <div id="nav">
      <ul id="nav-list">
        <li><a href="/" class="inter-regular" class="home">Home</a></li>
        <li><a href="/events/" class="inter-regular" class="events">Events</a></li>
        <li><a href="/media/" class="inter-regular" class="media">Media</a></li>
        <li><a href="/bio/" class="inter-regular" class="bio">Bio</a></li>
      </ul>
    </div>
`;const n=document.querySelector("#fade-in"),a=new IntersectionObserver(s=>{n.classList.toggle("animation",s[0].isIntersecting)});a.observe(n);
