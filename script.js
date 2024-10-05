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
  
  // Usamos prompt para obtener los datos del usuario
  const nombreUsuario = prompt("¿Cuál es tu nombre?");
  const anioNacimientoUsuario = prompt("¿En qué año naciste?");
  
  // Creamos una nueva instancia de la clase Persona
  const usuario = new Persona(nombreUsuario, anioNacimientoUsuario);
  
  // Mostramos el mensaje con el cálculo
  usuario.mostrarMensaje();