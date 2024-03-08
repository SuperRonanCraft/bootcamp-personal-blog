function createPost(_title, _content, _author) {
  // Grab the example post and copy its structure
  const post = document.getElementById("example").cloneNode(true);
  // Set its title, content and author
  const title = post.querySelector(".title");
  title.textContent = _title;
  const content = post.querySelector(".content");
  content.textContent = _content;
  const author = post.querySelector(".author");
  author.textContent = `Posted by: ${_author}`;
  // Add this new post to the posts element
  const posts = document.getElementById("posts");
  posts.appendChild(post);
  // Because the example post is hidden, unhide it
  post.style.display = "block";
}

createPost("Title", "Content", "Author");
createPost("Title", "Content", "Author");
