import React from "react";
import {Input,InputWrapper,ErrorMessage} from './styledComponents'
import { observable } from "mobx";
import { observer } from "mobx-react";

interface InputTextElementProps{
    placeholder:string
    onChange:(value:string)=>void
    validate:(value:string)=>{shouldShowMessage:boolean,errorMessage:string}
}

@observer
class InputTextElement extends React.Component<InputTextElementProps>{
    @observable value=''
    @observable shouldShowMessage=false
    @observable errorMessage=''
    onChange=(event:React.ChangeEvent<HTMLInputElement>):void=>{
        this.errorMessage=''
        this.value=event.target.value
        this.props.onChange(this.value)
    }
    onBlur=(event:React.FocusEvent<HTMLInputElement>):void=>{
        const {validate}=this.props
        const {shouldShowMessage,errorMessage}=validate(this.value)
        this.shouldShowMessage=shouldShowMessage
        this.errorMessage=errorMessage
    }
    render(){
        const {placeholder}=this.props
        return(
            <InputWrapper>
                <Input placeholder={placeholder} onChange={this.onChange} onBlur={this.onBlur}/>
                {this.shouldShowMessage &&
                    <ErrorMessage>{this.errorMessage}</ErrorMessage>
                }
            </InputWrapper>
        )   
    }
}
export {InputTextElement}