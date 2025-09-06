fetch('/project1/header/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
        const script = document.createElement('script');
        script.src = '/project1/header/header.js';
        document.body.appendChild(script);
    })
    .catch(error => console.error('Error loading header:', error));