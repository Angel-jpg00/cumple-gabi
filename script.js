const nameInput = document.getElementById("nameInput");
const unlockButton = document.getElementById("unlockButton");
const loginMessage = document.getElementById("loginMessage");

const loginScreen = document.getElementById("loginScreen");
const verificationScreen = document.getElementById("verificationScreen");
const confirmedScreen = document.getElementById("confirmedScreen");

const verificationText = document.getElementById("verificationText");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

const introScreen = document.getElementById("introScreen");
const instructionsScreen = document.getElementById("instructionsScreen");

const instructionsButton = document.getElementById("instructionsButton");

const instructionsTitle = document.getElementById("instructionsTitle");
const instructionsDescription = document.getElementById("instructionsDescription");

const instructionsProgressBar = document.getElementById("instructionsProgressBar");
const instructionsProgressText = document.getElementById("instructionsProgressText");

const continueButton = document.getElementById("continueButton");

const escapeScreen = document.getElementById("escapeScreen");

const escapeArea = document.getElementById("escapeArea");
const escapeButton = document.getElementById("escapeButton");

const escapeTitle = document.getElementById("escapeTitle");
const escapeDescription = document.getElementById("escapeDescription");

const boxesScreen = document.getElementById("boxesScreen");

const boxesTitle = document.getElementById("boxesTitle");
const boxesDescription = document.getElementById("boxesDescription");

const giftBoxes = document.querySelectorAll(".gift-box");

const boxMessage = document.getElementById("boxMessage");
const nextBoxButton = document.getElementById("nextBoxButton");

const warningScreen = document.getElementById("warningScreen");

const warningTitle = document.getElementById("warningTitle");
const warningDescription = document.getElementById("warningDescription");

const choiceArea = document.getElementById("choiceArea");

const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");

const revealScreen = document.getElementById("revealScreen");

const suspenseContent = document.getElementById("suspenseContent");
const suspenseText = document.getElementById("suspenseText");

const birthdayContent = document.getElementById("birthdayContent");
const celebrateButton = document.getElementById("celebrateButton");

const cakeScreen = document.getElementById("cakeScreen");

const cakeTitle = document.getElementById("cakeTitle");
const cakeDescription = document.getElementById("cakeDescription");

const candles = document.querySelectorAll(".candle");

const confettiContainer = document.getElementById("confettiContainer");

const letterScreen = document.getElementById("letterScreen");
const letterIntro = document.getElementById("letterIntro");
const envelopeButton = document.getElementById("envelopeButton");
const birthdayLetter = document.getElementById("birthdayLetter");

const finalSurpriseButton =document.getElementById("finalSurpriseButton");


let failedAttempts = 0;
let escapeAttempts = 0;
let escapeFinished = false;
let correctBox = 0;
let boxGameFinished = false;
let noAttempts = 0;
let warningFinished = false;
let candlesOff = 0;

//cambio de pantalla
function showScreen(screen) {

    document.querySelectorAll(".screen").forEach(currentScreen => {
        currentScreen.classList.remove("active");
    });

    screen.classList.add("active");
}


//desbloquear
function unlockContent() {

    const name = nameInput.value.trim().toLowerCase();

    // Campo vacío
    if (name === "") {
        loginMessage.textContent = "🤨 Primero necesito saber quién eres...";
        return;
    }

    //nombre correcto
    if (name === "gabi") {

        loginMessage.textContent = "";

        showScreen(verificationScreen);

        startVerification();

        return;
    }


    
    failedAttempts++;//nombre incorrecto

    if (failedAttempts === 1) {
        loginMessage.textContent =
            "🤨 Mmm... creo que tú no eres la persona que estoy buscando.";
    }

    else if (failedAttempts === 2) {
        loginMessage.textContent =
            "Pista actualizada: empieza con G y termina con 'abi' 😭";
    }

    else {
        loginMessage.textContent =
            "JAJAJA 😭 literalmente solo tienes que escribir tu nombre.";
    }

}


