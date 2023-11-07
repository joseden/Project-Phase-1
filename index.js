document.addEventListener("DOMContentLoaded", function () {
  const nameTextarea = document.getElementById('name');
  const submitButton = document.getElementById('submitButton');

  submitButton.addEventListener('click', function () {

    const bankName = nameTextarea.value;

    const data = {
      bankName: bankName
    };
    console.log('Data submitted:', data);

    nameTextarea.value = "";
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


document.addEventListener("DOMContentLoaded", function() {
  const reasonTextarea = document.getElementById('reason');
  const wordCountDisplay = document.getElementById('word');
  const submitButton = document.getElementById('submit');

  reasonTextarea.addEventListener('input', function() {
      const maxLength = 500;
      const currentLength = reasonTextarea.value.length;
      const wordsRemaining = maxLength - currentLength;

      wordCountDisplay.textContent = `Words remaining: ${wordsRemaining}`;

      if (wordsRemaining >= 0) {
          submitButton.disabled = false; // Enable the submit button
      } else {
          submitButton.disabled = true; // Disable the submit button
      }
  });

  submitButton.addEventListener('click', function() {
      // Get the text entered in the textarea
      const exemptionReason = reasonTextarea.value;

      // Perform data validation if necessary

      // Create an object to store the data
      const data = {
          exemptionReason: exemptionReason
      };

      // Save or process the data as needed
      // For now, we'll just log it to the console
      console.log('Data submitted:', data);

      // You can reset the form after submission if required
      reasonTextarea.value = "";
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
  const submitButton = document.getElementById('locationSubmit');

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

  