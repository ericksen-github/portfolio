import { stickNavBar } from "./modules/navbar";
import { updateCurrentProject } from "./modules/updateCurrentProject";

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  stickNavBar();
};

const linksArray = ["weightTracker", "library", "etch", "calc", "todo"];
const links = document.getElementsByClassName("projectLinks");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    updateCurrentProject(linksArray[i]);
  });
}

updateCurrentProject("weightTracker");
