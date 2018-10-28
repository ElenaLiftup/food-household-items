function checkBestBeforeDate() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  var sheet = ss.getSheetByName('Next 7 days');
  var checkCell = sheet.getRange("A3").getValue();
  
  var sheetReport = ss.getSheetByName('Report');  
  var numRowReport = sheetReport.getLastRow() + 1;

  var result = 'No problem';
  
  if(checkCell != '#N/A'){
    result = sendEmail();
  }
   
  sheetReport.getRange(numRowReport, 1, 1, 2).setValues([[new Date(), result]]);
}

function sendEmail() {
  var emailQuotaRemaining = MailApp.getRemainingDailyQuota();
  if (emailQuotaRemaining > 0){
    var emailAddress = SpreadsheetApp.getActive().getOwner();
    var message = 'Hi! You should check file \'Food, household items.\'';
    var subject = 'Food, household items';
    MailApp.sendEmail(emailAddress, subject, message);
    return 'Sent';
  }else{
    return 'Daily quota is exceeded';
  }
}
