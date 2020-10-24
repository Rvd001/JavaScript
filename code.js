
//Setting Global Variable
//This will give undefined by default.
var viz, workbook, activeSheet;


function initViz(){
    var containerDiv = document.getElementById('"vizContainer"');
    //a variable that holds the div container's ID in the body of the html
    // var url = "https://public.tableau.com/views/JavaScriptProjectWorkbook/USA";


    var url = "https://public.tableau.com/views/JavaScriptProjectWorkbook/Overview";
    //url of the dashboard on Tableau Public


    //This is an object containing some properties and their default values being set
    var options = {
        hideTabs : true,
        hideToolbar : true,
        onFirstInteractive: function ()
            {
                workbook = viz.getWorkbook();
                //viz here is a function scope and it is one of the tableau inbuilt object
                //get the current view and get the workbook object
                activeSheet = workbook.getActiveSheet(); 
                //get the active sheet from the workbook object of the view
            }
        };


    var viz = new tableau.Viz(containerDiv, url, options);
    //viz here is of the global scope and a variable
    //A new object created for an inbuilt object/function called tableau with a property called Viz

};

//Switiching Tabs
//Not yet working

function barChart(){
    
    workbook.activateSheetAsync("Bar Chart")
};

function bubbleChart(){
    
    workbook.activateSheetAsync("Bubble Chart")
};

function boxAndWhisker(){
    
    workbook.activateSheetAsync("Box and Whisker")
};


//Filters
//wEST Filter
//Promise should be used here

function westFilter(){
    workbook.activateSheetAsync("Bar Chart");
    activeSheet.applyFilterAsync(
        'Region',
        'West',
        tableau.FilterUpdateType.REPLACE
    )
};



//EAST Filter

function eastFilter(){
    workbook.activateSheetAsync("Bar Chart");
    activeSheet.applyFilterAsync(
        'Region',
        'East',
        tableau.FilterUpdateType.REPLACE
    )
};




//SOUTH Filter

function southFilter(){
    workbook.activateSheetAsync("Bar Chart");
    activeSheet.applyFilterAsync(
        'Region',
        'South',
        tableau.FilterUpdateType.REPLACE
    )
};