//verificacion

function startVerification() {

    let progress = 0;

    progressBar.style.width = "0%";
    progressText.textContent = "0%";

    const verification = setInterval(() => {

        progress += Math.floor(Math.random() * 8) + 3;

        if (progress >= 100) {

            progress = 100;

            clearInterval(verification);

            progressBar.style.width = progress + "%";
            progressText.textContent = progress + "%";

            verificationText.textContent =
                "Identidad localizada: Gabi 💙";

           setTimeout(() => {
            showScreen(confirmedScreen);

            // Después de mostrar la confirmación,
            // esperamos antes de continuar.
            setTimeout(() => {

            showScreen(introScreen);

                }, 2500);

            }, 1200);

        }

        else {

            progressBar.style.width = progress + "%";
            progressText.textContent = progress + "%";

        }

    }, 180);
}

// ========================================
// BOTÓN QUE HUYE
// ========================================

function startEscapeGame() {

    escapeAttempts = 0;
    escapeFinished = false;

    escapeTitle.textContent =
        "Solo tienes que hacer clic en este botón.";

    escapeDescription.textContent =
        "Fácil, ¿no? 😌";

    escapeArea.classList.remove("final-mode");

    // Regresamos el botón al centro
    escapeButton.style.left = "50%";
    escapeButton.style.top = "50%";

    showScreen(escapeScreen);
}


// El botón cambia de posición
function moveEscapeButton() {

    if (escapeFinished) {
        return;
    }

    escapeAttempts++;

    const areaWidth = escapeArea.clientWidth;
    const areaHeight = escapeArea.clientHeight;

    const buttonWidth = escapeButton.offsetWidth;
    const buttonHeight = escapeButton.offsetHeight;

    // Calculamos límites seguros
    const maxX = areaWidth - buttonWidth - 10;
    const maxY = areaHeight - buttonHeight - 10;

    // Posición aleatoria
    const randomX = Math.random() * maxX + 5;
    const randomY = Math.random() * maxY + 5;

    // Movemos el botón
    escapeButton.style.left = randomX + "px";
    escapeButton.style.top = randomY + "px";

    // Después de varios intentos
    if (escapeAttempts >= 5) {

        escapeFinished = true;

        setTimeout(() => {

            escapeTitle.textContent = "JAJAJAJA 😭";
            escapeDescription.innerHTML =
                "Ok, ok...<br>Ya no te voy a molestar.<br><strong>Por ahora 😌</strong>";

            escapeButton.textContent = "AHORA SÍ, DA CLICK 😌";

            escapeArea.classList.add("final-mode");

        }, 500);
    }
}


// ========================================
// PRUEBA DE LA ADVERTENCIA
// ========================================

function startWarningGame() {

    noAttempts = 0;
    warningFinished = false;

    warningTitle.textContent ="Estás a punto de descubrir algo...";

    warningDescription.textContent ="Antes de continuar, debes saber 3 cosas:";

    // Reiniciamos los botones
    choiceArea.classList.remove("no-escape-mode");

    noButton.style.left = "";
    noButton.style.top = "";
    noButton.style.position = "";

    noButton.style.transform = "";
    yesButton.style.transform = "";

    noButton.textContent = "NO 😨";
    yesButton.textContent = "SÍ, CONTINUAR 😌";

    showScreen(warningScreen);
}


// ========================================
// HACER QUE EL BOTÓN NO HUYA
// ========================================

