document.addEventListener("DOMContentLoaded", () => {
    const historyList = document.getElementById("history-list");

    function loadHistory() {
        const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
        historyList.innerHTML = "";

        bookings.forEach((booking, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${booking.movie}</td>
                <td>${booking.seats.join(", ")}</td>
                <td>$${booking.price}</td>
                <td>
                    <button class="delete" data-index="${index}">❌ Cancel</button>
                </td>
            `;
            historyList.appendChild(row);
        });

        document.querySelectorAll(".delete").forEach(btn => {
            btn.addEventListener("click", deleteBooking);
        });
    }

    function deleteBooking(event) {
        const index = event.target.dataset.index;
        let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
        bookings.splice(index, 1);
        localStorage.setItem("bookings", JSON.stringify(bookings));
        loadHistory();
    }

    loadHistory();
});
