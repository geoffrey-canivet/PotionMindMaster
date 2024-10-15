


const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
const item4 = document.getElementById('item4');
const tentative1 = document.getElementById('tentative1');
const tentative2 = document.getElementById('tentative2');
const tentative3 = document.getElementById('tentative3');
const tentative4 = document.getElementById('tentative4');
const containerGameOver = document.getElementsByClassName('gameOver')
const imgGagne = document.getElementsByClassName('gagne')
const imgPerdu = document.getElementsByClassName('perdu')
const filtre1 = document.getElementsByClassName('main')
const filtre2 = document.getElementsByClassName('game-ui-footer-fixed')
let tabPossibilite = ['blue', 'red', 'green', 'yellow'];
let tabBonneRep = [];
let nbTentative = 0;
let nbProposition = 0;
let tabTentative = [];
// 1 bien placé
// 2 mal placé
// 3 pas dans la bonne rep
let tabcolor = ['green', 'blue', 'red']
let indice = [];

let p1 = document.getElementsByClassName('p1')
let p2 = document.getElementsByClassName('p2')
let p3 = document.getElementsByClassName('p3')
let p4 = document.getElementsByClassName('p4')
let p5 = document.getElementsByClassName('p5')
let p6 = document.getElementsByClassName('p6')
let p7 = document.getElementsByClassName('p7')
let p8 = document.getElementsByClassName('p8')
let p9 = document.getElementsByClassName('p9')
let p10 = document.getElementsByClassName('p10')

let v1 = document.getElementsByClassName('v1')
let v2 = document.getElementsByClassName('v2')
let v3 = document.getElementsByClassName('v3')
let v4 = document.getElementsByClassName('v4')
let v5 = document.getElementsByClassName('v5')
let v6 = document.getElementsByClassName('v6')
let v7 = document.getElementsByClassName('v7')
let v8 = document.getElementsByClassName('v8')
let v9 = document.getElementsByClassName('v9')
let v10 = document.getElementsByClassName('v10')

    
// GENERER COMPOSITION
const genereBonneRep = () => {
    let nbAleatoire;
    for (let i = 0; i < 4; i++) {
        nbAleatoire = Math.floor(Math.random() * 4);
        tabBonneRep.push(tabPossibilite[nbAleatoire])
    }
    console.log(tabBonneRep)
}
genereBonneRep()

// CLICK ITEM
const clickItem = (couleur) => {
    switch (nbTentative) {// verifier a quel tentative il faut rajouter l'item
        case 0:
            tentative1.src = `assets/img/new/potion-${couleur.id}-0.png` // modifier l'image
            tentative1.setAttribute("onclick", "clickTentative(this)"); // ajoute attribut pour supp item
            tabTentative.push(couleur.id)
            nbTentative++ // passe a la tentative suivante
            break;
        case 1:
            tentative2.src = `assets/img/new/potion-${couleur.id}-0.png` 
            tentative1.removeAttribute("onclick"); // supprime attr onclick pour eviter de supprimer item
            tentative2.setAttribute("onclick", "clickTentative(this)");
            tabTentative.push(couleur.id)
            nbTentative++
            break;
        case 2:
            tentative3.src = `assets/img/new/potion-${couleur.id}-0.png`
            tentative2.removeAttribute("onclick");
            tentative3.setAttribute("onclick", "clickTentative(this)");
            tabTentative.push(couleur.id)
            nbTentative++
            break;
        case 3:
            tentative4.src = `assets/img/new/potion-${couleur.id}-0.png`
            tentative3.removeAttribute("onclick");
            tentative4.setAttribute("onclick", "clickTentative(this)");
            tabTentative.push(couleur.id)
            nbTentative++
            break;
        default:
            alert('Cliquez sur valider')
            break;
    }
}

// CLIQUE SUR TENTATIVE
const clickTentative = (proposition) => {
    switch (nbTentative) {
        case 1:
            tentative1.src = "assets/img/new/gray-potion.png";
            tentative1.removeAttribute("onclick");
            tabTentative.pop();
            nbTentative--
            break;
        case 2:
            tentative2.src = "assets/img/new/gray-potion.png"
            tentative2.removeAttribute("onclick");
            tentative1.setAttribute("onclick", "clickTentative(this)");
            tabTentative.pop();
            nbTentative--
            break;
        case 3:
            tentative3.src = "assets/img/new/gray-potion.png"
            tentative3.removeAttribute("onclick");
            tentative2.setAttribute("onclick", "clickTentative(this)");
            tabTentative.pop();
            nbTentative--
            break;
        case 4:
            tentative4.src = "assets/img/new/gray-potion.png"
            tentative4.removeAttribute("onclick");
            tentative3.setAttribute("onclick", "clickTentative(this)");
            tabTentative.pop();
            nbTentative--
            break;
        default:
            alert('ERREUR')
            break;
    }
}

