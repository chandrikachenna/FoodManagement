import React from 'react';
import {InputTextElement} from '.'
import {text, withKnobs } from "@storybook/addon-knobs";
import {ValidateUsername} from '../utils/InputTextValidations'
import { action } from "@storybook/addon-actions";

export default{
    component:InputTextElement,
    title:'Input/InputTextElement'
}

export const defaultView = () => <InputTextElement 
    placeholder={'Username'}
    onChange={action('onChange')}
    validate={ValidateUsername}
/>

export const knobs = () => <InputTextElement 
    placeholder={text('Placeholder','Username')}
    validate={ValidateUsername}
/>

knobs.story={
    decorators:[withKnobs]
}