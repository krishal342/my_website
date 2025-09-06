fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
        const script = document.createElement('script');
        script.src = 'header.js';
        document.body.appendChild(script);
    })
    .catch(error => console.error('Error loading header:', error));