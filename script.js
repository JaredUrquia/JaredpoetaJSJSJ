const poems = [
    "Tus ojos son dos luceros,\nque iluminan mi oscura noche,\ny en cada parpadeo,\nmi corazón late más fuerte.",
    "Eres la melodía que susurra el viento,\nla brisa suave que acaricia mi piel,\ny en cada beso que me regalas,\nencuentro un mundo de miel.",
    "En el jardín de tus abrazos,\nlas flores florecen sin cesar,\ny en el susurro de tu voz,\nencuentro mi hogar.",
    "Si el amor fuera un poema,\nserías cada verso,\ny en cada rima que recito,\nte llevo siempre en mi universo."
];

document.getElementById('generate').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * poems.length);
    document.getElementById('poem').innerText = poems[randomIndex];
});