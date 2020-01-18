// Api Functions

$(document).ready(function() {
  $("#search1").on("click", function(event) {
    event.preventDefault();
    var selectedLang = $("#myList :selected").text();
    console.log(selectedLang);
    if (selectedLang === "Japanese") {
      return japanese();
    } else if (selectedLang === "French") {
      return french();
    } else {
      return spanish();
    }
  });
<<<<<<< HEAD

=======
​
>>>>>>> 189c5dea8b8c2a71129ebd8021a56f3cd15c1a12
  function japanese(query) {
    var query = $("#input_text").val();
    var queryURL =
      "https://cors-anywhere.herokuapp.com/http://beta.jisho.org/api/v1/search/words?keyword=" +
      query;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      var wordDiv = $("<div>").addClass("cardDiv");
      var titleDiv = $("<div>").addClass("titleDiv");
      var speakerButton = $("<button>").addClass("fas fa-volume-up");
      speakerButton.attr("id", "speaker");
      var pOne = $("<p>").text(response.data[0].japanese[0].word);
      pOne.addClass("card-title");
      titleDiv.append(pOne, speakerButton);
      var pTwo = $("<p>").text(
        response.data[0].senses[0].english_definitions[0]
      );
      wordDiv.append(titleDiv, pTwo);
      $(".card").prepend(wordDiv);
      var query = $("#input_text").val();
      var queryUrl1 =
        "https://www.googleapis.com/customsearch/v1?q=" +
        encodeURI(query) +
        "&cx=008178743786087981107:hpgckvpylnl&searchType=image&key=AIzaSyDXVQjXJ6f75Uw8GzUsbFCMh2oqzge56TQ";
      console.log(queryUrl1);
      $.ajax({
        url: queryUrl1,
        method: "GET"
      }).then(function(res) {
        console.log(res);
        var image = $("<img>").attr("src", res.items[0].link);
        console.log(image);
        wordDiv.append(image);
<<<<<<< HEAD
        $(".card").append(wordDiv);
      });
    });
  }

=======
        $(".card").prepend(wordDiv);
      });
    });
  }
​
>>>>>>> 189c5dea8b8c2a71129ebd8021a56f3cd15c1a12
  function french(query) {
    var query = $("#input_text").val();
    var queryURL =
      "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" +
      query +
      "?key=3634fd55-b777-4316-b6a6-070f3b29b843";
    console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      var wordDiv = $("<div>").addClass("cardDiv");
      var titleDiv = $("<div>").addClass("titleDiv");
      var speakerButton = $("<button>").addClass("fas fa-volume-up");
      speakerButton.attr("id", "speaker");
      var pOne = $("<p>").text(response[0].meta.id);
      pOne.addClass("card-title");
      titleDiv.append(pOne, speakerButton);
      var pTwo = $("<p>").text(response[0].shortdef[0]);
      wordDiv.append(titleDiv, pTwo);
      $(".card").prepend(wordDiv);
      var query = $("#input_text").val();
      var queryUrl1 =
        "https://www.googleapis.com/customsearch/v1?q=" +
        encodeURI(query) +
        "&cx=008178743786087981107:hpgckvpylnl&searchType=image&key=AIzaSyDXVQjXJ6f75Uw8GzUsbFCMh2oqzge56TQ";
      console.log(queryUrl1);
      $.ajax({
        url: queryUrl1,
        method: "GET"
      }).then(function(res) {
        console.log(res);
        var image = $("<img>").attr("src", res.items[0].link);
        console.log(image);
        wordDiv.append(image);
<<<<<<< HEAD
        $(".card").append(wordDiv);
      });
    });
  }

=======
        $(".card").prepend(wordDiv);
      });
    });
  }
​
>>>>>>> 189c5dea8b8c2a71129ebd8021a56f3cd15c1a12
  function spanish(query) {
    var query = $("#input_text").val();
    var queryURL =
      "https://www.dictionaryapi.com/api/v3/references/spanish/json/" +
      query +
      "?key=3ff709b9-b76f-4829-8ce8-857a0204cb70";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      var wordDiv = $("<div>").addClass("cardDiv");
      var titleDiv = $("<div>").addClass("titleDiv");
      var speakerButton = $("<button>").addClass("fas fa-volume-up");
      speakerButton.attr("id", "speaker");
      var pOne = $("<p>").text(response[0].meta.id);
      pOne.addClass("card-title");
      titleDiv.append(pOne, speakerButton);
      var pTwo = $("<p>").text(response[0].shortdef[0]);
      wordDiv.append(titleDiv, pTwo);
      $(".card").prepend(wordDiv);
      var query = $("#input_text").val();
      var queryUrl1 =
        "https://www.googleapis.com/customsearch/v1?q=" +
        encodeURI(query) +
        "&cx=008178743786087981107:hpgckvpylnl&searchType=image&key=AIzaSyDXVQjXJ6f75Uw8GzUsbFCMh2oqzge56TQ";
      console.log(queryUrl1);
      $.ajax({
        url: queryUrl1,
        method: "GET"
      }).then(function(res) {
        console.log(res);
        var image = $("<img>").attr("src", res.items[0].link);
        console.log(image);
        wordDiv.append(image);
<<<<<<< HEAD
        $(".card").append(wordDiv);
      });
    });
  }

=======
        $(".card").prepend(wordDiv);
      });
    });
  }
​
  var artyom = new Artyom();
>>>>>>> 189c5dea8b8c2a71129ebd8021a56f3cd15c1a12
  function startArtyom() {
    artyom.initialize({
      language: "en-GB",
      continuous: false,
      debug: true,
      listen: true
    });
  }
<<<<<<< HEAD
  var artyom = new Artyom();
  $(".card").on("click", "#speaker", function() {
    console.log("clicked button");
    var word = String(
      $(this)
        .parent(".titleDiv")
        .children(".card-title")
        .text()
    );
=======
​
  $(".card").on("click" , "#speaker", function(){
    console.log("clicked");
    var word = String($(this).parent(".titleDiv").children(".card-title").text());
>>>>>>> 189c5dea8b8c2a71129ebd8021a56f3cd15c1a12
    console.log(word);
    console.log("clicked");
    startArtyom();
    artyom.say(word);
<<<<<<< HEAD
  });
});
=======
  
  });
});
>>>>>>> 189c5dea8b8c2a71129ebd8021a56f3cd15c1a12
