# HTML-Output-from-Google-Sheets
Google Apps Script. Generate HTML output from a Google Sheets query.

This web app generates an HTML page that allows the user to key in a search term for data query in an indicated Google Sheets file. The app accesses Google Sheets data using Google Visualization API in order to avoid authentication complications, then outputs the dataset in CSV format. Once the search result is found, the app displays corresponding data back on the HTML page, including those in URL format. Simple embeded CSS attributes are used.

Additional Configurations
- The Apps Script project file itself needs Viewer access for Anyone
- Use "Executed as Me" deployment mode
- The Google Sheets file needs Viewer access for Anyone

The app is developed by @isarab with the assistance of Copilot. It is licensed under MIT License.

Tags: Google Apps Script; web app, Google Sheets; query; HTML output

Build 1.1.0
20250508

Wish List
- Aesthetic improvement for large-screen interface
- Replace text input with auto-populatd drop-down list
