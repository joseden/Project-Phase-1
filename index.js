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


const countrySelect = document.getElementById('country');
        
        // Function to fetch country data from RESTcountries API
        function fetchCountries() {
            fetch('https://restcountries.com/v3.1/all')
                .then((response) => response.json())
                .then((data) => {
                    data.forEach((country) => {
                        const option = document.createElement('option');
                        option.value = country.name.common;
                        option.textContent = country.name.common;
                        countrySelect.appendChild(option);
                    });
                })
                .catch((error) => {
                    console.error('Error fetching country data:', error);
                });
        }
        
        // Call the function to populate the select element with countries
        fetchCountries();










