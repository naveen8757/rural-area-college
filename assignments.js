let selected=localStorage.ruralReachAssignment||"";
const status=document.getElementById("assignmentStatus"),hint=document.getElementById("assignmentHint"),bar=document.getElementById("assignmentProgress");
function load(){const done=localStorage.ruralReachAssignmentDone==="1";status.textContent=selected||"No assignment started";hint.textContent=selected?(done?"✓ Completed locally. You can sync your submission when online.":"Work saved locally. You can continue even without internet."):"Choose an assignment above.";bar.style.width=done?"100%":"0%"}
document.querySelectorAll(".assignment-btn").forEach(b=>b.onclick=()=>{selected=b.dataset.title;localStorage.ruralReachAssignment=selected;localStorage.ruralReachAssignmentDone="0";load()});
document.getElementById("completeAssignment").onclick=()=>{if(!selected){alert("Choose an assignment first.");return}localStorage.ruralReachAssignmentDone="1";load()};
load();