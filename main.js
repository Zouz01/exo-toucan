const form = document.querySelector("#product-form"); //Interagit avec  HTML avec l'id "product-form"
const code_ean = document.querySelector("#code_ean"); //Interagit avec  HTML  avec l'id "code_ean"
const productInfo = document.querySelector("#product-info"); //Interagit avec  HTML avec l'id "les informations produits"
const img = document.querySelector("#img");  //Interagit avec  HTML avec l'id "les images"
const submit = document.querySelector("#submit");  //Interagit avec  HTML avec l'id "Boutton envoi"


submit.addEventListener("click", (e) => { // Ecouteur d'événement sur le bouton d'envoi qui écoute un événement de clic
    e.preventDefault();

    // validation du code
    if (code_ean.value.length !== 13) {
        alert("Le code EAN doit contenir 13 chiffres.");// Le script vérifie si la valeur du champ de saisie du code EAN comporte 13 caractères
        return;                                         // Sinon, il affiche une alerte indiquant que le code EAN doit contenir 13 chiffres.
    }else

// Si code correct alors ...
    // Récupére les informations du produit depuis l'API
    fetch("https://fr.openfoodfacts.org/api/v0/product/" + code_ean.value) //Méthode pour envoyer une requête GET à l'API 
        .then((reponse) => reponse.json())   //  Convertit  la réponse de l'API en JSON
        .then((data) => {                    //  Pour accéder aux données.
            let product = data.product;
            img.src = product.image_url;
           

             //Affiche les informations sur le produit, ( avec innerHTML on definila source de l'éléments)
             productInfo.innerHTML =` 
             <h2><b>Nom</b> : ${product.abbreviated_product_name}</h2> 
             <p><b>Marque</b> : ${product.brands}</p>
             <p><b>Catégorie</b> : ${product.categories}</p>
             <p><b>Ingrédients</b> : ${product.ingredients_text}</p>`
             console.log (data)
        }); // ${} veut dire interpreter

});

   /*fecht veut dire aller chercher*/             