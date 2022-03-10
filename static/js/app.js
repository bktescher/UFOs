//import the data from data.js
const tableData= data;

//Reference the HTML table using d3
var tbody= d3.select("tbody")

function buildTable(data) {
    //clear existing data
    tbody.html("");

//loop through each object and append data to row/cells for each value
data.forEach((dataRow) => {

    // append a row to the table body
    let row = tbody.append("tr");

    //Loop through each field in datarow, add each value as table cell(td)
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
    });
  });
}

function handleClick() {
    
    // Grab the datetime vale from the filter
    let date= d3.select("#datetime").property("value");
    let filteredData= tableData;

    //check if a date was entered and data is filtered using that date
    if (date) {
        //apply filter to table data to only keep rows where datetime value matches filter value
        filteredData= filteredData.filter(row => row.datetime === date);
    };
    //rebuild table using the filtered data.  If no date entered, then filteredData
    //will just be the original tableData
    buildTable(filteredData);
}
//Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

//build the talbe when the page loads
buildTable(tableData);

