document.getElementById("getLocation").addEventListener("click", function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            document.getElementById("location").value = Latitude:$ {latitude}, Longitude: ${longitude};
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    // You can add form submission logic here, e.g., sending data to a server using AJAX.
    // Prevent the form from submitting normally
    event.preventDefault();
});