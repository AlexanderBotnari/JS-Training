(() => {
let students = [];

const form = document.getElementById('form');
const nume = document.getElementById("nume");
const prenume = document.getElementById("prenume");
const patronimic = document.getElementById("patronimic");
const nastere = document.getElementById("data");
const studii = document.getElementById("studii");
const facultate = document.getElementById("facultate");

const tableBody = document.getElementById('tableBody');
const tableNume = document.getElementById('tableNume');
const tablePrenume = document.getElementById('tablePrenume');
const tablePatronimic = document.getElementById('tablePatronimic');
const tableNastere = document.getElementById('tableData');
const tableStudii = document.getElementById('tableStudii');
const tableFacultate = document.getElementById('tableFacultate');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    students.push({
        nume: nume,
        prenume: prenume.textContent,
        patronimic: patronimic.textContent,
        nastere: nastere.textContent,
        studii: studii.textContent,
        facultate: facultate.textContent,
    });
    window.localStorage.setItem('students', JSON.stringify(students));
});

document.addEventListener('DOMContentLoaded', () => {
   for(i=0; i<=students.length; i++){
        let student = students[i];
        console.log(student);
   }
});

})();