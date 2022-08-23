import styled from 'styled-components';

export const BackgroundDiv = styled.div`
    background-color: var(--background);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    transition: all 0.3s ease-in-out;
`;

export const BakgroundBoxDiv = styled.div`
    display: block;
    justify-content: center;
`;

export const BoxComponentDiv = styled.div`
    padding: 1rem;
    margin-bottom: 5rem;

    h1 {
        letter-spacing: 10px;
        font-size: 3rem;
        text-align: center;
        color: var(--white);
        user-select: none;

        &:hover {
            cursor: pointer;
        }

        @media only screen and (max-width: 500px){
            font-size: 1.4rem;
            letter-spacing: 7px;
        }
    }
`;

export const BoxParagraphDiv = styled.div`
    display: flex;
    justify-content: center;

    p {
        text-align: center;
        font-size: 1.3rem;
        color: var(--white);

        @media only screen and (max-width: 500px){
            width: 150px;
            font-size: 1rem;
        }
    }
`;