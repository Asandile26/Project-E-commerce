let products = JSON.parse(localStorage.getItem('products')) ?
JSON.parse(localStorage.getItem('products')) : [
    {
        id: 1,
        productName: "iPhone 13",
        price: 18999,
        color: "Black",
        Image: "https://i.postimg.cc/mrW2fBx3/13-i-Phone.jpg"

    },
    {
        id: 2,
        productName: "Samsung Galaxy A32",
        price: 12999,
        color: "Blue",
        Image: "https://i.postimg.cc/R0PtMWM5/galaxy-a32-blue.jpg"

    },
    {
        id: 3,
        productName: "Huawei P-Smart 2021",
        price: 4999,
        color: "Pink",
        Image: "https://i.postimg.cc/yN5FmD2h/huawei-p-smart-2021-01.jpg"

    },
    {
        id: 4,
        productName: "iPhone 13",
        price: 15000,
        color: "Black",
        Image: "https://i.postimg.cc/P51x3PLz/iphone-13-black.webp"


    },
    {
        id: 5,
        productName: "iPhone 11",
        price: 11999,
        color: "black",
        Image: "https://i.postimg.cc/15VCdNpd/iphone11-black-select-2019.png"

    },
    {
        id: 6,
        productName: "iPhone 13-pro",
        price: 15999,
        color: "black",
        Image: "https://i.postimg.cc/P51x3PLz/iphone-13-black.webp"

    },
    {
        id: 7,
        productName: "iPhone X",
        price: 15000,
        color: "all colors",
        Image: "https://i.postimg.cc/c1jwPtJV/x.webp"
    },
    {
        id: 8,
        productName: "Samsung galaxy S21",
        price: 15000,
        color: "Black",
        Image: "https://i.postimg.cc/y6GjHYjS/A21.jpg"

    },
];
function topPhones(item) {
    let phones = document.querySelector('#tafula')
    phones.innerHTML =''
    for ( let i = 0; i < DataTransfer.length; i++) {
        let phonesRows = '<tr>
        <th scope="row">${i.id}</th>
        <td>${item.productName}</td>
        <td>${item.color}</td>
        <td>${item.price}</td>
        <td><button onclick="edit()" id="edit">EDIT</button></td>
        <td><button onclick="del(${item.id})" id="del">DEL</button></td>
        '
    }
    
}