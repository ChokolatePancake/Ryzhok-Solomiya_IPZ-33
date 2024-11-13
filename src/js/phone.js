document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    const format = "+(380)-xxx-xx-xx";

    // Set initial format when input is focused
    phoneInput.addEventListener('focus', function() {
        if (this.value === '') {
            this.value = format;
        }
    });

    // Format phone number as user types
    phoneInput.addEventListener('input', function(e) {
        const target = e.target;
        let value = target.value.replace(/\D/g, '');  // Remove non-digits

        // Ensure we always have 380 at the start
        if (value.length < 3) {
            value = '380' + value;
        } else if (value.substring(0, 3) !== '380') {
            value = '380' + value.substring(3);
        }

        // Format the phone number
        let result = '+(380)-';
        for (let i = 3; i < value.length && i < 10; i++) {
            if (i === 6) result += '-';
            if (i === 8) result += '-';
            result += value[i];
        }

        target.value = result;
    });
});