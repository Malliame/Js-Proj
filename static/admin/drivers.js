function init() {

    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

    document.getElementById('edit').addEventListener('click', e => {
        e.preventDefault();
        let id = document.getElementById('id').value;
        const data = {
            first_name: document.getElementById('FirstName').value,
            last_name: document.getElementById('LastName').value,
            username: document.getElementById("Username").value,
            password: document.getElementById("Password").value,
            type: document.getElementById("Type").value
        };

        fetch('http://localhost:8069/admin/user/users/' + id,
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify(data)
        })
        .then( res => res.json() )
        .then( data => {
            showUsers();
        });

    });
    document.getElementById('add').addEventListener('click', e => {
        e.preventDefault();
        const data = {
            first_name: document.getElementById('FirstName').value,
            last_name: document.getElementById('LastName').value,
            username: document.getElementById("Username").value,
            password: document.getElementById("Password").value,
            type: document.getElementById("Type").value
        };

        fetch('http://localhost:8069/admin/user/users/' + id,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify(data)
        })
        .then( res => res.json() )
        .then( data => {
            showUsers();
        });

    });
    document.getElementById('delete').addEventListener('click', e => {
        e.preventDefault();
        let id = document.getElementById('id').value;

        fetch('http://localhost:8069/admin/user/users/' + id,
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        })
        .then( res => res.json() )
        .then( data => {
            showUsers();
        });

    });

    show();
    
}

function show(){
    fetch('http://localhost:8069/admin/user/users')
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('drivers');
            lst.innerHTML = "";
            //lst.innerHTML += `<tr><th> ID </th> <th> Name </th> <th> Email </th> <th> Password </th> <th> Admin </th> <th> Mod </th></tr>`;
            data.forEach( el => { 
                lst.innerHTML += `<tr> <td> ${el.id} </td> <td> ${el.first_name} </td> <td> ${el.last_name} </td> <td> ${el.username} </td> <td> ${el.password} </td> <td> ${el.type} </td></tr>`;
            });
        });
}
