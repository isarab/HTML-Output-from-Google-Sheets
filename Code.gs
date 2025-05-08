// Version 1.0.0

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('Form');
}

function getData(searchTerm) {
  // Staging data for this version
  // Providing numeric, HTML link, and text data for columns 1,2, and 3 respectively
  // All-numeric data field must be formatted as normal text 
  var fileId = "[Enter spreadsheet ID here]"; // ID of the corresponding Google Sheets

  // Access Google Sheets in CSV format to avoid authentication issues
  var url = "https://docs.google.com/spreadsheets/d/" + fileId + "/gviz/tq?tqx=out:csv&sheet=Data"; 
  var response = UrlFetchApp.fetch(url);
  var csvData = response.getContentText("UTF-8").trim();

  // Split data set into rows by detecting CR and LF, and put them into a 2-D array
  var rows = csvData.split(/\r?\n/);

  // Slipt the 2-D array into multiple 1-D arrays of each row
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i].replace(/['"]/g, '').split(",");

    // Find the searchTerm and compose a corresponding http link
    if (row[0].trim() === searchTerm) {
      return 'โปรดคลิกที่ข้อความด้านล่างนี้<br><a href="' + row[1].trim() + '" target="_blank">' + row[2].trim() + '</a>';
    }
  }

  // Compose an error message if the searchTerm is not found
  return "ไม่พบคำค้นหาของท่าน โปรดลองอีกครั้ง";
}
