function init() {

    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

    document.getElementById('edit').addEventListener('click', e => {
        e.preventDefault();
        let id = document.getElementById('id').value;
        const data = {
            first_name: document.getElementById('ticket_id').value,
            last_name: document.getElementById('date').value,
            username: document.getElementById("note").value,
            password: document.getElementById("court").checked
        };

        fetch('http://localhost:8069/admin/ticket_solution/ticket_solution' + id,
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
            first_name: document.getElementById('ticket_id').value,
            last_name: document.getElementById('date').value,
            username: document.getElementById("note").value,
            password: document.getElementById("court").checked
            };

        fetch('http://localhost:8069/admin/ticket_solution/ticket_solution' + id,
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

        fetch('http://localhost:8069/admin/ticket_solution/ticket_solution' + id,
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
    fetch('http://localhost:8069/admin/ticket_solution/ticket_solution')
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('solutions');
            lst.innerHTML = "";
            //lst.innerHTML += `<tr><th> ID </th> <th> Name </th> <th> Email </th> <th> Password </th> <th> Admin </th> <th> Mod </th></tr>`;
            data.forEach( el => { 
                lst.innerHTML += `<tr> <td> ${el.id} </td> <td> ${el.ticket_id} </td> <td> ${el.date} </td> <td> ${el.court} </td> <td> ${el.note} </td></tr>`;
            });
        });
}
