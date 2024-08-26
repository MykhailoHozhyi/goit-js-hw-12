import{a as u,S as m,i as f}from"./assets/vendor-KI8m5ffe.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const d=t=>`
    <li class="gallery-card">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
  </a>

  <div class="info-box">
    <ul class="info-list">
      <li class="info-item">
        <h3 class="info-item-title">Likes</h3>
        <p class="info-item-value">${t.likes}</p>
      </li>
      <li class="info-item">
        <h3 class="info-item-title">Views</h3>
        <p class="info-item-value">${t.views}</p>
      </li>
      <li class="info-item">
        <h3 class="info-item-title">Comments</h3>
        <p class="info-item-value">${t.comments}</p>
      </li>
      <li class="info-item">
        <h3 class="info-item-title">Downloads</h3>
        <p class="info-item-value">${t.downloads}</p>
      </li>
    </ul>
  </div>
</li>
  `;u.defaults.baseURL="https://pixabay.com/api/";function p(t){return u("",{params:{key:"45541049-685ffcd160f6cd622b440ebf7",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const a=document.querySelector(".search-picture-form"),c=document.querySelector(".gallery"),n=document.querySelector(".loader"),h=new m(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionsDelay:250});a.addEventListener("submit",y);async function y(t){try{t.preventDefault(),n.classList.remove("is-hidden");const i=a.elements.user_query.value.trim(),{data:r}=await p(i);if(n.classList.add("is-hidden"),r.hits.length===0){f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="",a.reset(),n.classList.add("is-hidden");return}const o=r.hits.map(e=>d(e)).join("");c.innerHTML=o,h.refresh(),a.reset()}catch(i){console.log(i)}}
//# sourceMappingURL=index.js.map
