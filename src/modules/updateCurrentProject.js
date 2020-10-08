// Updates current displayed project by swapping in prewritten html using backticks

const updateCurrentProject = (selected) => {
  const imgEle = document.getElementById("currentProjectImg");
  const textEle = document.getElementById("currentProjectText");

  if (selected == "weightTracker") {
    imgEle.src = "./imgs/gifs/chartCapture.gif";
    imgEle.alt = "Weight Tracker gif";
    textEle.innerHTML = `Weight tracking app using Chart.js
    <br/><br/>
    Record weight, calories, exercise, and protein to track your progress over time of and visualize 
    the journey displayed on the chart.
    <br/><br/>
    Some of its features are: 
    <br/><br/>
    <li>Record new entries that are added to a table</li>
    <li>Entries plotted on chart to view progress</li>
    <li>Select specific stats to view on chart</li>
    <li>Persistent data using localStorage</li>
    <br/>
    Check it out online 
        <a href="https://ericksen-github.github.io/calorie_tracker/">here</a>
    <br/><br/>
    Check out the source code
        <a href="https://github.com/ericksen-github/calorie_tracker/">here</a>
    `;
  } else if (selected == "library") {
    imgEle.src = "./imgs/gifs/libraryCapture.gif";
    imgEle.alt = "Library gif";
    textEle.innerHTML = `Reading list app made with React
    <br/><br/>
    Record books that you've read or are wanting to read.
    <br/><br/>
    Some of its features are: 
    <br/><br/>
    <li>Record new entries that are added to a table</li>
    <li>Adjust read or not read status</li>
    <li>Remove books</li>
    <li>Persistent data using localStorage</li>
    <br/>
    Check it out online 
        <a href="https://ericksen-github.github.io/library_react/">here</a>
    <br/><br/>
    Check out the source code
        <a href="https://github.com/ericksen-github/library_react/">here</a>
    `;
  } else if (selected == "etch") {
    imgEle.src = "./imgs/gifs/etchAsketchCapture.gif";
    imgEle.alt = "Etch a Sketch gif";
    textEle.innerHTML = `Etch A Sketch app made using Javascript
    <br/><br/>
    Enjoy the function of an Etch A Sketch on your computer!
    <br/><br/>
    Some of its features are: 
    <br/><br/>
    <li>Draws just like an Etch A Sketch</li>
    <li>Adjust board size to change board resolution</li>
    <li>Color choices that include black, a changing gradiant, or random colors for each new board pixel</li>
    <br/>
    Check it out online 
        <a href="https://ericksen-github.github.io/etch_a_sketch/">here</a>
    <br/><br/>
    Check out the source code
        <a href="https://github.com/ericksen-github/etch_a_sketch">here</a>
    `;
  } else if (selected == "sort") {
    imgEle.src = "./imgs/gifs/sortingCapture.gif";
    imgEle.alt = "Sorting Project gif";
    textEle.innerHTML = `Sorting Visualizer using Javascript
      <br/><br/>
      Visually represents various sorting methods for the user to see how different 
      methods move through a data set. 
      <br/><br/>
      Some of its features are: 
      <br/><br/>
      <li>Generates arrays of random values</li>
      <li>Sorts values in array based on differing methods</li>
      <li>Visually adapts DOM to represent the algorithm moving through the data</li>
      <li>Sort methods available include merge, bubble, quick, and heap sorting</li>
      <br/>
      Check it out online  
          <a href="https://ericksen-github.github.io/sorting_project/">here</a>
      <br/><br/>
      Check out the source code
          <a href="https://github.com/ericksen-github/sorting_project">here</a>
      `;
  } else if (selected == "profiles") {
    imgEle.src = "./imgs/gifs/profilesCapture.gif";
    imgEle.alt = "Github Profiles gif";
    textEle.innerHTML = `GitHub Profiles
    <br/><br/>
    Allows a user to search for a github profile and returns basic info on that profile
    <br/><br/>
    Some of its features are: 
      <br/><br/>
      <li>Uses the GitHub API to pull data from searched profile</li>
      <li>Creates card showing user info such as follower count and repos</li>
      <li>Links to individual repositories that are pulled onto the card</li>
      <br/>
    Check it out online 
        <a href="https://ericksen-github.github.io/github_profiles/">here</a>
    <br/><br/>
    Check out the source code
        <a href="https://github.com/ericksen-github/github_profiles">here</a>
    `;
  }

  // else if (selected == "calc") {
  //   imgEle.src = "./imgs/gifs/calculatorCapture.gif";
  //   imgEle.alt = "Calculator gif";
  //   textEle.innerHTML = `Basic calculator made using Javascript
  //   <br/><br/>
  //   A basic calculator made as part of the front-end curriculum with The Odin Project.
  //   <br/><br/>
  //   It performs addition, subtraction, multiplication, and division operations.
  //   <br/><br/>
  //   Check it out online
  //       <a href="https://ericksen-github.github.io/calculator/">here</a>
  //   <br/><br/>
  //   Check out the source code
  //       <a href="https://github.com/ericksen-github/calculator/">here</a>
  //   `;
  // }

  // } else if (selected == "todo") {
  //   imgEle.src = "./imgs/gifs/todoCapture.gif";
  //   imgEle.alt = "ToDo List gif";
  //   textEle.innerHTML = `ToDo list tracker made using Javascript
  //   <br/><br/>
  //   Record items for various lists and have them organized into projects.
  //   <br/><br/>
  //   Some of its features are:
  //   <br/><br/>
  //   <li>Adding new tasks and projects</li>
  //   <li>Creating priorities for items</li>
  //   <li>Delete finished list items</li>
  //   <li>Persistent data using localStorage</li>
  //   <br/>
  //   Check it out online
  //       <a href="https://ericksen-github.github.io/todo_redo/">here</a>
  //   <br/><br/>
  //   Check out the source code
  //       <a href="https://github.com/ericksen-github/todo_redo/">here</a>
  //   `;
  // }
};

export { updateCurrentProject };
