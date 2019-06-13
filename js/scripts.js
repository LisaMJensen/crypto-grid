$(document).ready(function() {
  $("form#cryptoForm").submit(function(event) {
    event.preventDefault();
    var userSentence = $("input#userString").val();
//business logic
var noSpec = userSentence.replace(/[ !%$;.,_'-?]/g,"").toLowerCase();
//var finalString = noPunc.replace(/\s{2,}/g," ");
//var noPunc.toLowerCase();

var totalLetters = noSpec.length;
var sqRoot = Math.sqrt(totalLetters);
var columns;
var rows;

  if (sqRoot%1 === 0) {
      columns = sqRoot;
      rows = sqRoot;
  } else {
      columns = Math.floor(sqRoot);
      rows = (Math.floor(sqRoot)) + 1;
  }

  var regArray = [];
  var encryptArray = [];
  var letterTotal = 0;

  for (var i=0; i < rows; i++) {
    var newArray = [];
    regArray[i] = newArray;

    for (var j=0; j < columns; j++) {
      regArray[i][j] = noSpec.charAt(letterTotal);
      letterTotal++;
    }
  }

  var elemCount = 0;

    for(var i=0; i < columns; i++) {
      for(var j=0; j < rows; j++) {
        encryptArray[elemCount] = regArray[j][i];
      elemCount++;
      }
    }

    for (var i=0; i <encryptArray.length; i++) {
      if ((i+1)%5===0) {
        encryptArray[i] = encryptArray[i] + " ";
      }
    }


    var results = encryptArray.toString();
    results = results.replace(/[,]/g,'');






//user interface logic
    $(".initialString").text(userSentence);
    //result = romanize(userNum);
    $(".result").text(results);
});
});
