let par = document.createElement("div")
// let ptit = document.createElement("header")
let title = document.createElement("h1")
let cont = document.createElement("div")

document.body.appendChild(par)
par.appendChild(title)

    title.textContent = "Products"
    title.style.fontWeight = "bold"
    title.style.textAlign = "center"
    title.style.padding = "20px"
    
    cont.style.display = "flex"
    cont.style.flexWrap= "wrap"
    cont.style.justifyContent = "space-evenly"
    cont.style.margin = "30px"
    cont.style.gap = "30px"

fetch("https://fakestoreapi.com/products").then((res)=>{
    return res.json()
    
})
.then((data)=>{
    console.log(data.length);
    console.log(data);
    
    // let frag = document.createDocumentFragment()
data.forEach(product => {
    

    let card = document.createElement("div")
    let img = document.createElement("img")
    let bod = document.createElement("div")
    let tit = document.createElement("h3")
    let categ = document.createElement("p")
    let rating = document.createElement("div")
    let rate = document.createElement("p")
    let count = document.createElement("p")
    let box = document.createElement("div")
    let pho = document.createElement("p")
    let btn = document.createElement("button")
    img.src = product.image
    tit.textContent = product.title
    categ.textContent = product.category
    rate.textContent = "Rating: " +product.rating.rate
    count.textContent = "count: " +product.rating.count

    pho.textContent = product.price + "EGP"
    btn.textContent = "Add to Cart"

    card.style.width ="350px"
    card.style.height ="500px"
    card.style.border ="solid red 2px "
    card.style.borderRadius = "30px"
    card.style.display = "flex"
    card.style.flexDirection = "column"

    img.style.width = "100%"
    img.style.height = "180px"
    img.style.borderRadius = "30px 30px 0 0"
    img.style.objectFit = "contain"

    bod.style.padding = "20px"  
    bod.style.display = "flex"
    bod.style.flexDirection = "column"
    bod.style.flex = "1"

    tit.style.padding = "10px"
    tit.style.fontWeight = "70px"

    box.style.display = "flex";
    box.style.justifyContent = "space-between"; // توزيع المسافة بين السعر والزر
    box.style.alignItems = "center";           // محاذاة في المنتصف عمودياً
    box.style.marginTop = "auto";

    pho.style.marginTop = "auto"  
    pho.style.fontWeight = "bold"

    btn.style.marginTop = "auto";
    btn.style.padding = "10px";
    btn.style.border = "#d3d6a4 2px solid";
    btn.style.borderRadius = "8px";
    btn.style.fontWeight = "bold";

    rating.style.display = "flex"
    rating.style.justifyContent = "space-around"
    rating.style.marginTop = "auto"
    
    categ.style.fontWeight = "bold"
    categ.style.marginTop = "auto"


    card.appendChild(img)
    card.appendChild(bod)
    bod.appendChild(tit)
    bod.appendChild(categ)
    bod.appendChild(rating)
    rating.appendChild(rate)
    rating.appendChild(count)
    bod.appendChild(box)
    box.appendChild(pho)
    box.appendChild(btn)
    par.appendChild(cont)
    cont.appendChild(card)

    
});
})
.catch((error)=>{
    console.error(error, "Error");
    
})
