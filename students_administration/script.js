(() => {
    let students = JSON.parse(window.localStorage.getItem('students')) || [];
    
    const form = document.getElementById('form');
    const nume = document.getElementById("nume");
    const prenume = document.getElementById("prenume");
    const patronimic = document.getElementById("patronimic");
    const nastere = document.getElementById("data");
    const studii = document.getElementById("studii");
    const facultate = document.getElementById("facultate");
    
    const tableBody = document.getElementById('tableBody');
    
    const addStudentToTable = (student) => {
      const row = document.createElement('tr');
      const cellNume = document.createElement('td');
      const cellPrenume = document.createElement('td');
      const cellPatronimic = document.createElement('td');
      const cellNastere = document.createElement('td');
      const cellStudii = document.createElement('td');
      const cellFacultate = document.createElement('td');
    
      cellNume.textContent = student.nume;
      cellPrenume.textContent = student.prenume;
      cellPatronimic.textContent = student.patronimic;
      cellNastere.textContent = student.nastere;
      cellStudii.textContent = student.studii;
      cellFacultate.textContent = student.facultate;
    
      row.appendChild(cellNume);
      row.appendChild(cellPrenume);
      row.appendChild(cellPatronimic);
      row.appendChild(cellNastere);
      row.appendChild(cellStudii);
      row.appendChild(cellFacultate);
    
      tableBody.appendChild(row);
    };
    
    const addStudent = (student) => {
      students.push(student);
      window.localStorage.setItem('students', JSON.stringify(students));
      addStudentToTable(student);
    };
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const student = {
        nume: nume.value,
        prenume: prenume.value,
        patronimic: patronimic.value,
        nastere: nastere.value,
        studii: studii.value,
        facultate: facultate.value,
      };
      addStudent(student);
      form.reset();
    });
    
    students.forEach((student) => {
      addStudentToTable(student);
    });

    //sort table with name
    const headerNume = document.getElementById('tableHeadNume');

    headerNume.addEventListener('mouseenter', () => {
        headerNume.style.cursor = 'pointer';
    });

    headerNume.addEventListener('dblclick', () => {
    // Sorteaza array-ul students dupa nume
    students.sort((a, b) => a.nume.localeCompare(b.nume));

    // Sterge toate randurile existente din tabel
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }

    // Reconstruieste tabelul cu datele sortate
    students.forEach((student) => {
        const row = document.createElement('tr');
        const cellNume = document.createElement('td');
        const cellPrenume = document.createElement('td');
        const cellPatronimic = document.createElement('td');
        const cellNastere = document.createElement('td');
        const cellStudii = document.createElement('td');
        const cellFacultate = document.createElement('td');

        cellNume.textContent = student.nume;
        cellPrenume.textContent = student.prenume;
        cellPatronimic.textContent = student.patronimic;
        cellNastere.textContent = student.nastere;
        cellStudii.textContent = student.studii;
        cellFacultate.textContent = student.facultate;

        row.appendChild(cellNume);
        row.appendChild(cellPrenume);
        row.appendChild(cellPatronimic);
        row.appendChild(cellNastere);
        row.appendChild(cellStudii);
        row.appendChild(cellFacultate);

        tableBody.appendChild(row);
    });
    });
 
    headerNume.addEventListener('click', () => {
        // Sorteaza array-ul students dupa nume
        students.sort((a, b) => b.nume.localeCompare(a.nume));
    
        // Sterge toate randurile existente din tabel
        while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
        }
    
        // Reconstruieste tabelul cu datele sortate
        students.forEach((student) => {
        const row = document.createElement('tr');
        const cellNume = document.createElement('td');
        const cellPrenume = document.createElement('td');
        const cellPatronimic = document.createElement('td');
        const cellNastere = document.createElement('td');
        const cellStudii = document.createElement('td');
        const cellFacultate = document.createElement('td');
    
        cellNume.textContent = student.nume;
        cellPrenume.textContent = student.prenume;
        cellPatronimic.textContent = student.patronimic;
        cellNastere.textContent = student.nastere;
        cellStudii.textContent = student.studii;
        cellFacultate.textContent = student.facultate;
    
        row.appendChild(cellNume);
        row.appendChild(cellPrenume);
        row.appendChild(cellPatronimic);
        row.appendChild(cellNastere);
        row.appendChild(cellStudii);
        row.appendChild(cellFacultate);
    
        tableBody.appendChild(row);
        });
    });

})();