import styled from 'styled-components';

export const ButtonDiv = styled.div`
    button{
        height:41px;
        width: 41px;
        border-radius: 10px;
        background-color: ${({bgcolor})=>bgcolor};
        margin: 10px;
    }
    
`