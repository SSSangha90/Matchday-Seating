const container = document.querySelector('.container')

const seats = document.querySelectorAll('.row .seat:not(.occupied') 
// more than one seat class
// to run methods as an array

const count = document.getElementById('count')
const total = document.getElementById('total')
const matchSelect = document.getElementById('match')

let ticketPrice = +matchSelect.value 
// plus(+) infront converts type to number

// update total and count
const updateSelectedCount = () => {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    const selectedSeatsCount = selectedSeats.length
    count.innerText = selectedSeatsCount
    total.innerText = selectedSeatsCount * ticketPrice
}

// Match select event
matchSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value
    updateSelectedCount()
})

// Seat click event
container.addEventListener('click', e => {
    if(e.target.classList.contains('seat') 
    && !e.target.classList.contains('occupied')){
        console.log(e.target);
    } {
        e.target.classList.toggle('selected') // toggle to add and remove
        updateSelectedCount()
    }
})
