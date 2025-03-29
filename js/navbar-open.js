function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

    const hamburger = document.getElementById('hamburger');

    // Toggle the open class to animate the dropdown menu
    hamburger.classList.toggle('open');
}