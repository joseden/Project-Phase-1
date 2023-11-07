document.addEventListener("DOMContentLoaded", function() {
  const dataForm = document.getElementById('dataForm');
  const nameInput = document.getElementById('name');
  const submitButton = document.getElementById('submitButton');

  submitButton.addEventListener('click', function() {
      // Get the value of the Name of Bank input
      const bankName = nameInput.value;
      const data = {
          bankName: bankName
      };

      console.log('Data submitted:', data);

      
      dataForm.reset();
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const dataForm = document.getElementById('dataForm');
  const nameInput = document.getElementById('name');
  const residentStatusSelect = document.getElementById('residentStatus');
  const resultText = document.getElementById('result');
  const submitButton = document.getElementById('submitButton');

  submitButton.addEventListener('click', function() {
      const bankName = nameInput.value;
      const residencyStatus = residentStatusSelect.value;

      const data = {
          bankName: bankName,
          residencyStatus: residencyStatus
      };

      console.log('Data submitted:', data);

      dataForm.reset();

    });
    residentStatusSelect.addEventListener('change', function() {
        const selectedOption = residentStatusSelect.options[residentStatusSelect.selectedIndex];
        resultText.textContent = `Citizenship status: ${selectedOption.text}`;
    });
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

document.addEventListener('DOMContentLoaded', function () {
  const textarea = document.getElementById('reason');
  const wordCountDisplay = document.getElementById('wordCount');
  const submitButton = document.getElementById('submitButton');

  textarea.addEventListener('input', function () {
    const content = textarea.value;
    const words = content.trim().split(/\s+/);
    const wordCount = words.length;
    const wordsRemaining = 500 - wordCount;

    wordCountDisplay.textContent = `Words remaining: ${wordsRemaining}`;

    if (wordsRemaining >= 0) {
      submitButton.removeAttribute('disabled');
    } else {
      submitButton.setAttribute('disabled', 'true');
      textarea.value = words.slice(0, 500).join(' ');
      wordCountDisplay.textContent = 'Word limit exceeded';
    }
  });

  submitButton.addEventListener('click', function () {
    const content = textarea.value;
    // Here, you can do something with the content, like saving it or processing it.
    alert('Content submitted: ' + content);
  });
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










