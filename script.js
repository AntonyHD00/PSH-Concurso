// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Configuración de Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyDLGQr3VDd1sFcr5IpGqNhxuTnFobjUC80",
      authDomain: "gt-sw-cs.firebaseapp.com",
      databaseURL: "https://gt-sw-cs-default-rtdb.firebaseio.com",
      projectId: "gt-sw-cs",
      storageBucket: "gt-sw-cs.firebasestorage.app",
      messagingSenderId: "628707122847",
      appId: "1:628707122847:web:e5ecdcdc0649246f5a0caa",
      measurementId: "G-85VL6WJPDS"
    };
  
    // Inicializa Firebase y Firestore
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
  
    // Referencias al DOM
    const modal = document.getElementById("formModal");
    const openBtn = document.getElementById("participateBtn");
    const closeBtn = document.querySelector(".close");
    const form = document.getElementById("contestForm");
  
    // Abrir modal
    openBtn.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  
    // Cerrar modal al hacer clic en la X
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  
    // Envío del formulario
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
  
      try {
        await db.collection("participaciones").add(data);
        alert("¡Participación enviada con éxito!");
        form.reset();
        modal.style.display = "none";
      } catch (err) {
        console.error("Error al enviar:", err);
        alert("Hubo un error al enviar tu participación. Intenta de nuevo.");
      }
    });
  });
  