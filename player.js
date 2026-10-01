let p=+(localStorage.ruralReachLectureProgress||0);
const title=localStorage.ruralReachSelectedLecture||"Digital Electronics";
playerTitle.textContent=title;
function upd(){
 playerProgressFill.style.width=p+"%";progressText.textContent=p+"%";localStorage.ruralReachLectureProgress=p;
 slideTitle.textContent=p>=100?"Lecture Completed 🎉":"Learning in progress...";
 slideText.textContent=p>=100?"You finished this cached lesson.":"Study the cached lesson and update your progress.";
}
playBtn.onclick=()=>{p=Math.min(100,p+10);upd()};
nextBtn.onclick=()=>{p=Math.min(100,p+20);upd()};
previousBtn.onclick=()=>{p=Math.max(0,p-20);upd()};
const noteKey="notes_"+title;
notes.value=localStorage.getItem(noteKey)||"";
saveNotes.onclick=()=>{localStorage.setItem(noteKey,notes.value);localStorage.ruralReachLectureNotes="1";noteSaved.textContent=" ✓ Saved locally";setTimeout(()=>noteSaved.textContent="",1500)};
upd();