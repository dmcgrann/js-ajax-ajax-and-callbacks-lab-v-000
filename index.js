function searchRepositories() {
  const searchTerms = $("#searchTerms").val();
  const url = "https://api.github.com//search/repositories?q=${searchTerms}";
  $get(url, data => displaySearchResults(data)).fail(error => displayError());
}

function displaySearchResults() {
  const resultString = results.items.map(result => {
    return `
      <div>
        <h2><a href="${result.html_url}">${result.name}</a></h2>
        <p><a href="#" data-repository="${result.name}" data-owner="${result.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
        <p>${result.description}</p>
      </div>
      `
  });
   $("#results").html(resultString);
}

function displayError() {
  $("errors").html("I'm sorry, there's been an error. Please try again.");
}

function showCommits(el) {
  const commits = JSON.parse(this.responseText);
  const commitsList = `<ul>${commits
  
}


$(document).ready(function (){
});
