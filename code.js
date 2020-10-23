function initViz(){
    var containerDiv = document.getElementById('"vizContainer"');
    //a variable that holds the div container's ID in the body of the html
    // var url = "https://public.tableau.com/views/JavaScriptProjectWorkbook/USA";
    var url = "https://public.tableau.com/views/JavaScriptProjectWorkbook/Overview";
    //url of the dashboard on Tableau Public
    var viz = new tableau.Viz(containerDiv, url);
    //A new object created for an inbuilt object/function called tableau with a property called Viz

    //This is an object containing some properties and their default values being set
    var options = {
        hidetabs : true,
        onFirstInteractive: function ()
            {
                workbook = viz.getWorkbook(); //get the current view and get the workbook object
                activeSheet = workbook.getActiveSheet(); 
                //get the active sheet from the workbook object of the view
            }
        }
};

function barChart(){
    workbook.activateSheetAsync("Bar Chart")
};

function bubbleChart(){
    workbook.activateSheetAsync("Bubble Chart")
};

function boxAndWhisker(){
    workbook.activateSheetAsync("Box and Whisker")
};