function moveNoButton() {

    if (warningFinished) {
        return;
    }

    noAttempts++;

    // Activamos modo de escape
    choiceArea.classList.add("no-escape-mode");

    const areaWidth = choiceArea.clientWidth;
    const areaHeight = choiceArea.clientHeight;

    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const maxX = Math.max(10, areaWidth - buttonWidth - 10);
    const maxY = Math.max(10, areaHeight - buttonHeight - 10);

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";


    // Después de varios intentos, revelamos la verdad 😂
    if (noAttempts >= 4) {

        warningFinished = true;

        setTimeout(() => {

            warningTitle.textContent = "Buena decisión 😌";

            warningDescription.innerHTML =
                "Aunque realmente no tenías opción. 😭";

            choiceArea.style.display = "none";

            setTimeout(() => {

                // Aquí conectaremos la gran revelación 🎉
                startBirthdayReveal();

            }, 1600);

        }, 500);
    }
}


// ========================================
// GRAN REVELACIÓN DE CUMPLEAÑOS
// ========================================

function startBirthdayReveal() {

    showScreen(revealScreen);

    // Reiniciamos estados
    revealScreen.classList.remove("celebration-active", "explode");

    suspenseContent.style.opacity = "1";
    suspenseContent.style.transform = "scale(1)";

    suspenseText.textContent = "";


    // Primer mensaje
    setTimeout(() => {

        suspenseText.textContent = "Espera...";

    }, 700);


    // Segundo mensaje
    setTimeout(() => {

        suspenseText.textContent =
            "¿Pensaste que todo esto era por nada?";

    }, 2500);


    // Tercer mensaje
    setTimeout(() => {

        suspenseText.textContent = "Pues no 😌";

    }, 5000);


    // Desaparece el suspenso
    setTimeout(() => {

        suspenseContent.style.opacity = "0";
        suspenseContent.style.transform = "scale(1.1)";

    }, 6800);


    // 💥 GRAN EXPLOSIÓN
    setTimeout(() => {

    revealScreen.classList.add("explode");
    revealScreen.classList.add("celebration-active");

    // 🎉 LANZAMOS EL CONFETI
    launchConfetti(150);

    }, 7500);

}

// ========================================
// CONFETI
// ========================================

function launchConfetti(amount = 120) {

    const colors = [
        "#1976ff",
        "#58a6ff",
        "#ffffff",
        "#8bc5ff",
        "#4f46e5",
        "#93c5fd"
    ];

    for (let i = 0; i < amount; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add("confetti-piece");


        // Color aleatorio
        confetti.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];


        // Posición horizontal aleatoria
        confetti.style.left =
            Math.random() * 100 + "vw";


        // Tamaño aleatorio
        const size =
            Math.random() * 8 + 6;

        confetti.style.width =
            size + "px";

        confetti.style.height =
            size * 1.5 + "px";


        // Duración diferente
        const duration =
            Math.random() * 2 + 2.5;

        confetti.style.animationDuration =
            duration + "s";


        // Retraso aleatorio
        confetti.style.animationDelay =
            Math.random() * 0.8 + "s";


        confettiContainer.appendChild(confetti);


        // Eliminamos el elemento al terminar
        setTimeout(() => {

            confetti.remove();

        }, (duration + 1) * 1000);

    }

}


// ========================================
// PASTEL Y VELAS
// ========================================

function startCakeGame() {
    candlesOff = 0;
    // Reiniciamos las velas
    candles.forEach(candle => {
        candle.classList.remove("off");
    });

    cakeTitle.textContent = "Pero espera...";
    cakeDescription.textContent =
        "No puedes terminar una celebración de cumpleaños sin apagar las velas 😌";

    showScreen(cakeScreen);
    finalSurpriseButton.hidden = true;
}


