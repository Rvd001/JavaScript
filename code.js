function initViz(){
    var containerDiv = document.getElementById('"vizContainer"');
    //a variable that holds the div container's ID in the body of the html
    var url = "https://public.tableau.com/views/JavaScriptProjectWorkbook/USA";
    //url of the dashboard on Tableau Public
    var viz = new tableau.Viz(containerDiv, url);
    //A new object created for an inbuilt object/function called tableau with a property called Viz

    //This is an object containing some properties and their default values being set
    var options = {
        hidetabs : true,
        onFirstInteractive: function ()
            {
            console.log("Run this code when the viz has finished loading.")
            }
        }
}
