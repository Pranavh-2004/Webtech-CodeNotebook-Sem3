document.getElementById('submit').addEventListener('click', function () {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const feedback = document.getElementById('feedback').value.trim();

    // if (name === "" || email === "" || phone === "" || !gender || feedback === "") {
    //     alert("Please fill out all fields.");
    //     return;
    // }

    if (!validateEmail(email)) {
        // alert("Please enter a valid email address.");
        return;
    }

    if (!validatePhone(phone)) {
        // alert("Please enter a valid phone number.");
        return;
    }

    // alert("Thank you for your feedback!");
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^\d{10}$/;
    return re.test(phone);
}