// Apagar vela
candles.forEach(candle => {
    candle.addEventListener("click", () => {
        if (candle.classList.contains("off")) {
            return;
        }

        candle.classList.add("off");
        candlesOff++;
        // Cuando todas estén apagadas
        if (candlesOff === candles.length) {
            cakeTitle.textContent ="¡PIDE UN DESEO! ✨";
            cakeDescription.innerHTML = "Ok... ahora oficialmente puedes celebrar 😌💙";
            launchConfetti(80);
            finalSurpriseButton.hidden = false;
        }
    });

});

    // Detectar cuando el mouse se acerca
    escapeButton.addEventListener("mouseenter", moveEscapeButton);
    // Detectar toque en celular
    escapeButton.addEventListener("touchstart", event => {
        if (!escapeFinished) {
            event.preventDefault();
            moveEscapeButton();
        }
    });


    //Eventos
    unlockButton.addEventListener("click", unlockContent);
    // Permite presionar ENTER
    nameInput.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            unlockContent();
        }
    });

// ========================================
// EVENTOS DE LAS CAJAS
// ========================================

    giftBoxes.forEach(box => {
        box.addEventListener("click", () => {
            openBox(box);
        });
        nextBoxButton.addEventListener("click", () => {
        startWarningGame();
        });
    });

// ========================================
// PANTALLA DE INSTRUCCIONES
// ========================================

function startInstructions() {

    showScreen(instructionsScreen);

    let progress = 0;

    // Reiniciamos la pantalla por si fuera necesario
    instructionsProgressBar.style.width = "0%";
    instructionsProgressText.textContent = "0%";

    instructionsTitle.textContent = "Cargando instrucciones...";
    instructionsDescription.textContent ="Por favor espera un momento 😌";
    continueButton.classList.remove("show");

    const loading = setInterval(() => {

        progress += Math.floor(Math.random() * 7) + 3;
        if (progress >= 72) {
            progress = 72;

            clearInterval(loading);

            instructionsProgressBar.style.width = progress + "%";
            instructionsProgressText.textContent = progress + "%";

            // Pequeña pausa antes del error
            setTimeout(() => {

                instructionsTitle.textContent = "❌ Error";
                instructionsDescription.textContent =
                    "Se encontraron demasiadas ganas de molestar a la cumpleañera. 😭";

                continueButton.classList.add("show");

            }, 600);

            return;
        }

        instructionsProgressBar.style.width = progress + "%";
        instructionsProgressText.textContent = progress + "%";

    }, 180);
}

// ========================================
// JUEGO DE LAS CAJAS
// ========================================

function startBoxesGame() {

    boxGameFinished = false;
    boxesTitle.textContent = "Bien...";
    boxesDescription.innerHTML = `
        Sobreviviste a la primera prueba.
        <br><br>
        Honestamente, no esperaba menos de ti 😌
        <br><br>
        Ahora elige una caja.
        <br>
        <strong>Solo una contiene lo que buscas 👀</strong>
    `;

    boxMessage.textContent = "";
    nextBoxButton.classList.remove("show");
    // Reiniciamos todas las cajas
    giftBoxes.forEach(box => {
        box.disabled = false;
        box.classList.remove("opened", "wrong", "correct");
    });


    // Elegimos una caja correcta aleatoriamente
    correctBox = Math.floor(Math.random() * 3) + 1;
    showScreen(boxesScreen);
}


// ========================================
// ABRIR UNA CAJA
// ========================================

function openBox(selectedBox) {

    // Si ya encontró la correcta, no hacemos nada
    if (boxGameFinished) {
        return;
    }
    const boxNumber = Number(selectedBox.dataset.box);

    // Si ya abrió esta caja, no hacer nada
    if (selectedBox.classList.contains("opened")) {
        return;
    }
    selectedBox.classList.add("opened");

    // ========================================
    // CAJA CORRECTA
    // ========================================

    if (boxNumber === correctBox) {
        boxGameFinished = true;
        selectedBox.classList.add("correct");
        // Deshabilitamos las demás cajas
        giftBoxes.forEach(box => {

            if (box !== selectedBox) {
                box.disabled = true;
            }

        });
        boxMessage.innerHTML = `
            ✨ <strong>Hmmmm...</strong><br>
            Parece que encontraste algo importante 👀
        `;

        nextBoxButton.classList.add("show");
        return;
    }


    // ========================================
    // CAJAS INCORRECTAS
    // ========================================

    selectedBox.classList.add("wrong");
    // Primera caja incorrecta
    const wrongMessages = [

        `
        💨 <strong>PFFF...</strong><br>
        Aquí solo había aire.<br>
        Qué decepción 😭
        `,

        `
        🦆 <strong>¡Felicidades!</strong><br>
        Encontraste un pato.<br>
        No preguntes por qué.
        `
    ];


    // Elegimos mensaje según cuántas cajas incorrectas haya abierto
    const openedWrongBoxes =
        document.querySelectorAll(".gift-box.wrong").length;
    boxMessage.innerHTML =
        wrongMessages[(openedWrongBoxes - 1) % wrongMessages.length];

}

