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
  const principalActivityTextarea = document.getElementById('principalActivity');
  const wordCountDisplay = document.getElementById('wordCount');
  const submitButton = document.getElementById('submitButton');

  principalActivityTextarea.addEventListener('input', function() {
      const maxLength = 500;
      const currentLength = principalActivityTextarea.value.length;
      const wordsRemaining = maxLength - currentLength;

      if (wordsRemaining >= 0) {
          wordCountDisplay.textContent = `Words remaining: ${wordsRemaining}`;
          submitButton.disabled = false; // Enable the submit button
      } else {
          wordCountDisplay.textContent = 'Exceeded the word limit';
          submitButton.disabled = true; // Disable the submit button
      }
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


document.addEventListener('DOMContentLoaded', function () {
  const countrySelect = document.getElementById('countrySelect');
  const submitButton = document.getElementById('submitButton');

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

  // Event listener for the Submit button
  submitButton.addEventListener('click', function () {
      const selectedCountry = countrySelect.value;
      if (selectedCountry) {
          // Perform any desired action with the selected country, e.g., submit it or save it
          console.log('Selected country:', selectedCountry);
      } else {
          alert('Please select a country before submitting.');
      }
  });
});








