import React from 'react';
import {Button} from '.'
import styled from '@emotion/styled'
import {text,boolean, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

const TextTypo=styled.span`
    font-size:14px;
    padding:2px;
`

export default{
    component:Button,
    title:'Buttons/CommonButton'
}

export const defaultView = () => <Button 
    onClick={action('onClick')}
    text={'Button'}
    textTypo={TextTypo}
    variant={Button.buttonVariants.oval}
    type={Button.buttonTypes.outline}
    disabled={true}
/>

export const knobs = () => <Button
    text={text('ButtonName','Button')}
    textTypo={TextTypo}
    variant={text('Variant',Button.buttonVariants.oval)}
    type={text('Type',Button.buttonTypes.filled)}
    disabled={boolean('isDisable',true)}
/>

knobs.story={
    decorators:[withKnobs]
}