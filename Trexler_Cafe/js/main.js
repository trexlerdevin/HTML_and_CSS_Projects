//enlarge image / open modal
var modal = document.getElementsByName("photo");

// button to open the modal
var btn = document.getElementById("btn");

// the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// open modal when clicked
btn.onclick = function openModal() {
    modal.style.display = "block"
}

// close the modal when the <span> (x) is clicked
span.onclick = function() {
        modal.style.display = "none"
}

window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none"
        }
}