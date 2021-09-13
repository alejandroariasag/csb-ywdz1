var output = document.getElementsByClassName("search-response-output")[0];
var username = "octocat";
searchUser(username);

var searchForm = document.getElementById("searchForm");

searchForm.addEventListener("submit", function (element) {
  element.preventDefault();

  var username = document.getElementById("username").value;
  searchUser(username);
});

function searchUser(username) {
  fetch("https://api.github.com/users/" + username).then(function (response) {
    if (response.ok) {
      output.classList.remove("search-response-output-show");
      response.json().then(function (data) {
        document.getElementById("gh-avatar_url").src = data.avatar_url;
        document.getElementById("gh-name").innerText = data.name;
        document.getElementById("gh-login").innerText = "@" + data.login;

        var date = data.created_at;

        var unFormatedDate = new Date(date);
        var day = unFormatedDate.getDate();
        var month = unFormatedDate.getMonth();

        if (unFormatedDate.getMonth() === 0) {
          month = "0" + (unFormatedDate.getMonth() + 1);
        } else if (unFormatedDate.getMonth() <= 8) {
          month = "0" + (unFormatedDate.getMonth() + 1);
        } else {
          month = unFormatedDate.getMonth() + 1;
        }
        var year = unFormatedDate.getFullYear();

        var formatedDate = "Joined " + day + " " + month + " " + year;

        document.getElementById("gh-created_at").innerText = formatedDate;

        document.getElementById("gh-bio").innerText = data.bio;
        if (!data.bio) {
          document.getElementById("gh-bio").innerText = "No bio...";
        }
        document.getElementById("gh-public_repos").innerText =
          data.public_repos;
        document.getElementById("gh-followers").innerText = data.followers;
        document.getElementById("gh-following").innerText = data.following;
        document.getElementById("gh-location").innerText = data.location;
        document.getElementById("gh-twitter_username").innerText =
          data.twitter_username;
        if (!data.twitter_username) {
          document.getElementById("gh-twitter_username").innerText =
            "Not Available";
        }
        document.getElementById("gh-blog").innerText = data.blog;
        if (!data.blog) {
          document.getElementById("gh-blog").innerText = "Not Available";
        }
        document.getElementById("gh-company").innerText = data.company;
        if (!data.company) {
          document.getElementById("gh-company").innerText = "Not Available";
        }
      });
    } else {
      output.classList.add("search-response-output-show");
    }
  });
}
