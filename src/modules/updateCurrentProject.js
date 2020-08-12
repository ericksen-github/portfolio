const updateCurrentProject = (selected) => {
  const imgEle = document.getElementById("currentProjectImg");
  const textEle = document.getElementById("currentProjectText");

  if ((selected = "weightTracker")) {
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
    <br/>
    Check it out online 
        <a href="https://ericksen-github.github.io/calorie_tracker/">here</a>
    <br/><br/>
    Check out the source code
        <a href="https://github.com/ericksen-github/calorie_tracker/">here</a>
    `;
  }
};

export { updateCurrentProject };
