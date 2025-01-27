let blackScreen = document.getElementById('blackScreen');
let firstImpresionsSection = document.getElementById('firstImpresions');
let sections = document.querySelectorAll('section');

let transtionIsDone = false;
let pendingHref = null;

let linksHeader = document.querySelectorAll('header ul li a');

function blackScreenTransition() {
    blackScreen.style.zIndex = 100;
    blackScreen.style.opacity = 1;

    setTimeout(() => {
        sections.forEach(section => {
            section.classList.toggle('active');
        });

        transtionIsDone = true;
        blackScreen.style.opacity = 0;


        if (pendingHref) {
            window.location.href = pendingHref;
            pendingHref = null;
        }
    }, 500);

    setTimeout(() => {
        blackScreen.style.zIndex = -1;
    }, 1000);
}

linksHeader.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        let targetHref = link.getAttribute('href');

        if (!transtionIsDone) {

            pendingHref = targetHref;
            blackScreenTransition();
        } else {
            window.location.href = targetHref;
        }
    });
});


let knowMoreButton = document.getElementById('linkMoreAboutMe');
knowMoreButton.addEventListener('click', blackScreenTransition);




// --------Dark Mode-----------

let toggleDarkMode = document.getElementById('toggleDarkMode');

let logo = document.getElementById('logoAntonio');

let rightArrow = document.getElementById('rightArrow');
let leftArrow = document.getElementById('leftArrow');

let githubLogo = document.getElementById('githubLogo');
let linkedinLogo = document.getElementById('linkedinLogo');
let downloadLogo = document.getElementById('downloadLogo');

let lightColors = {
    '--backGroundColor': '#d0c8c8',
    '--fontColor': '#151515',
    '--aFontColor': '#151515',
    '--contrastFontColor': '#000000', 
    '--windowsBar':'#2a2a2a'

};


let darkColors = {
    '--backGroundColor': '#151515',
    '--fontColor': '#e3e3e3',
    '--aFontColor': '#F4F6F6',
    '--contrastFontColor': '#FFFFFF',
    '--windowsBar': '#edeaed'
};

function changeDarkMode() {

    let previousSlide = document.querySelector('.previousSliderButton img');
    let nextSlide = document.querySelector('.nextSliderButton img');

    if (toggleDarkMode.checked) {
        for (let key in lightColors) {
            document.documentElement.style.setProperty(key, lightColors[key]);
        }


        document.documentElement.style.setProperty('--glowColor', 'var(--glowColorLightMode)');

        // previousSlide.src = 'assets/proyects/flecha_negra_izquierda_64px.png';
        // nextSlide.src = 'assets/proyects/flecha_negra_derecha_64px.png';

        rightArrow.src = 'assets/firstImpresions/flechaNegraDerecha_64px.png';
        leftArrow.src = 'assets/firstImpresions/flechaNegraIzquierda_64px.png';

        githubLogo.src = 'assets/socialMedia/github_Negro_24px.png';
        linkedinLogo.src = 'assets/socialMedia/linkedin_negra_24px.png';
        downloadLogo.src = 'assets/socialMedia/descargar_Negra_24px.png';

        logo.src = 'assets/logo/logo_lightMode.png';
    } else {
        for (let key in darkColors) {
            document.documentElement.style.setProperty(key, darkColors[key]);
        }


        document.documentElement.style.setProperty('--glowColor', 'var(--glowColorDarkMode)');

        // previousSlide.src = 'assets/proyects/flecha_blanca_izquierda_64px.png';
        // nextSlide.src = 'assets/proyects/flecha_blanca_derecha_64px.png';

        rightArrow.src = 'assets/firstImpresions/flechaBlancaDerecha_64px.png';
        leftArrow.src = 'assets/firstImpresions/flechaBlancaIzquierda_64px.png';

        githubLogo.src = 'assets/socialMedia/github_blanco_24px.png';
        linkedinLogo.src = 'assets/socialMedia/linkedin_blanco_24px.png';
        downloadLogo.src = 'assets/socialMedia/descargar_blanco_24px.png';

        logo.src = 'assets/logo/logo.png';
    }
}

toggleDarkMode.addEventListener('change', changeDarkMode);




const downloadButton = document.querySelectorAll('#linkCv');

downloadButton.forEach(linkButton => {
    linkButton.addEventListener('click', function () {
        const link = document.createElement('a');

        link.href = 'assets/documents/CV_Antonio_Merida.pdf';

        link.download = 'CV_Antonio_Merida.pdf';

        link.click();
    });
});


// // Proyects
// let currentIndex = 0;  // Índice de la slide actual

// // Función para mover las slides
// function moveSlide(direction) {
//     const slides = document.querySelectorAll('.proyect');
//     const totalSlides = slides.length;

//     currentIndex += direction;

//     if (currentIndex >= totalSlides) {
//         currentIndex = 0;  // Si llega al final, vuelve al principio
//     } else if (currentIndex < 0) {
//         currentIndex = totalSlides - 1;  // Si va antes del inicio, va al final
//     }

//     const slider = document.querySelector('.slider');
//     slider.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// // Desplazamiento automático
// setInterval(() => {
//     moveSlide(1);
// }, 3000);  // Cambia de slide cada 3 segundos

