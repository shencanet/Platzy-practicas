// Objeto con datos
const objetoDatos = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid"
};

// Función asincrónica para acceder a los datos del objeto
const obtenerDatosAsincronos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulamos una llamada asíncrona a una API o una operación lenta
      // En este caso, simplemente devolvemos el objeto de datos después de 1 segundo
      resolve(objetoDatos);
    }, 5000);
  });
};

// Función para usar los datos del objeto de forma asincrónica
const usarDatosAsincronos = async () => {
  try {
    // Esperamos a que se resuelva la promesa y obtenemos los datos del objeto
    const datos = await obtenerDatosAsincronos();
    
    // Accedemos a los datos del objeto
    console.log("Nombre:", datos.nombre);
    console.log("Edad:", datos.edad);
    console.log("Ciudad:", datos.ciudad);
    
  } catch (error) {
    // Manejo de errores
    console.error("Error al obtener los datos:", error);
  }
};

// Llamamos a la función para usar los datos del objeto de forma asincrónica
usarDatosAsincronos();