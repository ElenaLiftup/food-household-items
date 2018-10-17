function checkBestBeforeDate() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Next 7 days');  
  var checkCell = sheet.getRange("A3").getValue();
  
  if(checkCell != '#N/A'){
    sendEmail();    
  }   
}

function sendEmail() {
  var emailQuotaRemaining = MailApp.getRemainingDailyQuota();
  if (emailQuotaRemaining > 0){
    var emailAddress = SpreadsheetApp.getActive().getOwner();
    var message = 'Hi! You should check file \'Food, household items.\'';
    var subject = 'Food, household items';
    MailApp.sendEmail(emailAddress, subject, message);
  }else{
    Logger.log('Daily quota is exceeded'); 
  }
}
