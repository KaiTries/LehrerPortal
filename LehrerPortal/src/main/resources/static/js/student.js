// import { lehrplan_21 } from "./resources/lehrplan-21-kanton-st-gallen";

let currentSelection = null;

document.getElementById("create-lernziel-btn").addEventListener("click", function () {

    const description = document.getElementById("description").value;
    const type = document.getElementById("type").value;
    const lernzielData = {
        uid: 'abc123456',
        fb_id: currentSelection,
        f_id: 0,
        kb_id: 0,
        ha_id: 0,
        k_id: "xyz789",
        code: "ABC123",
        aufbau: "Some aufbau",
        zyklus: "Some zyklus",
        aufzaehlungspunkt: type,
        strukturtyp: "Some strukturtyp",
        sprache: "German",
        bezeichnung: description
    };

    fetch(window.location.href, {
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
                window.location.reload();
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
    currentSelection = 0;
    removeAll();
    document.getElementById("deutsch").style.display = "block";
    addEventListenerToLernziel();
});

document.getElementById('mathematik-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    currentSelection = 1;
    removeAll();
    document.getElementById("mathematik").style.display = "block";
    addEventListenerToLernziel();
});

document.getElementById('natur-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    currentSelection = 2;
    removeAll();
    document.getElementById("natur").style.display = "block";
    addEventListenerToLernziel();
});

document.getElementById('mensch-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    currentSelection = 3;
    removeAll();
    document.getElementById("mensch").style.display = "block";
    addEventListenerToLernziel();
});

document.getElementById('gesellschaft-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    currentSelection = 4;
    removeAll();
    document.getElementById("gesellschaft").style.display = "block";
    addEventListenerToLernziel();
});

document.getElementById('gestalten-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    currentSelection = 5;
    removeAll();
    document.getElementById("gestalten").style.display = "block";
    addEventListenerToLernziel();
});

document.getElementById('musik-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    currentSelection = 6;
    removeAll();
    document.getElementById("gesellschaft").style.display = "gesellschaft";
    addEventListenerToLernziel();
});

document.getElementById('bewegung-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    currentSelection = 7;
    removeAll();
    document.getElementById("bewegung").style.display = "block";
    addEventListenerToLernziel();
});

const addEventListenerToLernziel = () => {
    const allRoundButtons = document.querySelectorAll('.round-button');
    allRoundButtons.forEach(button => {
        console.log("somethin")
        button.addEventListener('click', e => {

            console.log(e);

            let lernzielUpdateData = {
                uid: e.target.uid,
                bewertung: button.classList[1]
            }

            console.log(lernzielUpdateData);

            fetch(`http://localhost:8080/classes/class/test`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(lernzielUpdateData)
            })
                .then(response => {
                    if (response.ok) {
                        alert("Bewertung updated successfully");
                        window.location.reload();
                    } else {
                        console.error("Failed to update Bewertung");
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        });
    });
}
