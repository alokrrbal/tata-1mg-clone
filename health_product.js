
let proArr=[
    {
        id:1,
        brand:"DR Morepen BG 03 Gluco One Glucose Monitoring System with..",
        img:"https://onemg.gumlet.io/images/h_150,f_auto,c_fit,w_150,q_auto/qd8eaznzsf3det7qrytk/dr-morepen-bg-03-gluco-one-glucose-monitoring-system-with-gluco-one-bg-03-blood-glucose-25-test-strip.jpg",
        mrp:"MRP",
        price:"₹1164",
        off:"53% OFF",
        cutofprice:"₹548"
    },
    {
        id:2,
        brand:"BD Ultra-Fine III Pen Needles 4MM 32G",
        img:"https://onemg.gumlet.io/images/h_150,f_auto,c_fit,w_150,q_auto/xtviqxca9mu8jjunyir4/bd-ultra-fine-iii-pen-needles-4mm-32g.jpg",
        mrp:"MRP",
        price:"₹88",
        off:"5% OFF",
        cutofprice:"₹83"
    },
    {
        id:3,
        brand:"Dr Morepen BG 03 GLuco One Blood Glucose Monitoring System",
        img:"https://onemg.gumlet.io/images/h_150,f_auto,c_fit,w_150,q_auto/4ba3342d-ea70-475b-a65d-1a6de9e87c1d/dr-morepen-bg-03-gluco-one-blood-glucose-monitoring-system.jpeg",
        mrp:"MRP",
        price:"₹665",
        off:"65% OFF",
        cutofprice:"₹233"
    },
    {
        id:4,
        brand:"Omron Hem8712 BP MOniter",
        img:"https://onemg.gumlet.io/images/h_150,f_auto,c_fit,w_150,q_auto/33634af918984ced9cec51aa4c332277/omron-hem8712-bp-monitor.jpg",
        mrp:"MRP",
        price:"₹2640",
        off:"20% OFF",
        cutofprice:"₹2109"
    },
    {
        id:5,
        brand:"OneTouch Select Test Strip(only Strips)",
        img:"https://onemg.gumlet.io/images/h_150,f_auto,c_fit,w_150,q_auto/cropped/gokczkks8wo5b8voauft/onetouch-select-test-strip-only-strips.png",
        mrp:"MRP",
        price:"₹1195",
        off:"5% OFF",
        cutofprice:"₹1135"
    },
    {
        id:6,
        brand:"Flamingo Ortheopaedic HEating Belt XL",
        img:"https://onemg.gumlet.io/images/h_150,f_auto,c_fit,w_150,q_auto/80327bce429649e9ad1bf77ceed8bd24/flamingo-orthopaedic-heating-belt-xl.jpg",
        mrp:"MRP",
        price:"₹1199",
        off:"7% OFF",
        cutofprice:"₹1110"
    },
    {
        id:7,
        brand:"OneTouch Select Plus Simple Glucometer",
        img:"https://onemg.gumlet.io/images/h_150,f_auto,c_fit,w_150,q_auto/x0mqxbv1jwdtc69t1swy/onetouch-select-plus-simple-glucometer-with-10-free-strips-black.jpg",
        mrp:"MRP",
        price:"₹1147",
        off:"24% OFF",
        cutofprice:"₹874"
    },
    {
        id:8,
        brand:"TATA 1mg Medicated First aid Dressing",
        img:"https://onemg.gumlet.io/images/h_150,f_auto,c_fit,w_150,q_auto/2e7932bb09db4ccab4c960eb00e4a05e/tata-1mg-medicated-first-aid-dressing-washproof-bandages-pack-of-20.jpg",
        mrp:"MRP",
        price:"₹60",
        off:"25% OFF",
        cutofprice:"₹45"
    },
    {
        id:9,
        brand:"Accu-Check Instant Test Strip(Only strip)",
        img:"https://onemg.gumlet.io/images/h_150,f_auto,c_fit,w_150,q_auto/zbgqietrhnumgfp84vlt/accu-chek-instant-test-strip-only-strip.jpg",
        mrp:"MRP",
        price:"₹2269",
        off:"6% OFF",
        cutofprice:"₹980"
    },
    {
        id:10,
        brand:"Dr TRust USA BEstes COmpressor",
        img:"https://onemg.gumlet.io/images/h_150,f_auto,c_fit,w_150,q_auto/8f123a1d5f314b3095d75914ff3b51a8/dr-trust-usa-bestest-compressor-nebulizer-401-machine-kit-white.jpg",
        mrp:"MRP",
        price:"₹1550",
        off:"16% OFF",
        cutofprice:"₹1299"
    },
    {
        id:11,
        brand:"Dr Morepen BG 03 GLuco One Glucose",
        img:"https://onemg.gumlet.io/images/h_150,f_auto,c_fit,w_150,q_auto/qd8eaznzsf3det7qrytk/dr-morepen-bg-03-gluco-one-glucose-monitoring-system-with-gluco-one-bg-03-blood-glucose-25-test-strip.jpg",
        mrp:"MRP",
        price:"₹1164",
        off:"53% OFF",
        cutofprice:"₹548"
    },
    {
        id:12,
        brand:"Omron CMS50N COntec PUlse Oximeter",
        img:"https://onemg.gumlet.io/images/h_150,f_auto,c_fit,w_150,q_auto/cropped/dk4bsseilzpnfr953q7e/omron-cms50n-contec-pulse-oximeter.png",
        mrp:"MRP",
        price:"₹1195",
        off:"5% OFF",
        cutofprice:"₹1135"
    },
]

function appendData(data){
    // document.getElementById("cont").innerHTML=null;
    data.forEach((el,index)=>{
        let box =document.createElement("div");
        box.setAttribute("class","child");
        let imgbox=document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src",el.img);
        imgbox.append(img)
        let brand = document.createElement("h3");
        brand.innerText=el.brand;
        let mrp =document.createElement("span");
        mrp.innerText=el.mrp;
        let price=document.createElement("span");
        price.innerText=el.price;
        let off =document.createElement("span");
        off.innerText=el.off;
        let cutofprice =document.createElement("p");
        cutofprice.innerText=el.cutofprice;
        box.append(imgbox,brand,mrp,price,off,cutofprice);
        document.getElementById("cont").append(box);
    });

}
appendData(proArr);
