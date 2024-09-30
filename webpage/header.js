async function loadHeader() {
    try {
        // Fetch the header text from the Text folder
        const response = await fetch('Text/Header.txt');
        if (response.ok) {
            const headerText = await response.text();
            document.getElementById('headerText').textContent = headerText;
        } else {
            document.getElementById('headerText').textContent = 'Header Not Found';
        }
    } catch (error) {
        console.error('Error fetching the header text:', error);
        document.getElementById('headerText').textContent = 'Error loading header';
    }
}

// Call the function to load header text
window.onload = loadHeader;
