
//Setting Global Variable
//This will give undefined by default.
var viz, workbook, activeSheet, containerDiv, options, url;


function initViz(){
    var containerDiv = document.getElementById('"vizContainer"');
    //a variable that holds the div container's ID in the body of the html
    // var url = "https://public.tableau.com/views/JavaScriptProjectWorkbook/USA";


    // var url = "https://public.tableau.com/views/JavaScriptProjectWorkbook/Overview";
    var url = "https://public.tableau.com/views/JavaScriptProjectWorkbook/BubbleChart";
    //url of the dashboard on Tableau Public


    //This is an object containing some properties and their default values being set
    var options = {
        hideTabs : true,
        hideToolbar : true,
        // width : "800px",
        // height : "800px", 
        onFirstInteractive: function (vizEvent)
            {
                workbook = vizEvent.getViz().getWorkbook();
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
    
    workbook.activateSheetAsync("Bar Chart");
    console.log('Bar Chart Activated')
};

function bubbleChart(){
    
    workbook.activateSheetAsync("Bubble Chart");
    console.log('Bubble Chart Activated')
};

function boxAndWhisker(){
    
    workbook.activateSheetAsync("Box and Whisker");
    console.log('Box and Whisker Chart Activated')
};


//Filters
//wEST Filter
//Promise should be used here

function westFilter(){
    // workbook.activateSheetAsync("Bar Chart");
    activeSheet.applyFilterAsync(
        "Region",
        "West",
        tableau.FilterUpdateType.REPLACE
    );
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



//radio button Activation

function radioButton()
{
    const rbs = document.querySelectorAll('input[name = "region"]');
    //double quote is needed in a single quote to ensure specitifity
    let selectedValue;
    for(const radiobutton of radiobuttons){
        if (radiobutton.checked){
            selectedValue = radiobutton.value;
            break;
        }
    }


};








