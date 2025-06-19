window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

  function sendWhatsApp() {
    const message = document.getElementById("message").value.trim();
    if (message === "") {
      alert("Please enter a message.");
      return;
    }

    const phoneNumber = "917067282100"; // ← apna WhatsApp number (India: 91)
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  }