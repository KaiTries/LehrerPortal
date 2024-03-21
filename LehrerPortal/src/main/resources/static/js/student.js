// import { lehrplan_21 } from "./resources/lehrplan-21-kanton-st-gallen";

let currentSelection = "none";

document.getElementById("create-lernziel-btn").addEventListener("click", function () {

    const description = document.getElementById("description").value;
    const type = document.getElementById("type").value;
    const lernzielData = {
        uid: "abc123",
        fb_id: 1,
        f_id: 0,
        kb_id: 789,
        ha_id: 1011,
        k_id: "xyz789",
        code: "ABC123",
        aufbau: "Some aufbau",
        zyklus: "Some zyklus",
        aufzaehlungspunkt: type,
        strukturtyp: "Some strukturtyp",
        sprache: "German",
        bezeichnung: description
    };

    fetch(`http://localhost:8080/classes/class/test`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(lernzielData)
    })
        .then(response => {
            if (response.ok) {
                alert("Lernziel created successfully");
                togglePopup();

            } else {
                console.error("Failed to create Lernziel");
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });

});

const togglePopup = () => {
    const popup = document.getElementById('popup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}

document.getElementById("add-lernziel-btn").addEventListener("click", function () {
    if (currentSelection === "none") {
        alert("Please select a subject first");
    } else {
        togglePopup();
    }
});

document.getElementById("upload-btn").addEventListener("click", function () {
    let selectedFile;
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            selectedFile = file;
            alert('File selected successfully!');
            console.log(selectedFile); // Log the selected file to the console
        }
    });
    fileInput.click();
});

const removeAll = () => {
    document.getElementById("deutsch").style.display = "none";
    document.getElementById("mathematik").style.display = "none";
    document.getElementById("natur").style.display = "none";
    document.getElementById("mensch").style.display = "none";
    document.getElementById("gesellschaft").style.display = "none";
    document.getElementById("gestalten").style.display = "none";
    document.getElementById("musik").style.display = "none";
    document.getElementById("bewegung").style.display = "none";
}

document.getElementById('deutsch-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior

    currentSelection = "deutsch";

    removeAll();
    document.getElementById("deutsch").style.display = "block";

    // const elements = lehrplan_21.filter((item) => item.f_id === 0 && item.bezeichnung !== null);
    //
    // for (const item of elements) {
    //     let newElement = document.createElement('div');
    //     newElement.classList.add('card'); // Adding a class for styling (you can customize this class in your CSS)
    //
    //     // Creating elements for subject, category, title, and description
    //     let strukturtypElement = document.createElement('h2');
    //     strukturtypElement.textContent = item.strukturtyp;
    //     let bezeichnungElement = document.createElement('p');
    //     bezeichnungElement.textContent = `Bezeichnung: ${item.bezeichnung}`;
    //
    //     // Appending elements to the newElement
    //     newElement.appendChild(strukturtypElement);
    //     newElement.appendChild(bezeichnungElement);
    //
    //     // Appending the newElement to the document body (you can append it wherever you want in your HTML)
    //     document.getElementById("deutsch-content").appendChild(newElement);
    // }

});

document.getElementById('mathematik-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior

    currentSelection = "mathematik";

    removeAll();
    document.getElementById("mathematik").style.display = "block";

    // const elements = lehrplan_21.filter((item) => item.f_id === 1 && item.f_id !== null);
    //
    // for (const item of elements) {
    //     let newElement = document.createElement('div');
    //     newElement.classList.add('card'); // Adding a class for styling (you can customize this class in your CSS)
    //
    //     // Creating elements for subject, category, title, and description
    //     let strukturtypElement = document.createElement('h2');
    //     strukturtypElement.textContent = item.strukturtyp;
    //     let bezeichnungElement = document.createElement('p');
    //     bezeichnungElement.textContent = `Bezeichnung: ${item.bezeichnung}`;
    //
    //     // Appending elements to the newElement
    //     newElement.appendChild(strukturtypElement);
    //     newElement.appendChild(bezeichnungElement);
    //
    //     // Appending the newElement to the document body (you can append it wherever you want in your HTML)
    //     document.getElementById("mathematik-content").appendChild(newElement);
    // }

});

document.getElementById('natur-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior

    currentSelection = "natur";

    removeAll();
    document.getElementById("natur").style.display = "block";

    // const elements = lehrplan_21.filter((item) => item.f_id === 2 && item.f_id !== null);
    //
    // for (const item of elements) {
    //     let newElement = document.createElement('div');
    //     newElement.classList.add('card'); // Adding a class for styling (you can customize this class in your CSS)
    //
    //     // Creating elements for subject, category, title, and description
    //     let strukturtypElement = document.createElement('h2');
    //     strukturtypElement.textContent = item.strukturtyp;
    //     let bezeichnungElement = document.createElement('p');
    //     bezeichnungElement.textContent = `Bezeichnung: ${item.bezeichnung}`;
    //
    //     // Appending elements to the newElement
    //     newElement.appendChild(strukturtypElement);
    //     newElement.appendChild(bezeichnungElement);
    //
    //     // Appending the newElement to the document body (you can append it wherever you want in your HTML)
    //     document.getElementById("natur-content").appendChild(newElement);
    // }

});

