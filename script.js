document.addEventListener("DOMContentLoaded", function () {
  // Efecto de escritura
  const text = "Riberi Erik";
  let index = 0;
  const speed = 150;

  function type() {
    if (index < text.length) {
      document.getElementById("typed").innerHTML += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }
  type();

  // Partículas de fondo
  tsParticles.load("particles-js", {
    particles: {
      number: { value: 50, density: { enable: true, area: 800 } },
      color: { value: "#38bdf8" },
      shape: { type: "circle" },
      opacity: { value: 0.3 },
      size: { value: 2 },
      links: {
        enable: true,
        distance: 150,
        color: "#38bdf8",
        opacity: 0.2,
        width: 1
      },
      move: { enable: true, speed: 1 }
    }
  });
});
