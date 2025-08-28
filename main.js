// Navegación entre secciones
const links = document.querySelectorAll(".menu a");
const pages = document.querySelectorAll(".page");

function showPage(id) {
  pages.forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  links.forEach(l => l.classList.remove("active"));
  const activeLink = document.querySelector(`.menu a[href="#${id}"]`);
  if (activeLink) activeLink.classList.add("active");
}

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const id = link.getAttribute("href").substring(1);
    showPage(id);
  });
});

// Hacer clic en las cards para abrir destino
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("click", () => {
    const target = card.dataset.target;
    showPage(target);
  });
});

// Botones de regresar
document.addEventListener("click", e => {
  if (e.target.classList.contains("regresar")) {
    showPage("destinos");
  }
});

// Botones de reservar → mostrar formulario de pago
document.addEventListener("click", e => {
  if (e.target.classList.contains("reservar")) {
    showPage("pago");
  }
});

// Enviar formulario de pago
const formPago = document.querySelector(".form-pago");
if (formPago) {
  formPago.addEventListener("submit", e => {
    e.preventDefault();
    alert("✅ ¡Pago procesado con éxito! Gracias por elegir Expres Junior.");
    showPage("home");
  });
}

// Mostrar página inicial
showPage("home");
