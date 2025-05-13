// Getting Elements and assigning them to Variables:
const passwordInput = document.getElementById('password');
const strengthBarFill = document.getElementById('strength-bar-fill');
const strengthText = document.getElementById('strength-text');

// Add event listener for the input field and calls on function to get the strength of inputted pw:
passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  const strength = getPasswordStrength(password);

  // Creating variables:
  let strengthColor;
  let strengthMessage;
  let strengthPercent;

  // Switch cases to determine the colour, amount covered of bar, and the pw strength message:
  switch (strength) {
    case 0:
      strengthColor = '#ccc';
      strengthMessage = '';
      strengthPercent = 0;
      break;
    case 1:
      strengthColor = '#ff4d4d';
      strengthMessage = 'Very Weak';
      strengthPercent = 25;
      break;
    case 2:
      strengthColor = '#ffa500';
      strengthMessage = 'Weak';
      strengthPercent = 50;
      break;
    case 3:
      strengthColor = '#ffff00';
      strengthMessage = 'Moderate';
      strengthPercent = 75;
      break;
    case 4:
      strengthColor = '#66cc66';
      strengthMessage = 'Strong';
      strengthPercent = 100;
      break;
  }

  strengthBarFill.style.width = strengthPercent + '%';
  strengthBarFill.style.backgroundColor = strengthColor;
  strengthText.textContent = strengthMessage;
});

// Function to check and calculate the password strength:
function getPasswordStrength(password) {
  let strength = 0;
  if (password.length >= 8) strength++; // pw length should be greater then 8 chars.
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++; // pw should have a mix of Upper and lowercase letters.
  if (/\d/.test(password)) strength++; // pw should have digits (from 0-9).
  if (/[@$!%*?&#]/.test(password)) strength++; // pw should have special characters.
  return password.length === 0 ? 0 : strength;
}
