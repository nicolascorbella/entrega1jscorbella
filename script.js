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
    activeCodeElement.textContent = `
<!DOCTYPE html>
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
</body>
</html>`;
  } else if (id === "cssCode") {
    activeCodeElement.textContent = `
/* Estilos generales */
* { box-sizing: border-box; }
body {
  font-family: Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0;
  margin: 0;
}
.container {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  margin-top: 80px;
}
h1 {
  font-size: 24px;
  color: #333;
  text-align: center;
}
input {
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #305EF2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
button:hover { background-color: #234bbf; }
#result, #userList { margin-top: 20px; font-size: 16px; color: #333; }
`;
  } else if (id === "jsCode") {
    activeCodeElement.textContent = "/* class Persona {
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
    activeCodeElement.textContent = `
<!DOCTYPE html>
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
</body>
</html>`;
  } else if (id === "cssCode") {
    activeCodeElement.textContent = `
/* Estilos generales */
* { box-sizing: border-box; }
body {
  font-family: Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0;
  margin: 0;
}
.container {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  margin-top: 80px;
}
h1 {
  font-size: 24px;
  color: #333;
  text-align: center;
}
input {
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #305EF2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
button:hover { background-color: #234bbf; }
#result, #userList { margin-top: 20px; font-size: 16px; color: #333; }
`;
  } else if (id === "jsCode") {
    activeCodeElement.textContent = "/* Coloca aquí el código de JavaScript */";
  }
}

document.getElementById("ageForm").addEventListener("submit", handleFormSubmit);
document.getElementById("showUsers").addEventListener("click", displayUsers);

document.querySelectorAll(".tabs button").forEach((button) => {
  button.addEventListener("click", () => {
    showCode(button.getAttribute("data-code"));
  });
});
 */";
  }
}

document.getElementById("ageForm").addEventListener("submit", handleFormSubmit);
document.getElementById("showUsers").addEventListener("click", displayUsers);

document.querySelectorAll(".tabs button").forEach((button) => {
  button.addEventListener("click", () => {
    showCode(button.getAttribute("data-code"));
  });
});