// COMPARER TABLEAU
const compareProp = () => {
    for (let i = 0; i < 4; i++) { // creer tab indice // pour chaque couleur
        if (tabTentative[i] === tabBonneRep[i]) { // si au bon endroit
            indice.push(0)
        }
        if (tabTentative[i] != tabBonneRep[i]) {
          if(tabBonneRep.includes(tabTentative[i])) {// vérifier si présent dans tableau 
            indice.push(1) // mauvais endroit
          }else{
            indice.push(2) // pas dans la bonne rep
          }  
        }
    }
    console.log(indice)
}
// REINIT
const reinit = () => {
    tentative1.src = "assets/img/new/gray-potion.png"; // reinit tentative
    tentative2.src = "assets/img/new/gray-potion.png";
    tentative3.src = "assets/img/new/gray-potion.png";
    tentative4.src = "assets/img/new/gray-potion.png";
    indice.length = 0; // reinit
    nbTentative = 0; // reinit
    tabTentative.length = 0 // reinit
    nbProposition++
}



  

const verfWin = () => {
    let tousZeros = indice.every(function(element) {
        return element === 0;
    });
    
    // Affiche le résultat
    if (tousZeros) { // si tout les element du tab son 0 c est gagné
    console.log("Gagné");
    containerGameOver[0].style.display = 'flex'
    imgGagne[0].style.display = 'block'
    filtre1[0].style.filter = 'blur(10px)'
    filtre2[0].style.filter = 'blur(10px)'
    } else {
    console.log("Le tableau contient au moins un élément différent de zéro.");
    }
}








