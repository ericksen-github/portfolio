import { stickNavBar } from "./modules/navbar";
import { updateCurrentProject } from "./modules/updateCurrentProject";

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  stickNavBar();
};

const linksArray = ["weightTracker", "library", "etch", "profiles", "sort"];
const links = document.getElementsByClassName("imgWrap");

// Adds listeners to swap selected project with active class to the selected button (highlight it)
// also adds listener for swapping project display
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", (e) => {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");

    if (e.target.parentElement.className == "projectLinksContainer") {
      e.target.className += " active";
    } else {
      e.target.parentElement.className += " active";
    }
    updateCurrentProject(linksArray[i]);
  });
}

updateCurrentProject("weightTracker");
