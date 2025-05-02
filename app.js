document.getElementById('attendance-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const attendanceList = document.getElementById('list');
    attendanceList.innerHTML = ''; 

    const students = [
        { id: 's1', name: 'Neeraj Kumar' },
        { id: 's2', name: 'Sahil Kumar' },
        { id: 's3', name: 'MD Waseem' },
        { id: 's4', name: 'Karthik Rajak' },
        { id: 's5', name: 'Sai Kiran' },
        { id: 's6', name: 'Ranvijay Singh' },
        { id: 's7', name: 'Manoj Reddy' },
        { id: 's8', name: 'Eshwar Goud' },
    ];

    students.forEach(student => {
        const radios = document.getElementsByName(student.id);
        const li = document.createElement('li');
        let status = 'Absent'; 
        
        radios.forEach(radio => {
            if (radio.checked) {
                status = radio.value.charAt(0).toUpperCase() + radio.value.slice(1);
            }
        });

        li.textContent = `${student.name} - ${status}`;
     
        if (status === 'Present') {
            li.style.backgroundColor = 'green';
        } else if (status === 'Given') {
            li.style.backgroundColor = 'lightseagreen';
        } else {
            li.style.backgroundColor = 'red';
        }

        attendanceList.appendChild(li);
    });
});
