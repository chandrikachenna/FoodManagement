import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import css from '@emotion/core'

export const ButtonWrapper=styled.button`
    background-color:${props=>disabled?'grey':'blue'};
    cursor:${props=>disabled?'none':'pointer'};
`
