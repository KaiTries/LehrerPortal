const togglePopup = () => {
    const popup = document.getElementById('popup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}

// let studentsData = [
//     { name: "John Doe", dateofbirth: "1998-05-20", interests: "Programming" },
//     { name: "Jane Smith", dateofbirth: "1999-08-15", interests: "Reading" },
//     { name: "Alice Johnson", dateofbirth: "2000-02-10", interests: "Music" },
// ];
//
// const rebuildStudentList = () => {
//     const container = document.getElementById('students');
//
//     while (container.firstChild) {
//         container.removeChild(container.firstChild);
//     }
//
//     studentsData.forEach(student => {
//         const widget = document.createElement('div');
//         widget.classList.add('student-widget');
//
//         const nameElement = document.createElement('div');
//         nameElement.classList.add('student-info');
//         nameElement.textContent = `Name: ${student.name}`;
//
//         const dobElement = document.createElement('div');
//         dobElement.classList.add('student-info');
//         dobElement.textContent = `Date of Birth: ${student.dateofbirth}`;
//
//         const interestsElement = document.createElement('div');
//         interestsElement.classList.add('student-info');
//         interestsElement.textContent = `Interests: ${student.interests}`;
//
//         widget.appendChild(nameElement);
//         widget.appendChild(dobElement);
//         widget.appendChild(interestsElement);
//
//         widget.addEventListener('click', function () {
//
//             window.location.href = 'http://127.0.0.1:5173/student.html';
//         });
//
//         container.appendChild(widget);
//     });
// }


document.getElementById("create-student").addEventListener("click", function () {
    togglePopup();
});

document.getElementById("popup-ok-button").addEventListener("click", function () {

    const name = document.getElementById('name').value;
    const studentData = {
        name: name,
        dateOfBirth: "1995-07-22",
    };

    fetch('http://localhost:8080/classes/class', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(studentData)
    })
        .then(response => {
            if (response.ok) {
                alert("Student created successfully");
                togglePopup();
                window.location.href = 'http://localhost:8080/classes/class';

                // let newStudent = {
                //     name: name,
                //     dateofbirth: "1998-05-20",
                //     interests: "Programming"
                // }
                // studentsData.push(newStudent);

                // rebuildStudentList();
            } else {
                console.error("Failed to create student");
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });

});

// rebuildStudentList();

export { togglePopup };