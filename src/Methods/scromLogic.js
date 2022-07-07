import pipwerks from "./scromWrapper";
let scorm = pipwerks.SCORM;
let lmsConnected = false;
let id, scormId;
// Core LMS Functions
export function scormLogic() {
  //scorm.init returns a boolean
  lmsConnected = scorm.init();
  console.log(lmsConnected);

  if (lmsConnected) {
    id = scorm.get("cmi.core.student_id");
    console.log(id);
    var url = document.referrer;
    console.log(url);
    scormId = parseInt(url.substr(url.indexOf("=") + 1, 3));
    console.log(scormId);
  } else {
    console.log("Could not connect to lms");
  }
  return [id, scormId];
}
