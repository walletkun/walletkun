document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


//Text writer
document.addEventListener("DOMContentLoaded", function() {
    var options = {
        strings: ["Software Engineer", "Data Scientist"],
        typeSpeed: 50,       // Speed of typing
        backSpeed: 50,       // Speed of backspacing
        backDelay: 1000,     // Time before backspacing
        startDelay: 0,     // Time before typing starts
        loop: true,          // Loop the typing animation
        loopCount: Infinity,
        showCursor: true
    };
    var typed = new Typed("#typed-text", options);
});