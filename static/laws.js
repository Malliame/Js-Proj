function init() {

    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

    document.getElementById('edit').addEventListener('click', e => {
        e.preventDefault();
        let id = document.getElementById('id').value;
        const data = {
            first_name: document.getElementById('Name').value,
        };

        fetch('http://localhost:8069/admin/ticket_types/ticket_types/' + id,
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
            first_name: document.getElementById('Name').value,
        };

        fetch('http://localhost:8069/admin/ticket_types/ticket_types/' + id,
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

        fetch('http://localhost:8069/admin/ticket_types/ticket_types/' + id,
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
    fetch('http://localhost:8069/admin/ticket_types/ticket_types/')
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('laws');
            lst.innerHTML = "";
            data.forEach( el => { 
                lst.innerHTML += `<tr> <td> ${el.id} </td> <td> ${el.name} </td> </tr>`;
            });
        });
}
