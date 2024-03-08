const blogAuthorInput = document.getElementById("author");
const blogTitleInput = document.getElementById("title");
const blogContentInput = document.getElementById("content");
const submitButton = document.getElementById("submit-button");

// Click event for submit button
function newSubmission(event) {
  // console.log("Im a button!");
  event.preventDefault();
  var blogPost = {
    author: blogAuthorInput.value,
    title: blogTitleInput.value,
    content: blogContentInput.value,
  };

  // Get existing posts or initialize empty array
  var existingPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
  // Add the new post to the array
  existingPosts.push(blogPost);
  // Save the updated array back to localStorage
  localStorage.setItem("blogPosts", JSON.stringify(existingPosts));

  // Clear input fields
  // blogAuthorInput.value = "";
  // blogTitleInput.value = "";
  // blogContentInput.value = "";

  submitButton.textContent = "New Blog Posted!";
  console.log("Blog post saved successfully!");
  //Redirect to blog posts
  setTimeout(() => {
    window.location.assign("blog.html");
  }, 200);
}

submitButton.addEventListener("click", newSubmission);
