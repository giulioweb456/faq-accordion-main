// Seleziona tutti gli elementi con la classe accordiontext
// var textsaccordion = document.getElementsByClassName("accordiontext");
// for (var i = 0; i < textsaccordion.length; i++) {
//     textsaccordion[i].style.display = "none";
// }


// var accordion = document.getElementsByClassName("accordionbutton");
// var i = 0;

// for(i=0; i<accordion.length; i++){
//     accordion[i].addEventListener("click",function(){
        
//         this.classList.toggle("active");

//         var parent = this.closest('.titleandbutton');

//         var panel = parent.nextElementSibling;
//         var iconaplus = document.querySelector(".accordionbutton");
//         if(panel.style.display === "block"){
//             panel.style.display = "none";
//             iconaplus.style.backgroundImage = "url(assets/images/icon-plus.svg)";
//         }
//         else{
//             panel.style.display = "block";
//             iconaplus.style.backgroundImage = "url(assets/images/icon-minus.svg)";
//         }
//     });
// }

var textsaccordion = document.getElementsByClassName("accordiontext");
for (var i = 0; i < textsaccordion.length; i++) {
    textsaccordion[i].style.display = "none";
}

var accordion = document.getElementsByClassName("accordionbutton");
for (var i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var parent = this.closest('.titleandbutton');
        var panel = parent.nextElementSibling;

        // Trova l'elemento img all'interno dell'accordionbutton corrente
        var icon = this.querySelector('img');

        if (panel.style.display === "block") {
            panel.style.display = "none";
            icon.src = "assets/images/icon-plus.svg";
        } else {
            panel.style.display = "block";
            icon.src = "assets/images/icon-minus.svg";
        }
    });
}
