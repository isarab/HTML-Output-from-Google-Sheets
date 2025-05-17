// Individual Homework
// Version 4.0
// Archive: https://github.com/isarab/HTML-Output-from-Google-Sheets

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('Form');
}

function getData(searchTerm) {
  // Production data for v4.0
  // All-numeric data field must be formatted as normal text 
  var fileId = "[Enter spreadsheet ID here]";

  // Access Google Sheets in CSV format to avoid authentication complications
  var url = "https://docs.google.com/spreadsheets/d/" + fileId + "/gviz/tq?tqx=out:csv&sheet=Data";
  var response = UrlFetchApp.fetch(url);
  var csvData = response.getContentText("UTF-8").trim();
  
  // Split data set into rows by detecting CR and LF, and put them into a 2-D array
  var rows = csvData.split(/\r?\n/);

  // Slipt the 2-D array into multiple 1-D arrays of each row
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i].replace(/['"]/g, '').split(",");

    // Find the searchTerm and compose corresponding http links
    // Get student ID from column A
    if (row[0].trim() === searchTerm) {

      // Get student name from column B and student's personal form link from colummn C
      var link = `<a href="${row[1].trim()}" target="_blank" class="link">${row[2].trim()}</a>`;

      // Get the personal form responses spreadsheet ID from column D
      var sheetId = row[3].trim(); 

      // Fetch data from the "Summary" tab of the corresponding spreadsheet
      var summarySheet = SpreadsheetApp.openById(sheetId).getSheetByName("Summary");
      if (!summarySheet) {
        return { found: false, text: "ไม่พบข้อมูลสรุปของท่าน" };
      }

      // Summary data stored in range A2:D2
      var data = summarySheet.getRange("A2:D2").getValues()[0];

      // Construct response message
      var message = `<span style="color:black;">ท่านได้บันทึกผลการบ้านไว้ ${data[0]} ครั้ง</span><hr>`;
      message += `รวมเวลาเดินจงกรม ${data[1]} นาที<br>`;
      message += `รวมเวลานั่งสมาธิ ${data[2]} นาที<br>`;
      message += `รวมบันทึกผลการบ้านทั้งสิ้น ${data[3]} นาที<br><span style="color:orange;"><i>ก่อนนำไปชดเชยที่ยังปฎิบัติไม่ครบจากการเรียน (ถ้ามี)</i></span>`;

      var detailLink = `<p>ท่านสามารถดูรายละเอียดบันทึกผลการบ้านของท่านได้ 
        <a href="https://docs.google.com/spreadsheets/d/${sheetId}" target="_blank">ที่นี่</a>
      </p>`;

      return { found: true, text: `โปรดคลิกที่ชื่อของท่าน<br>${link}<br><br>${message}<br>${detailLink}` };
    }
  }

  // Compose an error message if the searchTerm is not found
   return { found: false, text: "ไม่พบรหัสของท่าน โปรดลองอีกครั้ง" };
}
