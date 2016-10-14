//require yummly
var yummly = require('yummly');

//Yummly API credentials
var credentials = {
  id: '5c392f3d',
  key: '3d62beeb20098f02fb88f93933ae92f1'
}

// yummly search command
var searchRecipe = yummly.search({
  credentials: credentials,
  query: {
    q: 'chicken'
  }
}, function (error, response, json) {
  if (error) {
    console.error(error);
  } else if (response.statusCode === 200) {
    var recipes = JSON.parse(json);
    console.log(recipes);
  }
});

module.exports = {
  searchRecipe: searchRecipe
};