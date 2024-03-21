// import { lehrplan_21 } from "./resources/lehrplan-21-kanton-st-gallen";

let currentSelection = null;

document.getElementById("create-lernziel-btn").addEventListener("click", function () {

    var description = document.getElementById("description").value;
    var UUID = uuidv4();
    if (!description) {
        description = document.getElementById("searchInput").value;
        UUID = selected.uid;
    }
    const type = document.getElementById("type").value;
    const lernzielData = {
        uid: UUID,
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

function interpolateColor(color1, color2, value) {
    // Parse colors from hexadecimal format
    const parseColor = (color) => {
        return {
            r: parseInt(color.substring(1, 3), 16),
            g: parseInt(color.substring(3, 5), 16),
            b: parseInt(color.substring(5, 7), 16)
        };
    };

    // Interpolate each RGB component separately
    const color1Parsed = parseColor(color1);
    const color2Parsed = parseColor(color2);
    const interpolatedColor = {
        r: Math.round(color1Parsed.r + (color2Parsed.r - color1Parsed.r) * value),
        g: Math.round(color1Parsed.g + (color2Parsed.g - color1Parsed.g) * value),
        b: Math.round(color1Parsed.b + (color2Parsed.b - color1Parsed.b) * value)
    };

    // Convert interpolated color back to hexadecimal format
    const toHex = (component) => {
        const hex = component.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    return `#${toHex(interpolatedColor.r)}${toHex(interpolatedColor.g)}${toHex(interpolatedColor.b)}`;
}

const getColor = (average) => {
    if (average < 1)
        return interpolateColor('#A52A2A', '#008000', average);
    else if (average < 2)
        return interpolateColor('#008000', '#FFA500', average - 1);
    else if (average <= 3)
        return interpolateColor('#FFA500', '#FFFF00', average - 2);
    return '#ffffff';
}

const createSummarizeWidget = () => {

    const colorDict = {
        'brown': 0,
        'green': 1,
        'orange': 2,
        'yellow': 3
    }

    let allWidgets = document.querySelectorAll('.card');

    let importantWidgets = [];

    for (let widget of allWidgets) {
        for (let attribute of widget.attributes) {
            if (attribute.name === "color") {
                importantWidgets.push(widget);
            }
        }
    }

    allWidgets = importantWidgets;

    let averagesList = [];
    let total = 0;
    let counter = 1;
    for (let widget of allWidgets) {
        const color = widget.color;
        total += colorDict[widget.attributes.color.value];
        averagesList.push(total / counter);
        counter++;
    }

    const colorStrip = document.querySelector('.color-strip');

    let percentageStop = 0;
    let stepSize = 100 / averagesList.length;

    let colors = [];

    for (let i = 0; i < averagesList.length; i++) {
        // stops.push(percentageStop + stepSize * i);
        colors.push(`${getColor(averagesList[i])} ${percentageStop + stepSize * i}%`);
    }

    colorStrip.style.setProperty('--color-brown', '#A52A2A');
    colorStrip.style.setProperty('--color-green', '#008000');
    colorStrip.style.setProperty('--color-orange', '#FFA500');
    colorStrip.style.setProperty('--color-yellow', '#FFFF00');

    colorStrip.style.background = `linear-gradient(to right, ${colors.join(', ')})`;
}

const removeAll = () => {
    document.getElementById("deutsch").style.display = "none";
    document.getElementById("mathematik").style.display = "none";
    document.getElementById("natur").style.display = "none";
    document.getElementById("mensch").style.display = "none";
    document.getElementById("gesellschaft").style.display = "none";
    document.getElementById("gestalten").style.display = "none";
    document.getElementById("musik").style.display = "none";
}

document.getElementById('deutsch-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    currentSelection = 0;
    removeAll();
    document.getElementById("deutsch").style.display = "block";
    addEventListenerToLernziel();
    createSummarizeWidget();
});

document.getElementById('mathematik-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    currentSelection = 1;
    removeAll();
    document.getElementById("mathematik").style.display = "block";
});

document.getElementById('natur-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    currentSelection = 2;
    removeAll();
    document.getElementById("natur").style.display = "block";
});

document.getElementById('mensch-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    currentSelection = 3;
    removeAll();
    document.getElementById("mensch").style.display = "block";
});

document.getElementById('gesellschaft-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    currentSelection = 4;
    removeAll();
    document.getElementById("gesellschaft").style.display = "block";
});

document.getElementById('gestalten-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    currentSelection = 5;
    removeAll();
    document.getElementById("gestalten").style.display = "block";
});

document.getElementById('musik-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    currentSelection = 6;
    removeAll();
    document.getElementById("gesellschaft").style.display = "gesellschaft";
});

const addEventListenerToLernziel = () => {
    const allRoundButtons = document.querySelectorAll('.round-button');
    allRoundButtons.forEach(button => {
        button.addEventListener('click', e => {

            let lernzielUpdateData = {
                uid: button.parentNode.id,
                bewertung: button.classList[1]
            }

            console.log(lernzielUpdateData);

            fetch(window.location.href, {
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

const items = [];
let selected = null;


fetch('https://daten.stadt.sg.ch/api/explore/v2.1/catalog/datasets/lehrplan-21-kanton-st-gallen/records?select=bezeichnung%2C%20uid&where=f_id%20%3D%2011&limit=100&apikey=6698e1aad435de1a1ce4d15e7fddf6e98f0c7f78768c0af05497d54b')
    .then(response => response.json())
    .then(data => {
        // No need to parse dataObj, it's already a JavaScript object
        // Directly extract "bezeichnung" values and update the outer scope variable
        data.results.forEach(item => {
            if (item.bezeichnung) {
                items.push({ bezeichnung: item.bezeichnung, uid: item.uid });
            }
        });

        // Ensure the event listener is attached here to make sure it has access to the populated bezeichnungen array
        document.getElementById('searchInput').addEventListener('input', function() {
            const input = this.value.toLowerCase();
            const filteredData = items.filter(item => item.bezeichnung.toLowerCase().startsWith(input));
            displayDropdown(filteredData);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

function displayDropdown(data) {
    const dropdown = document.getElementById('dropdown');
    dropdown.innerHTML = ''; // Clear previous results
    dropdown.style.display = data.length > 0 ? 'block' : 'none'; // Show or hide dropdown

    data.forEach(item => {
        const option = document.createElement('div');
        option.textContent = item.bezeichnung; // Use bezeichnung directly
        option.addEventListener('click', function() {
            document.getElementById('searchInput').value = item.bezeichnung; // Fill input with selected bezeichnung
            dropdown.innerHTML = ''; // Clear dropdown
            selected = items.find(i => i.uid === item.uid);
        });
        dropdown.appendChild(option);
    });
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
