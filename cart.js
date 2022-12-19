let container = document.getElementById("proCont");
let cartData = JSON.parse(localStorage.getItem("cart"));
if(cartData===null){
    cartData=[];
}

let it =document.getElementById("it");
let tbp = document.getElementById("tbp");
let ts = document.getElementById("ts");
let pcount=document.getElementById("pcount")
let ck = document.getElementById("ck");
let tsp=0
let tp=0
let tprice=0

displayProducts(cartData);

function displayProducts (data){
    container.innerHTML=null;
    pcount.textContent=data.length
    data.forEach((el,index)=>{
        let card = document.createElement("div");
        card.setAttribute("class","card");
        let image=document.createElement("img");
        image.setAttribute("src",el.img);
        let brand = document.createElement("h3");
        brand.innerText=el.brand;
        let mrp =document.createElement("span");
        mrp.innerText=el.mrp;
        let price=document.createElement("span");
        price.setAttribute("class","price")
        price.innerText=el.price;
        let off =document.createElement("span");
        off.setAttribute("class","off")
        off.innerText=el.off;
        let cutofprice =document.createElement("h3");
        cutofprice.innerText= "₹" +el.cutofprice;
        let remove=document.createElement("button");
        remove.setAttribute('class',"remove");
        remove.innerText="Remove";
        tprice+=el.cutofprice
        remove.addEventListener("click",()=>{
            data.splice(index,1)
            localStorage.setItem("cart",JSON.stringify(data))

        })
        card.append(brand,mrp,price,off,cutofprice,remove)
        container.append(card)
    })
}

tp=tprice-(tprice*25/100)
tsp=(tprice*25)/100;
ts.innerText="₹"+tsp

it.innerText="₹"+tprice;
tbp.innerText="₹"+tp;

ck.addEventListener("click",()=>{
    alert("Thank You So much for shoping")

})