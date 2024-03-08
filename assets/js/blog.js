const example = document.getElementById("example");
const posts = document.getElementById("posts");
const clearButton = document.getElementById("clear-button");

function createPost(_title, _content, _author) {
  // Grab the example post and copy its structure
  const post = example.cloneNode(true);
  // Set its title, content and author
  const title = post.querySelector(".title");
  title.textContent = _title;
  const content = post.querySelector(".content");
  content.textContent = _content;
  const author = post.querySelector(".author");
  author.textContent = `Posted by: ${_author}`;
  // Add this new post to the posts element
  posts.appendChild(post);
  // Because the example post is hidden, unhide it
  post.style.display = "block";
}

window.addEventListener("load", () => {
  var savedPosts = JSON.parse(localStorage.getItem("blogPosts"));
  if (savedPosts) {
    savedPosts.forEach(function (post) {
      createPost(post.title, post.content, post.author);
    });
  } else {
    console.log("No blog posts found in localStorage.");
  }
});

// Click event for clear button
clearButton.addEventListener("click", () => {
  // Clear localStorage
  localStorage.clear();
  while (posts.firstChild) {
    posts.removeChild(posts.firstChild);
  }
});
