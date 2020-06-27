export const ValidateUsername=(value:string)=>{
    let shouldShowMessage=false
    let errorMessage=''
    if(value && value.length<7){
        shouldShowMessage=true
        errorMessage='should be greater than 7 characters'
    }
    else if(!value){
        shouldShowMessage=true
        errorMessage='Required Field*'
    }
    return {shouldShowMessage,errorMessage}
    
}