function startLetterGame() {
    constellationFound = false;

    clearTimeout(constellationRevealTimer);

    constellationIntro.innerHTML = originalConstellationIntro;

    constellationIntro.hidden = false;
    letterIntro.hidden = true;
    birthdayLetter.hidden = true;

    envelopeButton.classList.remove("opening");
    envelopeButton.disabled = false;

    letterIntro.classList.remove("magic-appear");

    letterIntro.querySelectorAll(".magic-sparkle").forEach(
        sparkle => sparkle.remove()
    );

    showScreen(letterScreen);
    letterScreen.scrollTop = 0;

    startStarSky();
}

envelopeButton.addEventListener("click",()=>{
    if (envelopeButton.disabled) return;

    envelopeButton.disabled = true;
    envelopeButton.classList.add("opening");

    setTimeout(() => {
        letterIntro.hidden = true;
        birthdayLetter.hidden = false;

        // Mostrar la carta desde el principio
        letterScreen.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }, 1200);
});

// ========================================
// EVENTOS DE LA ADVERTENCIA
// ========================================

// El NO huye con el mouse
noButton.addEventListener("mouseenter", moveNoButton);
// En celular también debe huir
noButton.addEventListener("touchstart", event => {

    if (!warningFinished) {
        event.preventDefault();
        moveNoButton();

    }

});


// El SÍ permite continuar inmediatamente
yesButton.addEventListener("click", () => {

    if (warningFinished) {
        return;
    }

    warningFinished = true;
    warningTitle.textContent = "Buena decisión 😌";
    warningDescription.innerHTML =
        "Aunque realmente no tenías opción. 😭";

    choiceArea.style.display = "none";
    setTimeout(() => {
        // Temporal: después conectaremos la revelación
        startBirthdayReveal();
    }, 1600);

});

// Ir a las instrucciones
instructionsButton.addEventListener("click", startInstructions);
// Continuar después del error
continueButton.addEventListener("click", () => {
    startEscapeGame();
});

escapeButton.addEventListener("click", () => {

    if (!escapeFinished) {
        return;
    }

    escapeTitle.textContent = "¡Por fin! 😭";
    escapeDescription.innerHTML =
        "Te tomó un ratito... pero sobreviviste a la primera prueba 😌";
    escapeArea.classList.add("shake");

    setTimeout(() => {
        escapeArea.classList.remove("shake");
        // Pasamos a la segunda prueba 🎁
        startBoxesGame();

    }, 1800);

});


celebrateButton.addEventListener("click", () => {
    startCakeGame();
});

finalSurpriseButton.addEventListener("click", startLetterGame);

/* =====================================
   CIELO ESTRELLADO INTERACTIVO
===================================== */

const starCanvas = document.getElementById("starCanvas");
const starCtx = starCanvas.getContext("2d");

let stars = [];
let starAnimationId = null;
let lastShootingStar = 0;

let gabiConstellation = [];

const constellationIntro = document.getElementById("constellationIntro");
const originalConstellationIntro = constellationIntro.innerHTML;

let constellationFound = false;
let constellationRevealTimer = null;

