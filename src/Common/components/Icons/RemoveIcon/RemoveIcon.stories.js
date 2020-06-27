import React from 'react'
import {RemoveIcon} from '.'
import { action } from "@storybook/addon-actions"

export default{
    component:RemoveIcon,
    title:'Icons/RemoveIcon'
}

export const defaultView = () => <RemoveIcon onClick={action('onClick')}/>
