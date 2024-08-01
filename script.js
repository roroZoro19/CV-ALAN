let menuVisible = false;
let idioma = 'es'; // Idioma inicial

// Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    // oculto el menu una vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

// Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
};

const textos = {
    es: {
        titulo: 'ALAN RENDÓN',
        subtitulo: 'TSU en  Desarrollo y Gestion de Software Multiplataforma',
        sobremiTitulo: 'Sobre Mí',
        sobremiTexto: 'Hola, soy ALAN RENDÓN. Soy un estudiante de 21 años de edad que cursa Ingeniería en Desarrollo y Gestión de Software. Soy alguien comprometido y responsable que está dispuesto a fortalecer y aplicar los conocimientos que he adquirido durante estos años. A lo largo de mi formación académica he trabajado en el área de soporte técnico, también he diseñado aplicaciones web y he hecho propuestas de bases de datos, todo esto académicamente y me gustaría aplicarlo en un ambiente laboral real.',
        skillsTitulo: 'HABILIDADES',
        portfolioTitulo: 'PROYECTOS',
        proyecto1Titulo: 'Propuesta de Base de Datos',
        proyecto1Texto: 'Diseño y desarrollo de una base de datos para la gestión de operaciones bancarias, incluyendo la creación de tablas, y sus relaciones.',
        proyecto2Titulo: 'Creación de Inventario: Mesón de don Nacho',
        proyecto2Texto: 'Se creó un sistema de inventario para un restaurante, que fue realizado en equipo, utilizando PHP, HTML',
        proyecto2Texto: 'Se creó un sistema de inventario para un restaurante, que fue realizado en equipo, utilizando PHP, HTML, CSS, JavaScript y MySQL.',
        proyecto3Titulo: 'Página de Citas Médicas',
        proyecto3Texto: 'Se desarrolló una página de citas médicas, utilizando el framework Laravel para su desarrollo, esta app fue desarrollada en equipo.',
        proyecto4Titulo: 'Diseño Creativo',
        proyecto4Texto: 'Fotografía',
        contactoTitulo: 'CONTACTO',
        contactoDireccion: 'Hacienda del Tamarindo Rosario Sinaloa 88, Calle San German',
        contactoTelefono: 'Llámanos: +52 6941104092',
        contactoEmail: 'Email: alanrendon814@gmail.com',
        botonIdioma: 'Cambiar a Inglés'
    },
    en: {
        titulo: 'ALAN RENDÓN',
        subtitulo: 'Associate in Development and Management of Multiplatform Software',
        sobremiTitulo: 'About Me',
        sobremiTexto: 'Hello, I am ALAN RENDÓN. I am a 21-year-old student studying Engineering in Development and Management of Software. I am a committed and responsible person who is willing to strengthen and apply the knowledge I have acquired over these years. Throughout my academic training, I have worked in technical support, designed web applications, and made database proposals, all academically, and I would like to apply it in a real work environment.',
        skillsTitulo: 'SKILLS',
        portfolioTitulo: 'PROJECTS',
        proyecto1Titulo: 'Database Proposal',
        proyecto1Texto: 'Design and development of a database for managing banking operations, including the creation of tables and their relationships.',
        proyecto2Titulo: 'Inventory Creation: Mesón de don Nacho',
        proyecto2Texto: 'An inventory system was created for a restaurant, which was done in a team, using PHP, HTML, CSS, JavaScript, and MySQL.',
        proyecto3Titulo: 'Medical Appointment Page',
        proyecto3Texto: 'A medical appointment page was developed using the Laravel framework; this app was developed in a team.',
        proyecto4Titulo: 'Creative Design',
        proyecto4Texto: 'Photography',
        contactoTitulo: 'CONTACT',
        contactoDireccion: 'Hacienda del Tamarindo Rosario Sinaloa 88, Calle San German',
        contactoTelefono: 'Call us: +52 6941104092',
        contactoEmail: 'Email: alanrendon814@gmail.com',
        botonIdioma: 'Switch to Spanish'
    }
};

// Asegúrate de que el DOM esté completamente cargado antes de agregar el evento
document.addEventListener('DOMContentLoaded', function() {
    const botonIdioma = document.getElementById('botonIdiomna');
    botonIdioma.addEventListener('click', cambiarIdioma);
    actualizarTexto(); // Actualiza los textos al cargar la página
});

function cambiarIdioma() {
    idioma = idioma === 'es' ? 'en' : 'es'; // Cambia el idioma
    actualizarTexto();
    actualizarBotonIdioma();
}

function actualizarTexto() {
    document.getElementById('titulo').innerText = textos[idioma].titulo;
    document.getElementById('subtitulo').innerText = textos[idioma].subtitulo;
    document.getElementById('sobremi-titulo').innerText = textos[idioma].sobremiTitulo;
    document.getElementById('sobremi-texto').innerText = textos[idioma].sobremiTexto;
    document.getElementById('skills-titulo').innerText = textos[idioma].skillsTitulo;
    document.getElementById('portfolio-titulo').innerText = textos[idioma].portfolioTitulo;
    document.getElementById('proyecto1-titulo').innerText = textos[idioma].proyecto1Titulo;
    document.getElementById('proyecto1-texto').innerText = textos[idioma].proyecto1Texto;
    document.getElementById('proyecto2-titulo').innerText = textos[idioma].proyecto2Titulo;
    document.getElementById('proyecto2-texto').innerText = textos[idioma].proyecto2Texto;
    document.getElementById('proyecto3-titulo').innerText = textos[idioma].proyecto3Titulo;
    document.getElementById('proyecto3-texto').innerText = textos[idioma].proyecto3Texto;
    document.getElementById('proyecto4-titulo').innerText = textos[idioma].proyecto4Titulo;
    document.getElementById('proyecto4-texto').innerText = textos[idioma].proyecto4Texto;
    document.getElementById('contacto-titulo').innerText = textos[idioma].contactoTitulo;
    document.getElementById('contacto-direccion').innerText = textos[idioma].contactoDireccion;
    document.getElementById('contacto-telefono').innerText = textos[idioma].contactoTelefono;
    document.getElementById('contacto-email').innerText = textos[idioma].contactoEmail;
}

function actualizarBotonIdioma() {
    const botonIdioma = document.getElementById('botonIdiomna');
    botonIdioma.textContent = textos[idioma].botonIdioma;
}