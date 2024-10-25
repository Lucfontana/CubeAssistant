    // Paso 1: Cargar el contenido de la barra de navegación desde "navbar.html"
    fetch("navbar.html")  // Realiza una petición para obtener el archivo `navbar.html`
        .then(response => response.text()) // Cuando la respuesta llega, la convierte a texto plano
        .then(data => {
            // Inserta el contenido de `navbar.html` en el elemento con id "navbar"
            document.getElementById("navbar").innerHTML = data;

            // Paso 2: Después de cargar el HTML, añadir el evento al menú hamburguesa
            
            // Selecciona el elemento con id "menu-toggle", que es el icono del menú hamburguesa
            const menuToggle = document.getElementById('menu-toggle');
            
            // Selecciona el elemento con id "nav-list", que contiene los elementos de navegación
            const navList = document.getElementById('nav-list');

            // Añade un evento de clic al icono del menú hamburguesa
            menuToggle.addEventListener('click', () => {
                // Alterna la clase "active" en el menú de navegación
                // Esto permite que el menú hamburguesa se muestre u oculte al hacer clic
                navList.classList.toggle('active');
            });
        });
