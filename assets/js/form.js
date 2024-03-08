//Dependencies
const blogAuthorInput = document.getElementById("author");
const blogTitleInput = document.getElementById("title");
const blogContentInput = document.getElementById("content");
const submitButton = document.getElementById("submit-button");

// Click event for submit button
function newSubmission(event) {
  // Stop the form button from reloading the page
  event.preventDefault();

  //Save form data to object
  var blogPost = {
    author: blogAuthorInput.value,
    title: blogTitleInput.value,
    content: blogContentInput.value,
  };

  // Does any input field not have a value?
  if (!blogPost.author || !blogPost.title || !blogPost.content) {
    console.log("No Content");
    document.getElementById("error").style.display = "block";
    alert("Please fill out all fields.");
    return;
  }

  // Get existing posts or initialize empty array
  var existingPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
  // Add the new post to the array
  existingPosts.push(blogPost);
  // Save the updated array back to localStorage
  localStorage.setItem("blogPosts", JSON.stringify(existingPosts));

  submitButton.textContent = "New Blog Posted!";
  console.log("Blog post saved successfully!");
  //Redirect to blog posts
  window.location.assign("blog.html");
}

// Submit button click event
submitButton.addEventListener("click", newSubmission);
