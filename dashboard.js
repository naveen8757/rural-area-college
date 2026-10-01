function dash(){
 const c=JSON.parse(localStorage.ruralReachCachedLectures||"[]");
 const p=+(localStorage.ruralReachLectureProgress||0);
 const l=localStorage.ruralReachSelectedLecture||"No lecture started";
 cachedCount.textContent=c.length;completedCount.textContent=p>=100?1:0;overallProgress.textContent=p+"%";
 currentLecture.textContent=l;currentProgress.textContent=p+"%";dashboardProgressFill.style.width=p+"%";
 learningStatus.textContent=l==="No lecture started"?"Open the library and start a lecture.":p>=100?"✓ Lecture completed":"Continue where you left off";
 notesCount.textContent=localStorage.ruralReachLectureNotes?"1":"0";
}dash();