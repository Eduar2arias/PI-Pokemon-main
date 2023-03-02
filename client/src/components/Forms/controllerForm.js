export default function validate(formData) {
  let errors = {};
  if (!formData.name) {
    errors.name = "field requires a name";
    
  }else if ( !/(https:\/\/)([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg|.jpeg|.webp|.gif)(\?[^\s[",><]*)?/g.test(formData.image)){
    errors.image = 'url field requires format .png .jpg .jpeg .webp .gif'
  }  else if (formData.height <= 0 || formData.height > 30) {
    errors.height = "must be a number greater than 0 and less than 30";
  } else if (formData.weight <= 0 || formData.weight > 1000) {
    errors.weight =
      "must be a number greater than 0 and less than 1000" 
  }else if (formData.life <= 10 || formData.life > 100){
    errors.life = 'number must be greater than 10 and less than 100'
  }
  else if (formData.stroke <= 0 || formData.stroke> 100){
    errors.stroke = 'number must be greater than 0 and less than 100'
  }
  else if (formData.defense <= 0 || formData.defense> 100){
    errors.defense = 'number must be greater than 0 and less than 100'
  }
  else if (formData.speed <= 0 || formData.speed> 100){
    errors.speed = 'number must be greater than 0 and less than 100'
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