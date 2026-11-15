let btncontact = document.querySelector('#nav-contact')
let modal = document.querySelector(".modal")
let fremer = document.querySelector("#fermer")
let btnservices = document.querySelector("#nav-services")
let services = document.querySelector("#services")

btncontact.addEventListener("click" , function(e){
    e.preventDefault()
    modal.style.display = "flex"
    
})
fremer.addEventListener("click",function(){
        modal.style.display = "none"
    })
btnservices.addEventListener("click" , function(e){
    services.toggleAttribute("hidden")
    e.preventDefault()

})
let btnajouter = document.querySelectorAll("#productlist button")
let panier = document.querySelector("#panier")
let totalspan = document.querySelector("#total")
let total = 0
function ajouteCard(nomPro , prix ){
    
   total += prix
    let li = document.createElement("li")
    
       li.textContent = `${nomPro} : ${prix} DH`
       panier.appendChild(li)
       totalspan.textContent=`${total}`
}
btnajouter.forEach(function(btn){
    btn.addEventListener("click" , function(){
       let produit= btn.closest("li")
       let nameproduit = produit.dataset.name
       let prix = Number(produit.dataset.price)
       ajouteCard(nameproduit , prix)
        
    })
})

let h1 = document.querySelector("h1")

h1.classList.add("highlight")

let testi = document.querySelectorAll(".testimonial")
testi.forEach(function(tst,index){

    setTimeout(() => {
        tst.classList.add("fade-in")
    },500 * (index + 1));

})

let tests = document.querySelector(".testimonials")
tests.addEventListener("click" , function(e){
    if (e.target.closest("button")) return

    let tstst = e.target.closest(".testimonial")
    alert(tstst.querySelector("cite").textContent)

},true)

let form = document.querySelector("#contactForm")
form.addEventListener("submit" , function(e){
    e.preventDefault()
    
    let nom = document.querySelector("#contactForm input")
    if(nom.value.trim().length ===0){
        console.log("Veuillez saisir votre nom")
        return
    }else{
        console.log("nom est valid")
    }
    let email = document.querySelector('#contactForm input[type="email"]')
    if(email.value.trim().length === 0 || email.value.includes("@")===false || email.value.includes(".")===false){
        console.log("votre email est incorrect")
        return
    }else{
        console.log("email est correct")
    }
    let msg = document.querySelector("#contactForm textarea")
    if(msg.value.trim().length ===0){
        console.log("saisir un msg")
        return
    }else{
        console.log("msg est valid")}
    console.log( "Formulaire soumis")
})

 