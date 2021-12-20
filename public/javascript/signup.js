async function signupFormHandler(event) {
    event.preventDefault();

    const user = document.querySelector('#username-signup').value.trim();
    const passy = document.querySelector('#password-signup').value.trim();

    if (user && passy) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                user,
                passy
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);