class Persona {
  constructor(nombre, anioNacimiento) {
    this.nombre = nombre;
    this.anioNacimiento = anioNacimiento;
  }

  calcularEdad() {
    const anioActual = new Date().getFullYear();
    return anioActual - this.anioNacimiento;
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
  const anioNacimientoUsuario = parseInt(document.getElementById("birthYear").value);

  const anioActual = new Date().getFullYear();
  if (anioNacimientoUsuario > anioActual || anioNacimientoUsuario < 1900) {
    alert("Por favor, ingrese un año de nacimiento válido.");
    return;
  }

  const usuario = new Persona(nombreUsuario, anioNacimientoUsuario);
  usuarios.push(usuario);

  const resultDiv = document.getElementById("result");
  resultDiv.textContent = usuario.mostrarMensaje();

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
    activeCodeElement.textContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Edad</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Calculadora de Edad</h1>
        <form id="ageForm">
            <label for="name">Nombre:</label>
            <input type="text" id="name" required>
            
            <label for="birthYear">Año de Nacimiento:</label>
            <input type="number" id="birthYear" required>
            
            <button type="submit">Calcular</button>
        </form>

        <div id="result"></div>
        <button id="showUsers" style="display: none;">Mostrar Usuarios Registrados</button>
        <div id="userList" style="display: none;"></div>
    </div>

    <!-- Contenedor para el código de la página -->
    <div class="code-container">
        <div class="tabs">
            <button data-code="htmlCode">HTML</button>
            <button data-code="cssCode">CSS</button>
            <button data-code="jsCode">JavaScript</button>
        </div>
        <div id="htmlCode" class="code"></div>
        <div id="cssCode" class="code"></div>
        <div id="jsCode" class="code"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
`;
  } else if (id === "cssCode") {
    activeCodeElement.textContent = `* { box-sizing: border-box; }
body { font-family: Arial, sans-serif; }
.container { background-color: #f0f0f0; padding: 20px; }`;
  } else if (id === "jsCode") {
    activeCodeElement.textContent = `console.log("Hello World!");`;
  }
}

document.getElementById("ageForm").addEventListener("submit", handleFormSubmit);
document.getElementById("showUsers").addEventListener("click", displayUsers);

document.querySelectorAll(".tabs button").forEach((button) => {
  button.addEventListener("click", () => {
    showCode(button.getAttribute("data-code"));
  });
});