document.getElementById('mensch-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior

    currentSelection = "mensch";

    removeAll();
    document.getElementById("mensch").style.display = "block";

    // const elements = lehrplan_21.filter((item) => item.f_id === 3 && item.f_id !== null);
    //
    // for (const item of elements) {
    //     let newElement = document.createElement('div');
    //     newElement.classList.add('card'); // Adding a class for styling (you can customize this class in your CSS)
    //
    //     // Creating elements for subject, category, title, and description
    //     let strukturtypElement = document.createElement('h2');
    //     strukturtypElement.textContent = item.strukturtyp;
    //     let bezeichnungElement = document.createElement('p');
    //     bezeichnungElement.textContent = `Bezeichnung: ${item.bezeichnung}`;
    //
    //     // Appending elements to the newElement
    //     newElement.appendChild(strukturtypElement);
    //     newElement.appendChild(bezeichnungElement);
    //
    //     // Appending the newElement to the document body (you can append it wherever you want in your HTML)
    //     document.getElementById("mensch-content").appendChild(newElement);
    // }

});

document.getElementById('gesellschaft-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior

    currentSelection = "gesellschaft";

    removeAll();
    document.getElementById("gesellschaft").style.display = "block";

    // const elements = lehrplan_21.filter((item) => item.f_id === 4 && item.f_id !== null);
    //
    // for (const item of elements) {
    //     let newElement = document.createElement('div');
    //     newElement.classList.add('card'); // Adding a class for styling (you can customize this class in your CSS)
    //
    //     // Creating elements for subject, category, title, and description
    //     let strukturtypElement = document.createElement('h2');
    //     strukturtypElement.textContent = item.strukturtyp;
    //     let bezeichnungElement = document.createElement('p');
    //     bezeichnungElement.textContent = `Bezeichnung: ${item.bezeichnung}`;
    //
    //     // Appending elements to the newElement
    //     newElement.appendChild(strukturtypElement);
    //     newElement.appendChild(bezeichnungElement);
    //
    //     // Appending the newElement to the document body (you can append it wherever you want in your HTML)
    //     document.getElementById("gesellschaft-content").appendChild(newElement);
    // }

});

document.getElementById('gestalten-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior

    currentSelection = "gestalten";

    removeAll();
    document.getElementById("gestalten").style.display = "block";

    // const elements = lehrplan_21.filter((item) => item.f_id === 5 && item.f_id !== null);
    //
    // for (const item of elements) {
    //     let newElement = document.createElement('div');
    //     newElement.classList.add('card'); // Adding a class for styling (you can customize this class in your CSS)
    //
    //     // Creating elements for subject, category, title, and description
    //     let strukturtypElement = document.createElement('h2');
    //     strukturtypElement.textContent = item.strukturtyp;
    //     let bezeichnungElement = document.createElement('p');
    //     bezeichnungElement.textContent = `Bezeichnung: ${item.bezeichnung}`;
    //
    //     // Appending elements to the newElement
    //     newElement.appendChild(strukturtypElement);
    //     newElement.appendChild(bezeichnungElement);
    //
    //     // Appending the newElement to the document body (you can append it wherever you want in your HTML)
    //     document.getElementById("gestalten-content").appendChild(newElement);
    // }

});

document.getElementById('musik-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior

    currentSelection = "musik";

    removeAll();
    document.getElementById("gesellschaft").style.display = "gesellschaft";

    // const elements = lehrplan_21.filter((item) => item.f_id === 6 && item.f_id !== null);
    //
    // for (const item of elements) {
    //     let newElement = document.createElement('div');
    //     newElement.classList.add('card'); // Adding a class for styling (you can customize this class in your CSS)
    //
    //     // Creating elements for subject, category, title, and description
    //     let strukturtypElement = document.createElement('h2');
    //     strukturtypElement.textContent = item.strukturtyp;
    //     let bezeichnungElement = document.createElement('p');
    //     bezeichnungElement.textContent = `Bezeichnung: ${item.bezeichnung}`;
    //
    //     // Appending elements to the newElement
    //     newElement.appendChild(strukturtypElement);
    //     newElement.appendChild(bezeichnungElement);
    //
    //     // Appending the newElement to the document body (you can append it wherever you want in your HTML)
    //     document.getElementById("musik-content").appendChild(newElement);
    // }

});

document.getElementById('bewegung-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior

    currentSelection = "bewegung";

    removeAll();
    document.getElementById("bewegung").style.display = "block";

    // const elements = lehrplan_21.filter((item) => item.f_id === 7 && item.f_id !== null);
    //
    // for (const item of elements) {
    //     let newElement = document.createElement('div');
    //     newElement.classList.add('card'); // Adding a class for styling (you can customize this class in your CSS)
    //
    //     // Creating elements for subject, category, title, and description
    //     let strukturtypElement = document.createElement('h2');
    //     strukturtypElement.textContent = item.strukturtyp;
    //     let bezeichnungElement = document.createElement('p');
    //     bezeichnungElement.textContent = `Bezeichnung: ${item.bezeichnung}`;
    //
    //     // Appending elements to the newElement
    //     newElement.appendChild(strukturtypElement);
    //     newElement.appendChild(bezeichnungElement);
    //
    //     // Appending the newElement to the document body (you can append it wherever you want in your HTML)
    //     document.getElementById("bewegung-content").appendChild(newElement);
    // }

});