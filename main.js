var cars = document.getElementById('cars')
var i = 0

function saveCar() {
    carName = document.getElementById('name').value 
    carPrice = document.getElementById('price').value 
    carImage = document.getElementById('image').value
    i++
    cars.innerHTML += `<div class="col-lg-3 col-md-6 col-sm-6 col-12"> 
    <img src="` + carImage + `"
        alt="" class="img-fluid">'
    '<h3 class="mt-3">` +
    carName +
    `</h3>
    <p> $`+
     carPrice +
    `</p>
    <p>
        <a href="a" class="btn-view-details btn btn-primary w-100">
            View Details
        </a>
        <a href="a" class="mt-2 btn btn-secondary w-100">
            Book Now
        </a>
    </p>
</div>`
    carName = document.getElementById('name').value = ''
    carPrice = document.getElementById('price').value = ''
    carImage = document.getElementById('image').value = ''
}
