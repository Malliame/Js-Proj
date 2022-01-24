function init() {

    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

    document.getElementById('edit').addEventListener('click', e => {
        e.preventDefault();
        let id = document.getElementById('id').value;
        const data = {
            due_date: document.getElementById('due_date').value,
            type: document.getElementById('type').value,
            amount: document.getElementById("amount").value,
            solved: document.getElementById("solved").checked,
            //ticket_id: document.getElementById("ticket_id").value
        };

        fetch('http://localhost:8069/admin/ticket/tickets/' + id,
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
            due_date: document.getElementById('due_date').value,
            type: document.getElementById('type').value,
            amount: document.getElementById("amount").value,
            solved: document.getElementById("solved").checked,
            //ticket_id: document.getElementById("ticket_id").value
        };

        fetch('http://localhost:8069/admin/ticket/tickets/' + id,
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

        fetch('http://localhost:8069/admin/ticket/tickets/' + id,
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
    fetch('http://localhost:8069/admin/ticket/tickets')
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('tickets');
            lst.innerHTML = "";
            //lst.innerHTML += `<tr><th> ID </th> <th> Name </th> <th> Email </th> <th> Password </th> <th> Admin </th> <th> Mod </th></tr>`;
            data.forEach( el => { 
                lst.innerHTML += `<tr> <td> ${el.id} </td> <td> ${el.type} </td> <td> ${el.due_date} </td> <td> ${el.amount} </td> <td> ${el.solved} </td></tr>`;
            });
        });
}
