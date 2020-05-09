const container = document.querySelector('.container')

const seats = document.querySelectorAll('.row .seat:not(.occupied') 
// more than one seat class
// to run methods as an array

const count = document.getElementById('count')
const total = document.getElementById('total')
const matchSelect = document.getElementById('match')

let ticketPrice = +matchSelect.value 
// plus(+) infront converts datatype to number

// Save selected match index and price
const setMatchData = (matchIndex, matchPrice) => {
    localStorage.setItem('selectedMatchIndex', matchIndex)
    localStorage.setItem('selectedMatchPrice', matchPrice)
}

// update total and count
const updateSelectedCount = () => {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')

    const seatsIndex = [...selectedSeats] // spread operator to copy elements of array above
    .map((seat) => [...seats].indexOf(seat))

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))

    const selectedSeatsCount = selectedSeats.length
    count.innerText = selectedSeatsCount
    total.innerText = selectedSeatsCount * ticketPrice
}

// Match select event
matchSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value
    setMatchData(e.target.selectedIndex, e.target.value);
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