// CLICK BTN VALIDER
const clickValider = () => {


    // SI tab1 et tab2 identique gagné
    // SI tentative 10 PERDU



    // verifier si tout les items sont placé
    if (nbTentative === 4) { // items placés
        
        switch (nbProposition) { // placer les proposition au bon endroit
            case 0:
                p1[0].src = `assets/img/new/potion-${tabTentative[0]}-0.png` // placer items proposé
                p1[1].src = `assets/img/new/potion-${tabTentative[1]}-0.png`
                p1[2].src = `assets/img/new/potion-${tabTentative[2]}-0.png`
                p1[3].src = `assets/img/new/potion-${tabTentative[3]}-0.png`
                compareProp()
                verfWin()
                v1[0].style.background = tabcolor[indice[0]] // placer indices
                v1[1].style.background = tabcolor[indice[1]]
                v1[2].style.background = tabcolor[indice[2]]
                v1[3].style.background = tabcolor[indice[3]]
                reinit()
                break;
            case 1:
                p2[0].src = `assets/img/new/potion-${tabTentative[0]}-0.png`
                p2[1].src = `assets/img/new/potion-${tabTentative[1]}-0.png`
                p2[2].src = `assets/img/new/potion-${tabTentative[2]}-0.png`
                p2[3].src = `assets/img/new/potion-${tabTentative[3]}-0.png`
                compareProp()
                verfWin()
                v2[0].style.background = tabcolor[indice[0]] 
                v2[1].style.background = tabcolor[indice[1]]
                v2[2].style.background = tabcolor[indice[2]]
                v2[3].style.background = tabcolor[indice[3]]
                reinit()
                break;
            case 2:
                p3[0].src = `assets/img/new/potion-${tabTentative[0]}-0.png`
                p3[1].src = `assets/img/new/potion-${tabTentative[1]}-0.png`
                p3[2].src = `assets/img/new/potion-${tabTentative[2]}-0.png`
                p3[3].src = `assets/img/new/potion-${tabTentative[3]}-0.png`
                compareProp()
                verfWin()
                v3[0].style.background = tabcolor[indice[0]] 
                v3[1].style.background = tabcolor[indice[1]]
                v3[2].style.background = tabcolor[indice[2]]
                v3[3].style.background = tabcolor[indice[3]]
                reinit()
                break;
            case 3:
                p4[0].src = `assets/img/new/potion-${tabTentative[0]}-0.png`
                p4[1].src = `assets/img/new/potion-${tabTentative[1]}-0.png`
                p4[2].src = `assets/img/new/potion-${tabTentative[2]}-0.png`
                p4[3].src = `assets/img/new/potion-${tabTentative[3]}-0.png`
                compareProp()
                verfWin()
                v4[0].style.background = tabcolor[indice[0]] 
                v4[1].style.background = tabcolor[indice[1]]
                v4[2].style.background = tabcolor[indice[2]]
                v4[3].style.background = tabcolor[indice[3]]
                reinit()
                break;
            case 4:
                p5[0].src = `assets/img/new/potion-${tabTentative[0]}-0.png`
                p5[1].src = `assets/img/new/potion-${tabTentative[1]}-0.png`
                p5[2].src = `assets/img/new/potion-${tabTentative[2]}-0.png`
                p5[3].src = `assets/img/new/potion-${tabTentative[3]}-0.png`
                compareProp()
                verfWin()
                v5[0].style.background = tabcolor[indice[0]] 
                v5[1].style.background = tabcolor[indice[1]]
                v5[2].style.background = tabcolor[indice[2]]
                v5[3].style.background = tabcolor[indice[3]]
                reinit()
                break;
            case 5:
                p6[0].src = `assets/img/new/potion-${tabTentative[0]}-0.png`
                p6[1].src = `assets/img/new/potion-${tabTentative[1]}-0.png`
                p6[2].src = `assets/img/new/potion-${tabTentative[2]}-0.png`
                p6[3].src = `assets/img/new/potion-${tabTentative[3]}-0.png`
                compareProp()
                verfWin()
                v6[0].style.background = tabcolor[indice[0]] 
                v6[1].style.background = tabcolor[indice[1]]
                v6[2].style.background = tabcolor[indice[2]]
                v6[3].style.background = tabcolor[indice[3]]
                reinit()
                break;
            case 6:
                p7[0].src = `assets/img/new/potion-${tabTentative[0]}-0.png`
                p7[1].src = `assets/img/new/potion-${tabTentative[1]}-0.png`
                p7[2].src = `assets/img/new/potion-${tabTentative[2]}-0.png`
                p7[3].src = `assets/img/new/potion-${tabTentative[3]}-0.png`
                compareProp()
                verfWin()
                v7[0].style.background = tabcolor[indice[0]] 
                v7[1].style.background = tabcolor[indice[1]]
                v7[2].style.background = tabcolor[indice[2]]
                v7[3].style.background = tabcolor[indice[3]]
                reinit()
                break;
            case 7:
                p8[0].src = `assets/img/new/potion-${tabTentative[0]}-0.png`
                p8[1].src = `assets/img/new/potion-${tabTentative[1]}-0.png`
                p8[2].src = `assets/img/new/potion-${tabTentative[2]}-0.png`
                p8[3].src = `assets/img/new/potion-${tabTentative[3]}-0.png`
                compareProp()
                verfWin()
                v8[0].style.background = tabcolor[indice[0]] 
                v8[1].style.background = tabcolor[indice[1]]
                v8[2].style.background = tabcolor[indice[2]]
                v8[3].style.background = tabcolor[indice[3]]
                reinit()
                break;
            case 8:
                p9[0].src = `assets/img/new/potion-${tabTentative[0]}-0.png`
                p9[1].src = `assets/img/new/potion-${tabTentative[1]}-0.png`
                p9[2].src = `assets/img/new/potion-${tabTentative[2]}-0.png`
                p9[3].src = `assets/img/new/potion-${tabTentative[3]}-0.png`
                compareProp()
                verfWin()
                v9[0].style.background = tabcolor[indice[0]] 
                v9[1].style.background = tabcolor[indice[1]]
                v9[2].style.background = tabcolor[indice[2]]
                v9[3].style.background = tabcolor[indice[3]]
                reinit()
                break;
            case 9:
                p10[0].src = `assets/img/new/potion-${tabTentative[0]}-0.png`
                p10[1].src = `assets/img/new/potion-${tabTentative[1]}-0.png`
                p10[2].src = `assets/img/new/potion-${tabTentative[2]}-0.png`
                p10[3].src = `assets/img/new/potion-${tabTentative[3]}-0.png`
                compareProp()
                verfWin()
                v10[0].style.background = tabcolor[indice[0]] 
                v10[1].style.background = tabcolor[indice[1]]
                v10[2].style.background = tabcolor[indice[2]]
                v10[3].style.background = tabcolor[indice[3]]
                reinit()
                console.log("Perdu");
                containerGameOver[0].style.display = 'flex'
                imgPerdu[0].style.display = 'block'
                filtre1[0].style.filter = 'blur(10px)'
                filtre2[0].style.filter = 'blur(10px)'
                break;
            default: // PERDU
                
                break;
        }
    } else {
        console.log('tout les items ne sont pas placé')
    }
}



function reloadPage() {
    location.reload();
}




