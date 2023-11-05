// Get the select element and the result paragraph element
const selectElement = document.getElementById('residentStatus');
const resultElement = document.getElementById('result');

// Add an event listener to the select element
selectElement.addEventListener('change', function () {
  const selectedValue = selectElement.value;

  if (selectedValue === 'resident') {
    resultElement.textContent = 'You are a resident of Kenya';
  } else if (selectedValue === 'non-resident') {
    resultElement.textContent = 'You are a non-resident of Kenya';
  } else {
    resultElement.textContent = 'Please make a selection';
  }
});

// Read operation using this function

const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const wordLimitWarning = document.getElementById("wordLimitWarning");
const wordLimit = 500; // Set your word limit here

// Event listener to count words
textInput.addEventListener("input", function () {
  const text = textInput.value;
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  wordCount.textContent = `Words: ${words}`;

  if (words > wordLimit) {
    wordLimitWarning.textContent = `Word limit exceeded (max ${wordLimit} words)`;
    wordLimitWarning.style.display = "block";
  } else {
    wordLimitWarning.style.display = "none";
  }
});



// Get the textarea element and the word count display element
const textarea = document.getElementById('reason');
const wordCountDisplay = document.getElementById('wordCount');

// Add an input event listener to the textarea
textarea.addEventListener('input', function () {
  const content = textarea.value;
  const wordCount = content.trim().split(/\s+/).length; // Split content by spaces to count words
  const wordsRemaining = 500 - wordCount;

  // Update the word count display
  wordCountDisplay.textContent = `Words remaining: ${wordsRemaining}`;

  // Disable the textarea if the word limit is reached
  if (wordsRemaining < 0) {
    textarea.value = content.split(/\s+/).slice(0, 500).join(' ');
    wordCountDisplay.textContent = 'Word limit exceeded';
    textarea.setAttribute('disabled', 'true');
  }
});


// Function to handle attaching the PDF
function attachPdf() {
  const pdfInput = document.getElementById('pdfFile');
  const file = pdfInput.files[0];
  const formData = new FormData();

  if (file) {
    formData.append('pdfFile', file);

    // You can use the formData to send the file to the server using AJAX or perform other actions
    // For now, let's just display a success message
    alert('PDF file attached successfully.');
  } else {
    alert('Please select a PDF file to attach.');
  }
}

// Add an event listener to the button
const attachButton = document.getElementById('attachButton');
attachButton.addEventListener('click', attachPdf);

async function showCountries() {
  let xhr = new XMLHttpRequest();
  const url = 'https://restcountries.com/v3.1/name/';

  // Define the data you want to send in the request
  const data = { name: 'your_country_name' }; // Replace 'your_country_name' with the desired country name

  // Convert the data to a JSON string
  const dataString = JSON.stringify(data);

  xhr.open('POST', url, true);

  // Set the request header to indicate JSON content
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onload = function () {
    if (xhr.status == 200) {
      console.log('Success');
      let countries = JSON.parse(this.responseText);
      console.log(countries);
      countries.forEach(country => {
        const countryCard = document.createElement('div');
        countryCard.innerHTML = country.name;
        // Append the countryCard to the document, or perform any other desired actions here
      });
    }
  };

  // Send the request with the data in the request body
  xhr.send(dataString);
}

// Call the function to make the API request
showCountries();




let likeCount = 0;
const likeButton = document.getElementById("likeButton");
const likeCountDisplay = document.getElementById("likeCount");

likeButton.addEventListener("click", function () {
  likeCount++;
  likeCountDisplay.textContent = likeCount === 1 ? "1 Like" : likeCount + " Likes";
});















