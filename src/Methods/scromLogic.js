import pipwerks from "./scromWrapper";
var scorm = pipwerks.SCORM;
var lmsConnected = false;
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
    // let url =
    //   "https://spicelearnweb.xrcstaging.in/mod/scorm/loadSCO.php?a=320&scoid=640&currentorg=CourseID-org&mode=&attempt=12";
    scormId = parseInt(url.substr(url.indexOf("=") + 1, 3));
    scorm.quit();
    console.log("quit");
    // if (marks != 0) {
    //   var success = scorm.set("cmi.core.lesson_status", "completed");
    //   if (success) {
    //     //... disconnect from the LMS, we don't need to do anything else.
    //     scorm.quit();
    //     console.log("quit");
    //   } else {
    //     console.log("not quitiing!!");
    //   }
    // } else console.log("You failed!");
  } else {
    console.log("Could not connect to lms");
  }
  return [id, scormId];
}
