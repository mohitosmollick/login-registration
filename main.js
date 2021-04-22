// Example starter JavaScript for disabling form submissions if there are invalid fields
//this is simple comment change
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);

    var close_btn = document.getElementById("close-nav");
    var navbarNav = document.getElementById("navbarNav");
    var navbar_toggler = document.getElementById("navbar-toggler");

    close_btn.addEventListener("click", function() {
        navbarNav.style.display = "none";
    });

    navbar_toggler.addEventListener("click", function() {
        navbarNav.style.display = "block";
    });

})();