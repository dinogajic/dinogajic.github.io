

(function() {
    emailjs.init("user_S5tyx1KO8BxBSU1C3LGbD");
})();

    window.onload = function() {
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            emailjs.sendForm('service_tlmvq36', 'template_grbm3ve', this)
                .then(function() {
                    console.log('SUCCESS!');
                }, function(error) {
                    console.log('FAILED...', error);
                });
        });
    }
