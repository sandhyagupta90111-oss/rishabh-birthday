function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "💛";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";

    heart.style.fontSize =
        (20 + Math.random() * 30) + "px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    let pos = 0;

    const animation = setInterval(() => {

        pos++;

        heart.style.bottom = pos + "px";

        heart.style.opacity = 1 - pos / 900;

        if (pos > 900) {

            clearInterval(animation);

            heart.remove();

        }

    }, 15);
}

setInterval(createHeart, 600);
