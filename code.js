

var viz;
var workbook;
var activeSheet;

function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
        // url = "https://public.tableau.com/views/JavaScriptProjectWorkbook/BubbleChart",
        url = "https://public.tableau.com/views/JavaScriptProjectWorkbook/Bar",
        options = {
            hideTabs: true,
            onFirstInteractive: function ()

                {
                    workbook = viz.getWorkbook();
                    activeSheet = workbook.getActiveSheet();
                    console.log("options is working");

                }

        };

    viz = new tableau.Viz(containerDiv, url, options);
}

function vizResize() {
    var width = document.getElementById("resizeWidth").value;
    var height = document.getElementById("resizeHeight").value;

    // gets the width and height value

    viz.setFrameSize(parseInt(width, 10), parseInt(height, 10));
}


//Original Size

function originalSize() {
    viz.setFrameSize(parseInt(1300, 10), parseInt(700, 10));
}



//End of Test


//Switching Sheets

function barChart(){

    // var workbook = viz.getWorkbook();
    workbook.activateSheetAsync("Bar");
    console.log('Bar Chart Activated')
};


function bubbleChart(){
    var workbook = viz.getWorkbook();
    workbook.activateSheetAsync("Bubble Chart");
    console.log('Bubble Chart Activated')
};

function boxAndWhisker(){
    var workbook = viz.getWorkbook();
    workbook.activateSheetAsync("BW");
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








