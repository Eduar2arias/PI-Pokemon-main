export default function validate(formData) {
  let errors = {};
  if (!formData.name) {
    errors.name = "field requires a name";
    
  }else if ( !/(https:\/\/)([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg|.jpeg|.webp|.gif)(\?[^\s[",><]*)?/g.test(formData.image)){
    errors.image = 'la imagen debe ser formato .png .jpg .jpeg .webp .gif'
  }  else if (formData.height <= 0 || formData.height > 30) {
    errors.height = "debe ser un numero entre 0 y 30";
  } else if (formData.weight < 0 || formData.weight > 1000) {
    errors.weight =
      "debe ser un numero mayor que 0 y menor que 1000" 
  }else if (formData.life <= 0 || formData.life > 100){
    errors.lfe = 'los valores deben estar en el rango 1 a 100'
  }
  else if (formData.stroke <= 0 || formData.stroke> 100){
    errors.types = 'debes elegir al menos un typo'
  }
  else if (formData.defense <= 0 || formData.defense> 100){
    errors.types = 'debes elegir al menos un typo'
  }
  else if (formData.speed <= 0 || formData.speed> 100){
    errors.types = 'debes elegir al menos un typo'
  }
  
  //  height:'',
  //   weight:'',
  //   life: '',
  //   stroke:'',
  //   defense:'',
  //   speed:''

  //    if (!regexEmail.test(inputs.email)) {
  //       errors.email = 'Debe ser un correo electrónico';
  //    }else if(inputs.phone < 1){
  //       errors.phone= "Sólo números positivos"
  //    } else if (!inputs.subject){
  //       errors.subject="Se requiere un asunto"
  //    }else if (!inputs.message){
  //      errors.message="Se requiere un mensaje"
  //    }

  //       console.log(errors);
  return errors;
}




// else if (!/^(?=.*\d{3})[a-zA-Z0-9#*]+$/.test(formData.id)) {
//   errors.id = "the id must contain at least 3 numbers";
// }