const gabiGShape = [
    [0.85, 0.12],
    [0.60, 0.02],
    [0.30, 0.08],
    [0.08, 0.30],
    [0.02, 0.58],
    [0.20, 0.85],
    [0.50, 0.98],
    [0.82, 0.82],
    [0.82, 0.56],
    [0.55, 0.56]
];

const gabiExtraShapes = {
    A: [
        [0.05, 0.95],
        [0.50, 0.05],
        [0.95, 0.95],
        [0.75, 0.55],
        [0.25, 0.55]
    ],

    B: [
        [0.05, 0.05],
        [0.05, 0.95],
        [0.05, 0.50],
        [0.70, 0.50],
        [0.95, 0.30],
        [0.70, 0.05],
        [0.05, 0.05],
        [0.70, 0.50],
        [0.95, 0.75],
        [0.70, 0.95],
        [0.05, 0.95]
    ],

    I: [
        [0.05, 0.05],
        [0.95, 0.05],
        [0.50, 0.05],
        [0.50, 0.95],
        [0.05, 0.95],
        [0.95, 0.95]
    ]
};

let gabiExtraConstellations = [];

const starMouse = {
    x: -1000,
    y: -1000
};

function resizeStarCanvas() {

    const rect = letterScreen.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    starCanvas.width = Math.round(rect.width * dpr);
    starCanvas.height = Math.round(rect.height * dpr);

    starCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const width = rect.width;
    const height = rect.height;

    stars = Array.from({ length: 95 }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.6 + 0.5,
        phase: Math.random() * Math.PI * 2,
        constellation: i < 18
    }));

    // Constelación especial de Gabi
    const gSize = Math.min(width * 0.32, height * 0.42, 180);

    const gStartX = width * 0.78 - gSize * 0.5;
    const gStartY = height * 0.55 - gSize * 0.5;

    gabiConstellation = gabiGShape.map(([x, y]) => ({
        x: gStartX + x * gSize,
        y: gStartY + y * gSize,
        radius: 1.8
    }));


// Constelaciones adicionales: A, B, I
const extraSize = Math.min(width * 0.20, height * 0.28, 105);

const extraPositions = [
    { letter: "A", x: 0.18, y: 0.38 },
    { letter: "B", x: 0.48, y: 0.72 },
    { letter: "I", x: 0.84, y: 0.22 }
];

gabiExtraConstellations = extraPositions.map(item => {
    const shape = gabiExtraShapes[item.letter];

    return {
        letter: item.letter,
        stars: shape.map(([x, y]) => ({
            x: width * item.x - extraSize / 2 + x * extraSize,
            y: height * item.y - extraSize / 2 + y * extraSize,
            radius: 1.8
        }))
    };
});
}


