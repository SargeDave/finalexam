const movieSelect = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");

let ticketPrice = +movieSelect.value;

movieSelect.addEventListener("change", () => {
    ticketPrice = +movieSelect.value;
    updateTotal();
});

seats.forEach(seat => {
    seat.addEventListener("click", () => {
        seat.classList.toggle("selected");
        updateTotal();
    });
});

function updateTotal() {
    const selectedSeats = document.querySelectorAll(".seat.selected");
    const selectedCount = selectedSeats.length;
    count.innerText = selectedCount;
    total.innerText = selectedCount * ticketPrice;
}
