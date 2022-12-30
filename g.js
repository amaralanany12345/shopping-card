let Buy_now = document.querySelector('.Buy_now')
let btn = document.querySelector('.btn')
let total = document.querySelector('.total')
let icon = document.querySelector('.icon')
let numberInput = document.querySelector('.numberInput');
let massage= document.querySelector('.massage')
let your_cart = document.querySelector('.your_cart')
let buy = Array.from(document.getElementsByClassName('buy'))
let prices = Array.from(document.getElementsByClassName('price'))
let Name = Array.from(document.getElementsByClassName('Name'))
let card= Array.from(document.getElementsByClassName('card'))
let image =Array.from(document.getElementsByClassName('image'))
let productInput =Array.from(document.getElementsByClassName('productInput'))
let z= +total.innerHTML
let products ;
if(localStorage.p!=null){
    products = JSON.parse(localStorage.p)
}
else {
    products=[]
}


for (let i=0;i<prices.length && i<Name.length && i<buy.length;i++){
    buy[i].onclick = function(){
        let newPro = {
            Name:Name[i].innerHTML,
            prices:prices[i].innerHTML,
            productInput:productInput[i].value,
            image:image[i-1].src
                   
        }
        
        products.push(newPro)
        localStorage.setItem('p',JSON.stringify(products))
        showProduct()
        getTotal()
    }

}

function Total(){
    total.innerHTML=z
}

Total()

function getTotal(){
    products[+products.length-1].productInput =1
    z+= +products[products.length-1].prices *products[products.length-1].productInput
    total.innerHTML=z 
}

function showProduct(){
    
    let prod=``
    for (let i=0;i<products.length;i++){
        prod+=`
        <h4>${products[i].Name}</h4>
        <h6>${products[i].prices}</h6>
        <img src="${products[i].image}" class="image">
        <button onclick="deleteProduct(${i})" class="Delete">x</button> 
        `
        
    }

    document.querySelector('.product').innerHTML=prod
}

function deleteProduct(i){
    z-= products[i].prices 
    total.innerHTML=z
    products[products.length-1].productInput =1
    products.splice(i,1)
    localStorage.p=JSON.stringify(products)
    showProduct()  
}

icon.onclick =function(){
    icon.style.display='none';
    your_cart.style.display='block'
}
btn.onclick =function(){
    your_cart.style.display='none'
    icon.style.display='flex';
}
Buy_now.onclick = function (){
    alert(`Thanks for visting our website 
Your order is done 
the total price is ${total.innerHTML} 
`)
}