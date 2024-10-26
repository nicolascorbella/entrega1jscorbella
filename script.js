class Persona {
  constructor(nombre, anioNacimiento) {
    this.nombre = nombre;
    this.anioNacimiento = anioNacimiento;
  }

  // Método para calcular la edad
  calcularEdad() {
    const anioActual = new Date().getFullYear();
    return anioActual - this.anioNacimiento;
  }

  // Método para mostrar el mensaje
  mostrarMensaje() {
    const edad = this.calcularEdad();
    const aniosRestantes = 100 - edad;
    return `Hola ${this.nombre}, te quedan ${aniosRestantes} años de vida.`;
  }
}

const usuarios = []; // Array para almacenar las instancias de Persona

document.getElementById("ageForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenir el envío del formulario

  // Obtener los valores del formulario
  const nombreUsuario = document.getElementById("name").value;
  const anioNacimientoUsuario = parseInt(document.getElementById("birthYear").value);

  // Crear una nueva instancia de Persona
  const usuario = new Persona(nombreUsuario, anioNacimientoUsuario);
  usuarios.push(usuario); // Agregar al array de usuarios

  // Mostrar el resultado en el HTML
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = usuario.mostrarMensaje();

  // Mostrar el botón para ver los usuarios registrados
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
