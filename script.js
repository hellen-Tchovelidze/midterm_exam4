let darkModeBtn = document.getElementById("DARK_btn");
let ligtht = document.getElementById("icone_moon")
let darkh1 = document.getElementById("darkh1")
let searchInput = document.getElementById("username");
let searchBtn = document.getElementById("search-btn");
let userPhoto = document.getElementById("user_photo");
let userName = document.getElementById("user_namee");
let userTexx = document.getElementById("usertexx");
let joinDate = document.getElementById("data");
let bio = document.getElementById("bio");
let noresult = document.getElementById("noresult")
let repos = document.getElementById("Repos");
let followers = document.getElementById("Followers");
let following = document.getElementById("Following");
let locationText = document.getElementById("location");
let twitterText = document.getElementById("twitter");
let urlText = document.getElementById("githubLink");
let githubText = document.getElementById("githubName");

async function fetchUserData(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  if (data.message === "Not Found") {
    noresult.textContent = "No results"; 
    noresult.classList.add("error"); 
    return; 
  }
  

  userPhoto.src = data.avatar_url;
  userName.textContent = data.name;
  userTexx.textContent = `@${data.login}`;
  joinDate.textContent = `Joined ${new Date(
    data.created_at
  ).toLocaleDateString()}`;
  bio.textContent = data.bio;

  repos.textContent = data.public_repos;
  followers.textContent = data.followers;
  following.textContent = data.following;

  locationText.textContent = data.location || "Not Available";
  twitterText.textContent = data.twitter_username
    ? `@${data.twitter_username}`
    : "Not Available";
  urlText.textContent = data.blog || "Not Available";
  githubText.textContent = `@${data.login}`;
}

searchBtn.addEventListener("click", () => {
  let username = searchInput.value;
  if (username) {
    fetchUserData(username);
  }
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    let username = searchInput.value.trim();
    if (username) {
      fetchUserData(username);
    }
} })

if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
 
}
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
  img.src = "002-sun.png"; 
});