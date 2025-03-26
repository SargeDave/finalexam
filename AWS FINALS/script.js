const movieSelect = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");

let ticketPrice = +movieSelect.value;

// Fetch booked seats
async function fetchBookedSeats() {
    const response = await fetch(`http://localhost:5000/api/bookings/${movieSelect.value}`);
    const bookedSeats = await response.json();
    seats.forEach((seat, index) => {
        if (bookedSeats.includes(index)) {
            seat.classList.add("occupied");
        }
    });
}

movieSelect.addEventListener("change", () => {
    ticketPrice = +movieSelect.value;
    fetchBookedSeats();
    updateTotal();
});

seats.forEach((seat, index) => {
    seat.addEventListener("click", () => {
        if (!seat.classList.contains("occupied")) {
            seat.classList.toggle("selected");
            updateTotal();
        }
    });
});

async function bookSeats() {
    const selectedSeats = [...document.querySelectorAll(".seat.selected")].map(seat => [...seats].indexOf(seat));
    if (selectedSeats.length === 0) return alert("Please select seats!");

    const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            movie: movieSelect.value,
            seats: selectedSeats,
            totalPrice: selectedSeats.length * ticketPrice
        })
    });

    const result = await response.json();
    if (response.ok) {
        alert(result.message);
        fetchBookedSeats();
    } else {
        alert(result.message);
    }
}

document.getElementById("book-button").addEventListener("click", bookSeats);
