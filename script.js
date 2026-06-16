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
function createBalloon() {
  const balloon = document.createElement("div");
  balloon.innerHTML = "🎈";
  balloon.style.position = "fixed";
  balloon.style.left = Math.random() * 100 + "vw";
  balloon.style.bottom = "-50px";
  balloon.style.fontSize = "40px";
  balloon.style.zIndex = "999";

  document.body.appendChild(balloon);

  let pos = -50;

  const move = setInterval(() => {
    pos += 2;
    balloon.style.bottom = pos + "px";

    if (pos > window.innerHeight + 100) {
      clearInterval(move);
      balloon.remove();
    }
  }, 20);
}

setInterval(createBalloon, 3000);
