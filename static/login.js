

function validateLogin() {
    console.log("validateLogin Called");
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/static/passcodes.txt')
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n');
            let isValid = false;
            let usernameMatch = false;
            let passwordMatch = false;

            for (let line of lines) {
                const [user, pass] = line.split(',');
                if (user === username) {
                    usernameMatch = true;
                    if (pass === password) {
                        isValid = true;
                        break;
                    }
                }
            }

            if (isValid) {
                alert('Login successful');
                //need to add seating chart after success
            } else if (usernameMatch) {
                alert('Incorrect password. Please try again.');
            } else {
                alert('Username not found. Please try again.');
            }
        });
}
