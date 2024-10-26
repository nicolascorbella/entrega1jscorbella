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

// Array to store user data
const usuarios = [];

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  const nombreUsuario = document.getElementById("name").value;
  const anioNacimientoUsuario = parseInt(document.getElementById("birthYear").value);

  const usuario = new Persona(nombreUsuario, anioNacimientoUsuario);
  usuarios.push(usuario);

  const resultDiv = document.getElementById("result");
  resultDiv.textContent = usuario.mostrarMensaje();

  document.getElementById("showUsers").style.display = "block";
}

// Function to display registered users
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
  // Clear all code containers
  document.querySelectorAll(".code").forEach((element) => {
    element.classList.remove("active");
    element.textContent = ""; // Clear the content of inactive code containers
  });
  
  // Set active code container
  const activeCodeElement = document.getElementById(id);
  activeCodeElement.classList.add("active");

  // Insert code content only once in the active code container
  if (!activeCodeElement.textContent.trim()) {
    // Add your code content here. Example:
    if (id === "htmlCode") {
      activeCodeElement.textContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="container">Hello World</div>
</body>
</html>`;
    } else if (id === "cssCode") {
      activeCodeElement.textContent = `* { box-sizing: border-box; }
body { font-family: Arial, sans-serif; }
.container { background-color: #f0f0f0; padding: 20px; }`;
    } else if (id === "jsCode") {
      activeCodeElement.textContent = `console.log("Hello World!");`;
    }
  }
}


// Event listeners for form and button
document.getElementById("ageForm").addEventListener("submit", handleFormSubmit);
document.getElementById("showUsers").addEventListener("click", displayUsers);
