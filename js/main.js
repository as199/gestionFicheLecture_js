let alire = document.getElementById("alire");
let lu = document.getElementById("lu");
document.getElementById("ajouter").addEventListener("click",function (){
   let titre = document.getElementById('titre').value;
   let lien = document.getElementById('lien').value;
   if (lien == "" || titre ==""){
      alert("Les deux champs doivent être remplis");
   }else {
      document.getElementById("titre1").style.visibility="visible";
      document.getElementById("titre3").style.visibility="hidden";
      alire.insertAdjacentHTML("afterbegin", `<li>${titre} <i id=${titre} class="fas fa-check"  
        onclick="marquerLu(this.id)">
        </i><i class="fas fa-trash-alt" id=${titre} onclick="supprimer(this.id)">
        </i><a href=${lien} target="_blank" ><i class="fas fa-shopping-cart"></i></a></li>`);
      document.getElementById('titre').value = "";
      document.getElementById('lien').value = "";
   }
})

function supprimer(id){
   document.getElementById(id).parentElement.outerHTML="";
}
function marquerLu(id){
   document.getElementById("titre2").style.visibility="visible";
   supprimer(id);
   lu.insertAdjacentHTML("afterbegin", `<li>${id} <i class="fas fa-trash-alt" id=${id} onclick=supprimer(this.id)></i></li>`);


}
