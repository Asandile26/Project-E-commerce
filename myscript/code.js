let products = JSON.parse(localStorage.getItem('products')) ?
JSON.parse(localStorage.getItem('products')) : [
    {
        id: 0,
        productName: "Hisense",
        price: 2999,
        color: "Blue",
        Image: "https://i.postimg.cc/MGFxGWc6/h-e60.jpg"

    },
    {
        id: 1,
        productName: "iPhone 13",
        price: 14999,
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
        productName: "iPhone 12",
        price: 13999,
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
        price: 18999,
        color: "black",
        Image: "https://i.postimg.cc/P51x3PLz/iphone-13-black.webp"

    },
    {
        id: 7,
        productName: "iPhone X",
        price: 15999,
        color: "all colors",
        Image: "https://i.postimg.cc/c1jwPtJV/x.webp"
    },
    {
        id: 8,
        productName: "Samsung galaxy S21",
        price: 15999,
        color: "Black",
        Image: "https://i.postimg.cc/y6GjHYjS/A21.jpg"

    },
];
let x = localStorage.setItem('phones',JSON.stringify(products));
let y = localStorage.getItem('phones');
    function displayProduct() {
        products.forEach((phones) => {
            document.querySelector('#products').innerHTML +=`
    <div class="card m-auto" style="width: 18rem;">
    <img src="${phones.Image}" class="card-img-top" alt="phones">
    <div class="card-body">
        <h5 class="card-title">Name: ${phones.productName}</h5>
        <p class="card-text">Color: ${phones.color}</p>
        <p class="card-text"><small class="text-muted">Price: R${phones.price}</small></p>
        <a href="#" class="btn btn-primary" id="check" onclick="addToCheckOut(${phones.id})">Add</a>
    </div>
    </div>`
        })
        
    };

displayProduct();

let checkOut = JSON.parse(localStorage.getItem('checkOut'));
function addToCheckOut(index) {
    checkOut.push(products[index])
    
    localStorage.setItem('checkOut', JSON.stringify(checkOut));
    
    
}




// tableProduct();
// let sorted =
// products.sort(function(a, b){
//     if (a.id < b.id)
//     return -1;
// }
//     {
//     else if (a.id >b.id)

// })
// document.querySelector('products');
// console.log(sorted);

