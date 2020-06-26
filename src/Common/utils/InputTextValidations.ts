export const ValidateUsername=(value:string)=>{
    let shouldShowMessage=false
    let errorMessage=''
    if(value){
        if(value.length<5){
            shouldShowMessage=true
            errorMessage='username should be greater than 10 characters'
        }
        return {shouldShowMessage,errorMessage}
    }
}