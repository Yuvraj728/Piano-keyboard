// Initialize a synth using Tone.js
const synth = new Tone.Synth().toDestination();

// Select all the piano keys
const keys = document.querySelectorAll('.piano-key');

// Add event listener to window for keyboard input
window.addEventListener('keydown', playSound);

// Function to play sound and animate the piano key
function playSound(e) {
  const key = document.querySelector(`.piano-key[data-note][id="key${e.key.toUpperCase()}"]`);
  if (!key) return; // Exit if no matching key
  
  const note = key.getAttribute('data-note'); // Get the note (e.g., "C4")
  
  key.classList.add('active'); // Add active class for animation
  
  synth.triggerAttackRelease(note, '8n'); // Play the note using Tone.js

  // Remove the active class after animation
  setTimeout(() => {
    key.classList.remove('active');
  }, 100);
}

// Add mouse click functionality to keys
keys.forEach(key => {
  key.addEventListener('click', () => {
    const note = key.getAttribute('data-note'); // Get the note (e.g., "C4")
    
    key.classList.add('active'); // Add active class for animation
    
    synth.triggerAttackRelease(note, '8n'); // Play the note using Tone.js

    // Remove the active class after animation
    setTimeout(() => {
      key.classList.remove('active');
    }, 100);
  });
});
