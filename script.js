class Persona {
  constructor(nombre, anioNacimiento) {
    this.nombre = nombre;
    this.anioNacimiento = anioNacimiento;
  }

  calcularEdad() {
    return new Date().getFullYear() - this.anioNacimiento;
  }

  mostrarMensaje() {
    const edad = this.calcularEdad();
    const aniosRestantes = 100 - edad;
    return `Hola ${this.nombre}, te quedan ${aniosRestantes} años de vida.`;
  }
}

const usuarios = [];

function handleFormSubmit(event) {
  event.preventDefault();

  const nombreUsuario = document.getElementById("name").value;
  const anioNacimientoUsuario = parseInt(document.getElementById("birthYear").value, 10);
  const anioActual = new Date().getFullYear();

  if (anioNacimientoUsuario > anioActual || anioNacimientoUsuario < 1900) {
    alert("Por favor, ingrese un año de nacimiento válido.");
    return;
  }

  const usuario = new Persona(nombreUsuario, anioNacimientoUsuario);
  usuarios.push(usuario);

  document.getElementById("result").textContent = usuario.mostrarMensaje();
  document.getElementById("showUsers").style.display = "block";
}

function displayUsers() {
  const userListDiv = document.getElementById("userList");
  userListDiv.innerHTML = "<h3>Usuarios Registrados:</h3>";

  usuarios.forEach((user, index) => {
    const userInfo = document.createElement("p");
    userInfo.textContent = `Usuario ${index + 1}: ${user.nombre}, nacido en ${user.anioNacimiento}`;
    userListDiv.appendChild(userInfo);
  });

  userListDiv.style.display = "block";
}

function showCode(id) {
  document.querySelectorAll(".code").forEach((element) => {
    element.classList.remove("active");
    element.textContent = "";
  });

  const activeCodeElement = document.getElementById(id);
  activeCodeElement.classList.add("active");
if (id === "htmlCode") {
  fetch("index.html")
    .then(response => response.text())
    .then(data => {
      activeCodeElement.textContent = data;
    })
    .catch(error => {
      console.error("Error al cargar el archivo index.html:", error);
      activeCodeElement.textContent = "Error al cargar el código HTML.";
    });
} else if (id === "cssCode") {
  fetch("styles.css")
    .then(response => response.text())
    .then(data => {
      activeCodeElement.textContent = data;
    })
    .catch(error => {
      console.error("Error al cargar el archivo styles.css:", error);
      activeCodeElement.textContent = "Error al cargar el código CSS.";
    });
}

else if (id === "jsCode") {
  fetch("script.js")
    .then(response => response.text())
    .then(data => {
      activeCodeElement.textContent = data;
    })
    .catch(error => {
      console.error("Error al cargar el archivo script.js:", error);
      activeCodeElement.textContent = "Error al cargar el código JavaScript.";
    });
}
}

document.getElementById("ageForm").addEventListener("submit", handleFormSubmit);
document.getElementById("showUsers").addEventListener("click", displayUsers);

document.querySelectorAll(".tabs button").forEach((button) => {
  button.addEventListener("click", () => {
    showCode(button.getAttribute("data-code"));
  });
});
