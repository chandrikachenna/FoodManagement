import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Layout=styled.div`
    ${tw`flex flex-row items-start justify-between`}
`

const Left=styled.div`
    ${tw`flex flex-col`}
`
const Right=styled.div`
    ${tw`flex flex-row`}
`

export {Layout,Left,Right} 