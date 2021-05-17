import React from 'react'
import { Button } from './Button'
import styled from 'styled-components'

const Section = styled.div`
    h1 {
        margin-left: 6rem;
        font-size: clamp(1.5rem, 6vw, 2rem);

        @media screen and (max-width: 768px) {
        margin-left: 3rem;
        margin-bottom: 3rem;
    }
    }
`

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`

const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    width:550px;
    height:550px;

    @media screen and (max-width: 768px) {
        width: 80%;
        height: 60%;
        justify-content: center;
        align-items: center;
    }
    
img {
    width:100%;
    height: 100%;
    object-fit: cover;
}
`
const ColumnRight = styled.div`
    display: flex;
    flex-direction: column;
    width: 550px;
    height:550px;
    margin-left: 90px;
    margin-top: 200px;

    @media screen and (max-width: 768px) {
        width: 80%;
        height: 60%;
        justify-content: center;
        align-items: center;
        margin-left: 0;
    }

img {
    width:100%;
    height: 100%;

}`

const ViewSection = ( {image,paragraph} ) => {
    return (
        <Section>
            <h1>View our newest homes</h1>
            <Row>
            <ColumnLeft>
                <img src={image} alt="home" />
                <p>{paragraph}</p>
                <Button to="/" primary='true'>View Homes</Button>
            </ColumnLeft>
            <ColumnRight>
                <img src={image} alt="" />
                <p>{paragraph}</p>
                <Button to="/" primary='true'>View Homes</Button>
            </ColumnRight>
            </Row>
        </Section>
    )
}

export default ViewSection
