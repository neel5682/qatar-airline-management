fetch('http://localhost:3000/passengers')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('passengers');
        data.forEach(passenger => {
            const div = document.createElement('div');
            div.innerHTML = `<strong>${passenger.first_name} ${passenger.last_name}</strong>`;
            container.appendChild(div);
        });
    })
    .catch(error => console.error('Error fetching passengers:', error));
