async function loginFormHandler(event) {
    event.preventDefault();

    const user = document.querySelector('#username-login').value.trim();
    const pas = document.querySelector('#password-login').value.trim();

    if (user && pas) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                user,
                pas
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

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);