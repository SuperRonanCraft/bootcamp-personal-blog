const blogAuthorInput = document.getElementById("author");
const blogTitleInput = document.getElementById("title");
const blogContentInput = document.getElementById("content");
const button = document.getElementById("submit-button");

// Click Submit event
button.addEventListener("click", () => {
  console.log("Im a button!");

  var blogPost = {
    title: "Saved Title",
    content: "Some Content",
    author: "Someone",
  };

  // Get existing posts or initialize empty array
  var existingPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
  // Add the new post to the array
  existingPosts.push(blogPost);
  // Save the updated array back to localStorage
  localStorage.setItem("blogPosts", JSON.stringify(existingPosts));

  // Clear input fields
  blogAuthorInput.value = "";
  blogTitleInput.value = "";
  blogContentInput.value = "";

  alert("Blog post saved successfully!");
  window.location.assign("blog.html");
});
