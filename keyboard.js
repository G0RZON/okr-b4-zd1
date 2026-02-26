const outputDiv = document.getElementById('output');

document.addEventListener('keydown', function(event) {
    if (event.key === 'Backspace') {
        outputDiv.textContent = outputDiv.textContent.slice(0, -1);
        return;
    }

    if (event.key.length === 1) {
        outputDiv.textContent += event.key;
    }
    
    if (event.key === 'Enter') {
        outputDiv.textContent += '\n';
    }
});