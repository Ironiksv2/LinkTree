async function loadLinks() {
    try {
        // Fetch both Names and URL files from the correct folder
        const [namesResponse, urlsResponse] = await Promise.all([
            fetch('Text/Links/Names.txt'), 
            fetch('Text/Links/URL.txt')
        ]);

        // Check if both requests were successful
        if (namesResponse.ok && urlsResponse.ok) {
            const namesData = await namesResponse.text();
            const urlsData = await urlsResponse.text();

            const names = namesData.split('\n').map(name => name.trim());
            const urls = urlsData.split('\n').map(url => url.trim());

            const linkList = document.getElementById('linkList');

            // Iterate through names and urls to create list items
            names.forEach((name, index) => {
                if (name && urls[index]) {
                    const listItem = document.createElement('li');
                    const link = document.createElement('a');
                    link.href = urls[index];
                    link.textContent = name;
                    link.target = '_blank';  // Open in a new tab
                    listItem.appendChild(link);
                    linkList.appendChild(listItem);
                }
            });
        } else {
            console.error("Failed to fetch one or both files.");
        }
    } catch (error) {
        console.error("Error fetching or processing files:", error);
    }
}

window.onload = loadLinks;
