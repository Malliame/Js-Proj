function init() {

    document.getElementById('btn').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            first_name: document.getElementById('fname').value,
            last_name: document.getElementById('lname').value,
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
            type: document.getElementById('type').value,
        };

        fetch('http://localhost:8420/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then( res => res.json())
            .then( el => {
                if(el.msg){
                    //document.getElementById("username").innerHTML = "Username already taken!"
                    alert(el.msg)
                }
                else{
                document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'index.html';
                }
            });
    });

    document.getElementById('log_in').addEventListener('click', e=>{
        window.location.href = 'http://localhost:8690/admin/login.html';
    })
}