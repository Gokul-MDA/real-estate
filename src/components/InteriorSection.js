import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Section = styled.div`
    margin-top: 10rem;
    display: flex;
    background-color: #000d1a;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        
    }
`

const Container = styled.div`
    flex: 0.6;
    background-color: white;
    margin-top: 9rem;
    height: 14rem;

 `  

const ColumnLeft = styled.div`
    padding: 2rem;

    h1 {
        font-size: clamp(1.5rem, 6vw, 2rem);
        margin-bottom: 1rem;
    }
`

const ColumnRight = styled.div`
    flex: 0.4;
    margin-top: 6rem;
    margin-bottom: 3.5rem;
    
    img{
        width: 100%;
        height: 90%;

        @media screen and (max-width: 768px) {
            width: 80%;
            height: 80%;
            margin-left: 2rem;
        }
        
    }
`
const Button = styled(Link)`
background: ${({ primary }) => (primary ? `#000d1a` : `#cd853f`)};
white-space: nowrap;
outline: none;
border: none;
min-width: 100px;
max-width: 200px;
cursor: pointer;
text-decoration: none;
transition:0.3s;
display: flex;
justify-content: center;
align-items: center;
padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
color: ${({primary}) => (primary ? '#fff' : '#000d1a')} ;
font-size: ${({ big }) => (big ? '20px' : '14px')};

&:hover {
    transform: translateY(-2px);
    text-decoration: none;
}
`

const InteriorSection = ({ title,image,paragraph }) => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1> {title} </h1>
                    <p> {paragraph} </p>
                    <Button> View Design's </Button>
                </ColumnLeft>
                </Container>
                <ColumnRight>
                    <img src={image} alt='home' />
                </ColumnRight>
            
        </Section>
    )
}

export default InteriorSection
