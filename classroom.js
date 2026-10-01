let state="strong";
const modes={
 strong:["STRONG","4.8 Mbps","720p · Adaptive","Smart Saver is reducing video quality automatically to protect student data.","3.2 MB","68%"],
 weak:["WEAK","480 Kbps","360p · Low Data","Weak network detected. Switching to compressed video and fewer frames.","1.1 MB","88%"],
 offline:["OFFLINE","0 Kbps","Audio + Slides","Internet unavailable. Continuing with cached audio, slides and notes.","0 MB","100%"]
};
function setNet(){
 const d=modes[state];
 networkText.textContent=d[0];sideNetwork.textContent=d[0];networkSpeed.textContent=d[1];
 qualityLabel.textContent=d[2];adaptBanner.textContent=d[3];dataUsed.textContent=d[4];saving.textContent=d[5];
 networkDot.style.background=state==="offline"?"#f59e0b":state==="weak"?"#fbbf24":"#22c55e";
 dataRate.textContent=state==="strong"?"480 KB/min":state==="weak"?"120 KB/min":"0 KB/min";
 networkSimulator.textContent=state==="strong"?"Simulate Weak Network":state==="weak"?"Go Offline":"Restore Connection";
}
networkSimulator.onclick=()=>{state=state==="strong"?"weak":state==="weak"?"offline":"strong";setNet()};
document.querySelectorAll(".quality").forEach(b=>b.onclick=()=>{document.querySelectorAll(".quality").forEach(x=>x.classList.remove("active"));b.classList.add("active");});
audioBtn.onclick=()=>audioBtn.textContent=audioBtn.textContent==="🔊"?"🔇":"🔊";
pauseBtn.onclick=()=>pauseBtn.textContent=pauseBtn.textContent.includes("Pause")?"▶ Resume":"Ⅱ Pause";
setNet();