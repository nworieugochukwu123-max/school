(function () {
    var form = document.getElementById('f');
    if (!form) return;

    var button = form.querySelector('[type="submit"]');
    var status = document.getElementById('form-status');
    var buttonText = button.textContent;

    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        status.textContent = '';

        if (form.elements.website.value.trim()) return;

        button.disabled = true;
        button.textContent = 'Sending...';

        try {
            await emailjs.sendForm('service_ze6m07b', 'template_mkv2vxh', form);
            form.reset();
            status.textContent = 'Email sent. We will contact you shortly.';
        } catch (error) {
            console.error('EmailJS enquiry failed:', error);
            status.textContent = 'The enquiry could not be sent. Please try again.';
        } finally {
            button.disabled = false;
            button.textContent = buttonText;
        }
    });
})();