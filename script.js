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

document.getElementById("ageForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nombreUsuario = document.getElementById("name").value;
  const anioNacimientoUsuario = parseInt(document.getElementById("birthYear").value);

  const usuario = new Persona(nombreUsuario, anioNacimientoUsuario);
  usuarios.push(usuario);

  const resultDiv = document.getElementById("result");
  resultDiv.textContent = usuario.mostrarMensaje();

  document.getElementById("showUsers").style.display = "block";
});

document.getElementById("showUsers").addEventListener("click", function() {
  const userListDiv = document.getElementById("userList");
  userListDiv.innerHTML = "<h3>Usuarios Registrados:</h3>";
  usuarios.forEach((user, index) => {
    userListDiv.innerHTML += `<p>Usuario ${index + 1}: ${user.nombre}, nacido en ${user.anioNacimiento}</p>`;
  });
  userListDiv.style.display = "block";
});

function showCode(id) {
  document.querySelectorAll(".code").forEach((element) => {
    element.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}
