import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    background-color: #000d1a;
    color: white;
    padding: 5rem;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`
const ColumnLeft = styled.div`
   margin-top: 3rem;
`

const ColumnRight = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    column-gap: 5rem;
    
    margin-left: 10rem;

    a {
        text-decoration: none;
    }
    
    @media screen and (max-width: 768px) {
        margin-left: 0;
        margin-top: 3rem;
        grid-gap: 1rem;
    }
`

const FooterSection = () => {
    return (
        <Section>
            <ColumnLeft>
                <h1>Let's find your Dream Home</h1>
            </ColumnLeft>
            <ColumnRight>
                <a href="/">About Us</a>
                <a href="/">Contact</a>
                <a href="/">Service</a>
                <a href="/">Support</a>
                <a href="/">Conditions</a>
                <a href="/">Blogs</a>
                <a href="/">Team</a>
                <a href="/">Polices</a>
            </ColumnRight>
        </Section>
    )
}

export default FooterSection
