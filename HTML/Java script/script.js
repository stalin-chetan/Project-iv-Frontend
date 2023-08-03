// Sample JavaScript to handle like, comment, and dislike buttons (No actual functionality)
const likeButtons = document.querySelectorAll('.like-btn');
const commentButtons = document.querySelectorAll('.comment-btn');
const dislikeButtons = document.querySelectorAll('.dislike-btn');

likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('You liked this meme!');
  });
});

commentButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('You commented on this meme!');
  });
});

dislikeButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('You disliked this meme!');
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const refreshButton = document.getElementById("logo");

  refreshButton.addEventListener("click", function () {
    // Reload the current page to refresh the content
    location.reload();
  });
});

document.getElementById("search-button").addEventListener("click", function () {
  const apiKey = "YOUR_API_KEY"; // Replace this with your actual API key if required
  const searchQuery = document.getElementById("search-input").value;

  // Replace "API_URL" with the actual API endpoint URL of the other website
  const apiUrl = `API_URL?q=${searchQuery}&apiKey=${apiKey}`;

  // Make the API request using Fetch
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      displaySearchResults(data); // Function to display search results on the webpage
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

function displaySearchResults(results) {
  const resultsContainer = document.getElementById("search-results");
  resultsContainer.innerHTML = ""; // Clear previous results

  // Display each result in the results container (customize this based on the API response structure)
  results.forEach((result) => {
    const resultElement = document.createElement("div");
    resultElement.textContent = result.title; // Assuming the API response has a "title" field
    resultsContainer.appendChild(resultElement);
  });
}

