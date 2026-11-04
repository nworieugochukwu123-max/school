(function () {
    var form = document.getElementById('f');
    if (!form) return;

    var status = document.getElementById('form-status');
    var statusTimeout;

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        status.textContent = 'Messaging is still under work. Please message us via email instead.';
        status.hidden = false;
        window.clearTimeout(statusTimeout);
        statusTimeout = window.setTimeout(function () {
            status.hidden = true;
            status.textContent = '';
        }, 6000);
    });
})();