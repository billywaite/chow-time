$(document).ready(function() {

// Create a form to input text
var keywords = $('#input-text').val();

// use the keywords variable inplace of chicken
var url = "http://api.yummly.com/v1/api/recipes?q=chicken&_app_id=5c392f3d&_app_key=3d62beeb20098f02fb88f93933ae92f1";

$.ajax({
  type: 'GET',
  url: url,
  dataType: 'jsonp',
  success: function() { console.log('succes!'); },
  error: function(data, data2) { console.log(data); },
  });
});

// display the json data