async function formHandle(event) {
    event.preventDefault();

    const titl = document.querySelector('input[name="post-title"]').value;
    const post_cont = document.querySelector('textarea[name="post-content]"').value.trim();

    const respons = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            titl,
            post_cont
        }),
        headers: {
            'Content-Type': 'applications/json'
        }
    });

    if(Response.ok){
        document.location.replace('/dashboard');
    } else{
        alert(respons.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);