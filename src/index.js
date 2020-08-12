import { stickNavBar } from "./modules/navbar";
import { updateCurrentProject } from "./modules/updateCurrentProject";

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  stickNavBar();
};

updateCurrentProject("weightTracker");
