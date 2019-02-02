function searchRepositories() {
  const searchTerms = $("#searchTerms").val();
  const url = "https://api.github.com//search/repositories?q=${searchTerms}";
  $get(url, data => displaySearchResults(data)).fail(error => displayError());
}


$(document).ready(function (){
});
