import styled from 'styled-components'

//styld comonents 

export const About = styled.div`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: center;
padding: 5rem 1rem;
color: white;
padding-left: 71px;
`;
export const Description = styled.div`
flex: 1;
padding-right: 3rem;
h2{
    font-weight:lighter;
}
`;
export const Image = styled.div`
flex:0.7;
overflow: hidden;
img{
    width: 92%;
    height: 85vh;
    object-fit: cover;
}
`;
export const Hide = styled.div`
overflow: hidden;
`;

