const togglePopup = () => {
    const popup = document.getElementById('popup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}

document.getElementById("create-class").addEventListener("click", function () {
    togglePopup();
});

document.getElementById("popup-ok-button").addEventListener("click", function () {

    const name = document.getElementById('name').value;
    const classData = {
        name: name
    };

    fetch('http://localhost:8080/classes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(classData)
    })
        .then(response => {
            if (response.ok) {
                alert("Class created successfully");
                togglePopup();
                window.location.href = 'http://localhost:8080/';

                // let newStudent = {
                //     name: name,
                //     dateofbirth: "1998-05-20",
                //     interests: "Programming"
                // }
                // studentsData.push(newStudent);

                // rebuildStudentList();
            } else {
                console.error("Failed to create class");
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });

});

// rebuildStudentList();

export { togglePopup };