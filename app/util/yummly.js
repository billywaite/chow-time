//require yummly
var yummly = require('yummly');

//Yummly API credentials
var credentials = {
  id: '5c392f3d',
  key: '3d62beeb20098f02fb88f93933ae92f1'
}

// yummly search command
yummly.search({
  credentials: credentials,
  query: {
    q: 'chicken'
  }
}, function (error, response, json) {
  if (error) {
    console.error(error);
  } else if (response.statusCode === 200) {
    temporary = json;
    console.log(json);
  }
});

// yummly recipe function
yummly.search({ // calling search first to get a recipe id
  credentials: credentials,
  query: {
    q: 'pasta'
  }
}, function (error, response, json) {
  if (error) {
    console.error(error);
  } else if (response.statusCode === 200) {
    yummly.recipe({
      credentials: credentials,
      id: json.matches[0].id // id of the first recipe returned by search
    }, function (error, response, json) {
      if (error) {
        console.error(error);
      } else {
        console.log(json);
      }
    });
  }
});