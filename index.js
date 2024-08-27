import{a as f,S as L,i as h}from"./assets/vendor-KI8m5ffe.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();const p=s=>`
    <li class="gallery-card">
  <a class="gallery-link" href="${s.largeImageURL}">
    <img class="gallery-image" src="${s.webformatURL}" alt="${s.tags}" />
  </a>

  <div class="info-box">
    <ul class="info-list">
      <li class="info-item">
        <h3 class="info-item-title">Likes</h3>
        <p class="info-item-value">${s.likes}</p>
      </li>
      <li class="info-item">
        <h3 class="info-item-title">Views</h3>
        <p class="info-item-value">${s.views}</p>
      </li>
      <li class="info-item">
        <h3 class="info-item-title">Comments</h3>
        <p class="info-item-value">${s.comments}</p>
      </li>
      <li class="info-item">
        <h3 class="info-item-title">Downloads</h3>
        <p class="info-item-value">${s.downloads}</p>
      </li>
    </ul>
  </div>
</li>
  `;f.defaults.baseURL="https://pixabay.com/api/";function g(s,e){return f("",{params:{key:"45541049-685ffcd160f6cd622b440ebf7",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})}const l=document.querySelector(".search-picture-form"),u=document.querySelector(".gallery"),d=document.querySelector(".loader"),n=document.querySelector(".load-more-btn");let a=1,m="";const y=new L(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionsDelay:250});l.addEventListener("submit",v);n.addEventListener("click",b);async function v(s){try{s.preventDefault(),d.classList.remove("is-hidden"),m=l.elements.user_query.value.trim(),a=1;const{data:e}=await g(m,a);if(d.classList.add("is-hidden"),e.hits.length===0){h.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),u.innerHTML="",l.reset(),d.classList.add("is-hidden"),n.classList.add("is-hidden");return}const r=e.hits.map(o=>p(o)).join("");u.innerHTML=r,y.refresh(),l.reset(),n.classList.remove("is-hidden")}catch(e){console.log(e)}}async function b(s){try{a++;const{data:e}=await g(m,a),r=e.hits.map(t=>p(t)).join("");u.insertAdjacentHTML("beforeend",r),y.refresh(),P();const o=e.totalHits/15;a>=o&&(h.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),n.classList.add("is-hidden"))}catch(e){console.log(e)}}function P(){const e=document.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
