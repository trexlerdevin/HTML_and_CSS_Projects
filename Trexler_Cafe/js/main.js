//enlarge image / open modal
var modal = document.getElementsByName("ohoto-container");

// button to open the modal
var btn = document.getElementById("photo");

// the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// open modal when clicked
btn.onclick = function() {
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