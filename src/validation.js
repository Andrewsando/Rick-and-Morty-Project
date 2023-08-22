export default function validation(datos) {
  const regex = new RegExp(/\S+@\S+\.\S+/);

  let incorrect = {};
  if (!regex.test(datos.email)) {
    incorrect.email = "Debes ingresar un correo válido";
  }
  if (datos.email.length <= 0) {
    incorrect.email = "El nombre de usuario no puede estar vacío";
  }
  if (datos.email.length >= 35) {
    incorrect.email =
      "El nombre de usuario no puede tener más de 35 caracteres";
  }
  if (!/.*\d+.*/.test(datos.password)) {
    incorrect.password = "la contraseña tiene que tener al menos un número";
  }
  if (datos.password.length < 6 || datos.password.length > 10) {
    incorrect.password =
      "la contraseña tiene que tener una longitud entre 6 y 10 caracteres";
  }

  return incorrect;
}
