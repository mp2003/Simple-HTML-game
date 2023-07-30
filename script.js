// Get all "I Choose This" buttons
const chooseButtons = document.querySelectorAll('.btn-choose');

// Function to handle the button click event
function handleChooseButtonClick(event) {
  const imageSrc = event.target.getAttribute('data-image');
  alert(`You chose ${imageSrc}`);

  // Redirect to the next page based on the chosen image
  if (imageSrc === 'eye.jpg') {
    window.location.href = 'next_page_eye.html';
  } else if (imageSrc === 'ear.jpg') {
    window.location.href = 'next_page_ear.html';
  }
 
}

// Add click event listeners to the buttons
chooseButtons.forEach(button => {
  button.addEventListener('click', handleChooseButtonClick);
});
