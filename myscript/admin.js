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

document.querySelector('#tbody').innerHTML =``
let x = localStorage.setItem('phones',JSON.stringify(products));
let y = localStorage.getItem('phones');
// console.log(JSON.parse(y));
function tableProduct() {
    document.querySelector('#tbody').innerHTML = ''
    let phones = JSON.parse(localStorage.getItem('phones'))
    phones.forEach((item) => {
        document.querySelector('#tbody').innerHTML +=`
        <tr>
        <th scope="row">${item.id}</th>
        <td>${item.productName}</td>
        <td>${item.color}</td>
        <td>${item.price}</td>
        <td><button onclick="edit()" id="edit">EDIT</button></td>
        <td><button onclick="del(${item.id})" id="del">DEL</button></td>
        </tr>
        `
    })}
    ;
    tableProduct()
    
    
    
    function del(id) {
        // console.log(id)
        document.querySelector('#tbody').innerHTML =``
        document.querySelector('#del')
        let phones = JSON.parse(localStorage.getItem('phones'))
        phones.splice(id, 1)
        // console.log(phones)
        localStorage.setItem('phones', JSON.stringify(phones))
        // console.table(JSON.parse(localStorage.phones))
        tableProduct();
        // console.table(phones)
    };


//sorts
function sort() {
    document.querySelector('#tbody').innerHTML =``
    let phones = JSON.parse(localStorage.getItem('sorted'))
    let sorted = products.sort((a, b) => (a.price > b.price) ? 1 : -1);
    localStorage.setItem('phones', JSON.stringify(products))
    
    console.table(sorted);
    tableProduct();
}

let updateBtn = document.querySelector('.btn')

updateBtn.addEventListener('click', (e)=>{
    e.preventDefault;
    let id = document.querySelector('#id').value
    let productName = document.querySelector('#productName').value
    let color = document.querySelector('#color').value
    let price = document.querySelector('#price').value
    let Image = document.querySelector('#image').value

    products.push(
        id,
        productName,
        color,
        price,
        Image
    )
    localStorage.setItem('phones', JSON.stringify(products));
    console.log(JSON.parse(localStorage.getItem('phones'))) ;
})