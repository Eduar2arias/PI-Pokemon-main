export default function validate (formData , errorData,setErrorData){
    const {name} = formData
    console.log();
    const {error_name} = errorData
    if (!name) {
        console.log('upa un error');
        setErrorData({...errorData,error_name:"Necesitas un nombre"})
    }else{
        console.log('entre');
        setErrorData({...errorData,error_name:""})
        
    }
}