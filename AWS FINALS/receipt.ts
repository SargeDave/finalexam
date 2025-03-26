document.addEventListener("DOMContentLoaded", () => {
    const receiptData = JSON.parse(localStorage.getItem("receipt"));

    if (receiptData) {
        document.getElementById("receipt-movie").innerText = `🎬 Movie: ${receiptData.movie}`;
        document.getElementById("receipt-seats").innerText = `💺 Seats: ${receiptData.seats.join(", ")}`;
        document.getElementById("receipt-price").innerText = `💰 Total: $${receiptData.price}`;
    } else {
        document.body.innerHTML = "<h2>No booking found! <a href='index.html'>Book now</a></h2>";
    }
});
