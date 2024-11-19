// Function to reset all grid items to transparent
function resetGridColors() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
}

// Function to change the color of a specific grid item
function changeGridColor() {
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('colour_id').value;

    // Reset all colors to transparent
    resetGridColors();

    // Find the grid item by ID and change its color
    const gridItem = document.getElementById(blockId);
    if (gridItem) {
        gridItem.style.backgroundColor = color;
    } else {
        alert('Invalid Block ID! Enter a number between 1 and 9.');
    }
}

// Add event listeners for buttons
document.getElementById('change_button').addEventListener('click', changeGridColor);
document.getElementById('Reset').addEventListener('click', resetGridColors);
