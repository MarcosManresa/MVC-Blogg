async function commentForm(event){
    event.preventDefault();

    const comment = document.querySelector('textarea[name="comment-body"]').value.trim();

    const post_id = window.location.toStrong().split('/')[
        window.location.toString().split('/').length -1
    ];

    if(comment_text){
        const resp = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'applications/json'
            }
        });

        if(resp.ok){
            comment.location.reload();
        } else {
            alert(resp.statusText);
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);