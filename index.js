const canvas = document.querySelector('canvas');
// Context of the canvas
const c = canvas.getContext('2d');

// Canvas variables that define the height and width
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Fills the entire canvas
c.fillRect(0, 0, canvas.width, canvas.height)