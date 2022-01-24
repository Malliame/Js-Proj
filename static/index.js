function init() {

    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

    document.getElementById('drivers').addEventListener('click', e => {
        document.cookie = `token=;SameSite=Lax`;
        window.location.href = 'http://localhost:8690/admin/drivers.html';
    });

    document.getElementById('tickets').addEventListener('click', e => {
        document.cookie = `token=;SameSite=Lax`;
        window.location.href = 'http://localhost:8690/admin/tickets.html';
    });

    document.getElementById('laws').addEventListener('click', e => {
        document.cookie = `token=;SameSite=Lax`;
        window.location.href = 'http://localhost:8690/admin/laws.html';
    });

    document.getElementById('solutions').addEventListener('click', e => {
        document.cookie = `token=;SameSite=Lax`;
        window.location.href = 'http://localhost:8690/admin/solutions.html';
    });

    document.getElementById('logout').addEventListener('click', e => {
        document.cookie = `token=;SameSite=Lax`;
        window.location.href = 'http://localhost:8690/admin/login.html';
    });
}