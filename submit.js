let id = 1;

document.getElementById('submit').addEventListener('click', () => {
    let table = document.getElementById('user-info');
    let row = table.insertRow(id);
    row.setAttribute('id', `member-${id}`);
    row.insertCell(0).innerHTML = `${id}`;
    row.insertCell(1).innerHTML = document.getElementById('first-name').value;
    row.insertCell(2).innerHTML = document.getElementById('last-name').value;
    row.insertCell(3).innerHTML = document.getElementById('email').value;
    id++;
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('email').value = '';
})