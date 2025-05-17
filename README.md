# HTML-Output-from-Google-Sheets
Google Apps Script. Generate HTML output from a Google Sheets query.

This web app generates an HTML page that allows the user to key in a search term for data query in an indicated Google Sheets file. The app accesses Google Sheets data using Google Visualization API in order to avoid authentication complications, then outputs the dataset in CSV format. Once the search result is found, the app displays corresponding data back on the HTML page, including those in URL format. Simple embeded and in-line CSS stylings are used.

The app was later extended to fetch summary data from another Google Sheets based on spreadsheet ID stored in the first first spreadsheet. The app then displays the summary data together with a link to see more details of the summary.

### Additional Configurations
- The Apps Script project file itself needs "Viewer" access for "Anyone"
- Use "Executed as Me" deployment mode
- The Google Sheets file needs "Viewer" access for "Anyone"

This app is developed by @isarab with the assistance of Copilot. It is licensed under MIT License.

Tags: Google Apps Script; web app; Google Sheets; query; HTML output; CSS

## Implementation Instance
This implementation instance is to allow meditation students to record their practice homework by keying in their student IDs. The app access the first Google Sheets (student directory) to look for necessary information that matches with input student IDs. The app then display a link to their personal homework recording form (Google Form) allowing them to record their new homework. The app also fetches and displays summary data of the student's homework submissions from the second Google Sheets (that stores personal homework recording form responses) together with a link to see details of the records.

### Related files
1. Code.gs for server-side JavaScript
2. Form.html for HTML, CSS, and client-side JavaScript
3. Google Sheets #1 (student directory) stores student ID, student name, link to personal Google Form, Google Sheets ID of the form responses (Google Sheets #2)
4. Google Sheets #2 stores form responses (sheet Form responses 1) and summary information (sheet: Summary)
5. Personal Google Forms for each student to record his/her homework

## Build 4.0.0
2025-05-17<br>
Addition of summary and detailed records viewings

## Build 2.0.0 & 3.0.0
Additional functionalities and output refinements

## Build 1.0.0
2025-05-08<br>
Initial development

## Wish List
- Aesthetic improvement for large-screen interface
- Replace text input with auto-populatd drop-down list (pending, as text input is currently the preferred method)
