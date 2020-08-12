const updateCurrentProject = (selected) => {
  const imgEle = document.getElementById("currentProjectImg");
  const textEle = document.getElementById("currentProjectText");

  if (selected == "weightTracker") {
    imgEle.src = "./imgs/gifs/chartCapture.gif";
    textEle.innerHTML = `Weight tracking app using Chart.js
    <br/><br/>
    Record weight, calories, exercise, and protein to keep track over time of your progress and visualize 
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
    textEle.innerHTML = `Reading list app made with React
    <br/><br/>
    Record books that you've read or wanting to read.
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
    textEle.innerHTML = `Etch a sketch app made using Javascript
    <br/><br/>
    Enjoy the function of an etch a sketch on your computer!
    <br/><br/>
    Some of its features are: 
    <br/><br/>
    <li>Draws just like an etch a sketch</li>
    <li>Adjust board size to change board resolution</li>
    <li>Color choices that include black, a changing gradiant, or random colors for each new board pixel</li>
    <br/>
    Check it out online 
        <a href="https://ericksen-github.github.io/etch_a_sketch/">here</a>
    <br/><br/>
    Check out the source code
        <a href="https://github.com/ericksen-github/etch_a_sketch">here</a>
    `;
  } else if (selected == "calc") {
    imgEle.src = "./imgs/gifs/calculatorCapture.gif";
    textEle.innerHTML = `Basic calculator made using Javascript
    <br/><br/>
    A basic calculator made as part of the front-end curriculum with The Odin Project.
    <br/><br/>
    It performs addition, subtraction, multiplication, and division operations. 
    <br/>
    Check it out online 
        <a href="https://ericksen-github.github.io/calculator/">here</a>
    <br/><br/>
    Check out the source code
        <a href="https://github.com/ericksen-github/calculator/">here</a>
    `;
  } else if (selected == "todo") {
    imgEle.src = "./imgs/gifs/todoCapture.gif";
    textEle.innerHTML = `Todo list tracker made using Javascript
    <br/><br/>
    Record items for various lists and have them organized into projects. 
    <br/><br/>
    Some of its features are: 
    <br/><br/>
    <li>Adding new tasks and projects</li>
    <li>Creating priorities for items</li>
    <li>Delete finished list items</li>
    <li>Persistent data using localStorage</li>
    <br/>
    Check it out online  
        <a href="https://ericksen-github.github.io/todo_redo/">here</a>
    <br/><br/>
    Check out the source code
        <a href="https://github.com/ericksen-github/todo_redo/">here</a>
    `;
  }
};

export { updateCurrentProject };
