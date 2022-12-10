let list = JSON.parse(localStorage.getItem('list')) ?
JSON.parse(localStorage.getItem('list')) : [
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
// let checkOut = [];

// function basket() {
//     phones.forEach((items) => {
//         document.querySelector('#tbody').innerHTML +=`
//         <tr>
//         <th scope="row">${items.id}</th>
//         <td>${items.productName}</td>
//         <td>${items.color}</td>
//         <td>${items.price}</td>
//       </tr>`
//     });
    
// }

const cart = JSON.parse(localStorage.getItem('checkOut'))

for(let i = 0; i< cart.length; i++) {
    document.getElementById('tafula').innerHTML +=`
        <tr>
        <th scope="row">${cart[i].id}</th>
        <td>${cart[i].productName}</td>
        <td>${cart[i].color}</td>
        <td>${cart[i].price}</td>
      </tr>`
}