const L=[
 ["Logic Gates & Digital Circuits","Electronics","Dr. Raman","42 min",1],
 ["Python Functions & Modular Programming","Programming","Prof. Meena","36 min",1],
 ["Introduction to Embedded Systems","Microcontrollers","Dr. Arun","48 min",0],
 ["Arrays, Searching & Sorting","Data Structures","Prof. Kiran","51 min",0],
 ["Sensors and Microcontroller Projects","Electronics","Dr. Priya","39 min",0],
 ["HTML, CSS & Responsive Design","Web Development","Prof. Vishal","44 min",0]
];
let f="all";
function cached(){return JSON.parse(localStorage.ruralReachCachedLectures||"[]")}
function render(){
 let c=cached(),q=searchInput.value.toLowerCase();lectureGrid.innerHTML="";
 L.filter(x=>(f==="all"||(f==="offline"?(x[4]||c.includes(x[0])):x[1]===f))&&x[0].toLowerCase().includes(q)).forEach(x=>{
  let off=x[4]||c.includes(x[0]),a=document.createElement("article");a.className="lecture-card";
  a.innerHTML=`<label>${x[1]}</label><h3>${x[0]}</h3><p>${x[2]} · ${x[3]}</p><small>${off?"✓ Offline Ready":"Online Only"}</small><button class="cache-btn ${off?"cached":""}">${off?"✓ Cached":"＋ Cache Offline"}</button>`;
  a.onclick=e=>{
   if(e.target.tagName==="BUTTON"){if(!c.includes(x[0])){c.push(x[0]);localStorage.ruralReachCachedLectures=JSON.stringify(c);render()}return}
   localStorage.ruralReachSelectedLecture=x[0];location.href="player.html";
  };
  lectureGrid.appendChild(a);
 });
 let used=c.length*6;storageText.textContent=used+" MB / 500 MB used";storageFill.style.width=Math.min(100,used/5)+"%";
}
document.querySelectorAll(".filter").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");f=b.dataset.filter;render()});
searchInput.oninput=render;render();