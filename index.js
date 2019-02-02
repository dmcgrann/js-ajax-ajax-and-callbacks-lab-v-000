$(document).ready(function (searchRepositories){
  var searchTerms =
    'https://api.github.com/repos/rails/rails/commits?sha=82885325e04d78fb7ec608a4670164d842d23078';
 
  $.get(searchTerms).done(function(results) {
      return results;
  });
});
