// Definimos la clase Persona
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
    alert(`Hola ${this.nombre}, te quedan ${aniosRestantes} años de vida.`);
  }
}

// Objetos adicionales
const intereses = {
  hobbies: ["leer", "viajar", "cocinar"],
  deportesFavoritos: ["fútbol", "baloncesto", "natación"],
  mostrarIntereses() {
    alert(`Hobbies: ${this.hobbies.join(", ")}\nDeportes favoritos: ${this.deportesFavoritos.join(", ")}`);
  }
};

const metas = {
  aCortoPlazo: ["aprender a programar", "leer un libro al mes"],
  aLargoPlazo: ["viajar a 10 países", "tener una carrera exitosa"],
  mostrarMetas() {
    alert(`Metas a corto plazo: ${this.aCortoPlazo.join(", ")}\nMetas a largo plazo: ${this.aLargoPlazo.join(", ")}`);
  }
};

// Array para almacenar instancias de Persona
const usuarios = [];

let continuar = true;

while (continuar) {
  // Usamos prompt para obtener los datos del usuario
  const nombreUsuario = prompt("¿Cuál es tu nombre?");
  const anioNacimientoUsuario = prompt("¿En qué año naciste?");

  // Creamos una nueva instancia de la clase Persona
  const usuario = new Persona(nombreUsuario, anioNacimientoUsuario);
  usuarios.push(usuario); // Agregamos el usuario al array

  // Mostramos el mensaje con el cálculo
  usuario.mostrarMensaje();

  // Mostramos los intereses y metas al usuario
  intereses.mostrarIntereses();
  metas.mostrarMetas();

  // Preguntamos si quiere volver a iniciar la calculadora
  const respuesta = prompt("¿Quieres calcular otra vez? (sí/no)").toLowerCase();
  if (respuesta !== "sí") {
    continuar = false;
  }
}

// Mostrar todos los usuarios ingresados
alert("Usuarios registrados:");
usuarios.forEach((user, index) => {
  alert(`Usuario ${index + 1}: ${user.nombre}, nacido en ${user.anioNacimiento}`);
});

alert("¡Gracias por usar la calculadora de edad!");
