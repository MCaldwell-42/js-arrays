const dinosaurs = [
{
    dinoType: 'tyranosaurus',
    name: 'Trogdor'
},
{
    dinoType: 'velociraptor',
    name: 'Velva'
},
{
    dinoType: 'brachiosaurus',
    name: 'Long Neck'
}
];

//loop over dinosaurs
//build up a domstring
//print domstring to the dom

const printToDom = (divID, textToPrint) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML = textToPrint;
};

const buildDinosaurs = () => {
    let domString = '';
    for (let i = 0; i < dinosaurs.length; i++) {
        domString += `<div class='dinosaur'>`;
        domString += `<h3>${dinosaurs[i].dinoType}</h3>`;
        domString += `<p>${dinosaurs[i].name}</p>`;
        domString += `</div>`;
    }
    printToDom('dino-barn',domString);
};


const init = () => {
 buildDinosaurs();
};

init();