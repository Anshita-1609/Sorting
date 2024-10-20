const btn = document.querySelector('button');
const body = document.querySelector('body');

function createTable(data) {
    const table = document.createElement('table');
    table.setAttribute('border', 1);
    table.insertAdjacentHTML('afterbegin', '<thead><th>Item Name</th><th>Item Price</th><th>Item Company</th></thead>');
    const tbody = document.createElement('tbody');
    data.forEach(v => {
        tbody.insertAdjacentHTML('beforeend', `<tr><td>${v.name}</td><td>${v.price}</td><td>${v.company}</td></tr>`)
    })
    table.append(tbody);
    body.append(table);
}
function showProducts() {
    const selected = document.querySelector('select').value;
    fetch('items.json').then(res =>
        res.json()
    ).then(data => {
        console.log(data);
        if (selected == "lowtohigh") {
            data.sort((a, b) =>
                a.price - b.price);
        }
        else {
            data.sort((a, b) =>
                b.price - a.price);
        }
        createTable(data);
    }).catch(err => {
        console.log(err);
    })

}

btn.addEventListener('click', showProducts);
