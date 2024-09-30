const btcElement = document.getElementById('btcAmount');

// Generate a random starting balance between 0 and 0.00099999
let btcBalance = Math.random() * 0.00099999; 

function updateBTC() {
    // Increase the balance by a random small amount
    const increment = Math.random() * 0.00001;
    btcBalance += increment;

    // Format the BTC balance to 8 decimal places
    btcElement.textContent = btcBalance.toFixed(8);
}

// Update BTC balance every 100 milliseconds
setInterval(updateBTC, 100);