function animateStarSky(time) {
    const width = starCanvas.clientWidth;
    const height = starCanvas.clientHeight;

    starCtx.clearRect(0, 0, width, height);

    // Dibujar conexiones entre estrellas cercanas
    const constellationStars = stars.filter(
        star => star.constellation
    );

    constellationStars.forEach((star, i) => {
        constellationStars.slice(i + 1).forEach(other => {
            const distance = Math.hypot(
                star.x - other.x,
                star.y - other.y
            );

            if (distance < 110) {
                starCtx.beginPath();
                starCtx.moveTo(star.x, star.y);
                starCtx.lineTo(other.x, other.y);

                starCtx.strokeStyle = "rgba(104, 180, 255, 0.2)";
                starCtx.lineWidth = 0.7;
                starCtx.stroke();
            }
        });
    });

    // Dibujar estrellas
    stars.forEach(star => {
        const distance = Math.hypot(
            starMouse.x - star.x,
            starMouse.y - star.y
        );

        const interaction = Math.max(0, 1 - distance / 90);

        const brightness =
            0.45 +
            0.4 * Math.sin(time * 0.0017 + star.phase) ** 2;

        starCtx.beginPath();
        starCtx.arc(
            star.x,
            star.y,
            star.radius + interaction * 2.5,
            0,
            Math.PI * 2
        );

        starCtx.fillStyle =
            `rgba(210, 234, 255, ${Math.min(1, brightness + interaction * 0.5)})`;

        starCtx.shadowColor = "#73baff";
        starCtx.shadowBlur = 4 + interaction * 18;
        starCtx.fill();

        starCtx.shadowBlur = 0;
    });

    // =====================================
    // CONSTELACIÓN SECRETA DE GABI
    // =====================================

    if (gabiConstellation.length > 0) {
        const gCenterX =
            gabiConstellation.reduce((sum, star) => sum + star.x, 0)/ gabiConstellation.length;

        const gCenterY =
            gabiConstellation.reduce((sum, star) => sum + star.y, 0) / gabiConstellation.length;

        const gDistance = Math.hypot(
            starMouse.x - gCenterX,
            starMouse.y - gCenterY
        );

        const gGlow = Math.max(0, 1 - gDistance / 130);

        // Dibujar las líneas de la letra G
        starCtx.beginPath();

        gabiConstellation.forEach((star, index) => {
            if (index === 0) {
                starCtx.moveTo(star.x, star.y);
            } else {
                starCtx.lineTo(star.x, star.y);
            }
        });

        starCtx.strokeStyle =
            `rgba(100, 190, 255, ${0.35 + gGlow * 0.6})`;

        starCtx.lineWidth = 0.8 + gGlow * 1.8;
        starCtx.shadowColor = "#60a5fa";
        starCtx.shadowBlur = gGlow * 16;
        starCtx.stroke();

        starCtx.shadowBlur = 0;

        // Dibujar las estrellas de la letra G
        gabiConstellation.forEach(star => {

            const twinkle =
                0.5 + 0.3 * Math.sin(time * 0.002 + star.x);

            starCtx.beginPath();

            starCtx.arc(
                star.x,
                star.y,
                star.radius + gGlow * 2.5,
                0,
                Math.PI * 2
            );

            starCtx.fillStyle =
                `rgba(220, 240, 255, ${Math.min(1, twinkle + gGlow)})`;

            starCtx.shadowColor = "#93c5fd";
            starCtx.shadowBlur = 5 + gGlow * 22;
            starCtx.fill();

            starCtx.shadowBlur = 0;
        });
    }

    // =====================================
// CONSTELACIONES ADICIONALES: A, B, I
// =====================================

gabiExtraConstellations.forEach(constellation => {

    const points = constellation.stars;

    if (points.length === 0) return;

    // Líneas entre estrellas
    starCtx.beginPath();

    points.forEach((star, index) => {
        if (index === 0) {
            starCtx.moveTo(star.x, star.y);
        } else {
            starCtx.lineTo(star.x, star.y);
        }
    });

    starCtx.strokeStyle = "rgba(100, 190, 255, 0.35)";
    starCtx.lineWidth = 0.8;
    starCtx.stroke();

    // Estrellas de cada constelación
    points.forEach(star => {

        const distance = Math.hypot(
            starMouse.x - star.x,
            starMouse.y - star.y
        );

        const glow = Math.max(0, 1 - distance / 100);

        const twinkle =
            0.5 + 0.3 * Math.sin(time * 0.002 + star.x);

        starCtx.beginPath();

        starCtx.arc(
            star.x,
            star.y,
            star.radius + glow * 2,
            0,
            Math.PI * 2
        );

        starCtx.fillStyle =
            `rgba(220, 240, 255, ${Math.min(1, twinkle + glow)})`;

        starCtx.shadowColor = "#93c5fd";
        starCtx.shadowBlur = 5 + glow * 18;
        starCtx.fill();

        starCtx.shadowBlur = 0;
    });
});

    // Estrella fugaz ocasional
    if (time - lastShootingStar > 5500) {
        lastShootingStar = time;
    }

    const age = time - lastShootingStar;

    if (age >= 0 && age < 850) {
        const progress = age / 850;
        const x = width * (0.08 + 0.7 * progress);
        const y = height * (0.08 + 0.38 * progress);

        const gradient = starCtx.createLinearGradient(
            x - 75, y - 40, x, y
        );

        gradient.addColorStop(0, "rgba(135, 200, 255, 0)");
        gradient.addColorStop(1, "rgba(200, 235, 255, 0.85)");

        starCtx.beginPath();
        starCtx.moveTo(x - 75, y - 40);
        starCtx.lineTo(x, y);
        starCtx.strokeStyle = gradient;
        starCtx.lineWidth = 2;
        starCtx.stroke();
    }

    starAnimationId = requestAnimationFrame(animateStarSky);
}

