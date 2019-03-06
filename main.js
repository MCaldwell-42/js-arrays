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

// const buildDinosaurs = () => {
//     let domString = '';
//     for (let i = 0; i < dinosaurs.length; i++) {
//         domString += `<div class='dinosaur'>`;
//         domString += `<h3>${dinosaurs[i].dinoType}</h3>`;
//         domString += `<p>${dinosaurs[i].name}</p>`;
//         domString += `</div>`;
//     }
//     printToDom('dino-barn',domString);
// };



const assignments = [
    {
        title: 'product cards',
        dueDate: '03/05/19',
        topic: 'HTML/CSS',
        notes: 'Use flexbox',
        assignmentUrl: 'https://www.assignment.com'

    },
    {   title: 'do the dinosaur',
        dueDate: '04/05/19',
        topic: 'functions',
        notes: 'be a paleontologist',
        assignmentUrl: 'https://www.dinosaurs.com',
    },
    {   title: 'be sleepy',
        dueDate: '03/06/19',
        topic: 'time management',
        notes: 'use loops',
        assignmentUrl: 'https://www.whitenoise.com',
    },
    {   title: 'fourth assignment',
        dueDate: '08/03/19',
        topic: 'creativity',
        notes: 'Out of it',
        assignmentUrl: 'https://www.ideas.com',
    },
    {   title: 'FINAL PROJECT',
        dueDate: '02/05/20',
        topic: 'EVERYTHING',
        notes: 'NEVER FORGET',
        assignmentUrl: 'https://www.sofaraway.com',
    }
];

//total of five assignments
//buildAssignmentCards - loop over assignments and make a domString
//reuse the printToDom function to display the domString
//css title area, due date bolded, link to url, topic, notes, white background, grey border


const buildAssignments = () => {

    domString = '';
    for (let i = 0; i < assignments.length; i++) {
        
        domString += `<div class='ass'>`;
        domString += `<header class="title">${assignments[i].title}</header>`;
        domString += `<h2><strong>Due Date: ${assignments[i].dueDate}</strong></h2>`;
        domString += `<p>Get the assignment <a href='$assignments[i].assignmentUrl'> Here</a></p>`;
        domString += `<p>Topic: ${assignments[i].topic}</p>`;
        domString += `<p>Notes: ${assignments[i].notes}</p>`;
        
        domString += `</div>`;

    }
    printToDom('assig', domString);
};

buildAssignments();




const init = () => {
//  buildDinosaurs();
};

init();