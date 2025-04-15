import{a as p,S as f,i as h}from"./assets/vendor-jqdos1hf.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const y="https://pixabay.com/api/",L="49668141-9e36e21ab64203f58b46c2204",w={key:L,image_type:"photo",orientation:"horizontal",safesearch:!0};async function m({page:s,perPage:a,query:t}){try{const i={...w,q:t,page:s,per_page:a},e=await p.get(y,{params:i});return console.log("Request URL:",e.config.url),e.data.hits}catch(i){throw console.error("Error fetching images:",i),i}}function u(s){const a=document.querySelector(".gallery");s.forEach(t=>{const i=document.createElement("li");i.classList.add("gallery-item"),i.innerHTML=`
      <a href="${t.largeImageURL}" >
        <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
        <ul class="image-statistic">
            <li class="image-statistic-item">
                <p class="image-statistic-item-title">Likes</p>
                <p class="image-statistic-item-value">${t.likes}</p>
            </li>
            <li class="image-statistic-item">
                <p class="image-statistic-item-title">Views</p>
                <p class="image-statistic-item-value">${t.views}</p>
            </li>
            <li class="image-statistic-item">
                <p class="image-statistic-item-title">Comments</p>
                <p class="image-statistic-item-value">${t.comments}</p>
            </li>
            <li class="image-statistic-item">
                <p class="image-statistic-item-title">Downloads</p>
                <p class="image-statistic-item-value">${t.downloads}</p>
            </li>

        </ul>
      </a>
    `,a.appendChild(i)})}const v=document.querySelector(".form"),b=document.querySelector("#search-input"),q=document.querySelector(".gallery"),l=document.querySelector(".js-loader"),c=document.querySelector(".load-more-btn"),g=new f(".gallery a"),o={query:"",page:1,perPage:15};v.addEventListener("submit",async s=>{s.preventDefault();const a=b.value.trim().toLowerCase();if(a){o.query=a,o.page=1,l.classList.remove("hidden"),c.classList.add("hidden"),q.innerHTML="";try{const t=await m(o);if(t.length===0){d("No images found. Please try a different query.");return}u(t),g.refresh(),t.length===o.perPage&&c.classList.remove("hidden")}catch(t){d("Oops! Something went wrong."),console.error(t)}finally{l.classList.add("hidden")}}});c.addEventListener("click",async()=>{o.page+=1,l.classList.remove("hidden");try{const s=await m(o);if(s.length===0){c.classList.add("hidden");return}u(s),g.refresh(),s.length<o.perPage&&c.classList.add("hidden")}catch(s){d("Failed to load more images."),console.error(s)}finally{l.classList.add("hidden")}});function d(s){h.show({message:s,messageColor:"white",position:"topRight",backgroundColor:"#ef4040"})}
//# sourceMappingURL=index.js.map