function findGabiConstellation(event) {

    if (constellationFound || !constellationIntro || constellationIntro.hidden) {
        return;
    }

    const rect = starCanvas.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Detectar un toque cerca de cualquier estrella de la G
    const touchedG = gabiConstellation.some(star => {
        return Math.hypot(x - star.x, y - star.y) < 30;
    });

    if (!touchedG) return;

    constellationFound = true;

    constellationIntro.innerHTML = `
        <span class="constellation-label">CONSTELACIÓN DESCUBIERTA ✨</span>

        <h2>¡La encontraste, Gabi! 💙</h2>

        <p>
            Parece que encontraste algo
            que estaba esperando por ti... 😇
        </p>
    `;

    constellationRevealTimer = setTimeout(() => {
        constellationIntro.hidden = true;
        letterIntro.hidden = false;

        // Reiniciar la animación
        letterIntro.classList.remove("magic-appear");
        void letterIntro.offsetWidth;
        letterIntro.classList.add("magic-appear");

        // Crear destellos alrededor del sobre
        createEnvelopeSparkles();

        letterScreen.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 2200);
}

letterScreen.addEventListener("pointerdown", findGabiConstellation);


// Interacción con mouse y pantalla táctil
starCanvas.parentElement.addEventListener("pointermove", event => {
    const rect = starCanvas.getBoundingClientRect();

    starMouse.x = event.clientX - rect.left;
    starMouse.y = event.clientY - rect.top;
});

starCanvas.parentElement.addEventListener("pointerleave", () => {
    starMouse.x = -1000;
    starMouse.y = -1000;
});

starCanvas.parentElement.addEventListener("pointerdown", event => {
    const rect = starCanvas.getBoundingClientRect();

    starMouse.x = event.clientX - rect.left;
    starMouse.y = event.clientY - rect.top;
});

window.addEventListener("resize", resizeStarCanvas);

function startStarSky() {
    resizeStarCanvas();

    if (starAnimationId !== null) {
        cancelAnimationFrame(starAnimationId);
    }

    starAnimationId = requestAnimationFrame(animateStarSky);
}

function createEnvelopeSparkles() {

    // Eliminar partículas anteriores
    letterIntro.querySelectorAll(".magic-sparkle").forEach(
        sparkle => sparkle.remove()
    );

    for (let i = 0; i < 24; i++) {

        const sparkle = document.createElement("span");

        sparkle.className = "magic-sparkle";

        const angle = Math.random() * Math.PI * 2;
        const distance = 60 + Math.random() * 140;

        sparkle.style.left = "50%";
        sparkle.style.top = "50%";

        sparkle.style.setProperty(
            "--dx",
            `${Math.cos(angle) * distance}px`
        );

        sparkle.style.setProperty(
            "--dy",
            `${Math.sin(angle) * distance}px`
        );

        sparkle.style.animationDelay =
            `${Math.random() * 0.5}s`;

        letterIntro.appendChild(sparkle);

        sparkle.addEventListener("animationend", () => {
            sparkle.remove();
        }, { once: true });
    }
}
