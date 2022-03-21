import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.div`
    background-color: darkblue;
    height: 250px;
    text-align: center;
`;

export const HeaderText = styled.h1`
    margin: 0;
    padding: 0;
    color: #FFF;
    padding-top: 30px;

    h1 {
        cursor: none;
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
        padding: 0;
        color transparent;
        text-transform: uppercase;
    }

    h1 span:nth-child(1) {
        position: absolute;
        top: 0;
        left: 0;
        color: #FFF;
        transition: .5s;
        clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
        overflow: hidden;
    }

    h1:hover span:nth-child(1) {
        transform: translateY(-16px);
    }

    h1 span:nth-child(2) {
        position: absolute;
        top: 0;
        left: 0;
        color: #FFF;
        transition: .5s;
        clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
        overflow: hidden;
    }

    h1:hover span:nth-child(2) {
        transform: translateY(16px);
    }

    h1 span:nth-child(3) {
        position: absolute;
        top: 50%;
        left: 0;
        color: #000;
        transform: translateY(-50%) scaleY(0);
        width: 100%;
        background-color: #25CD89;
        font-size: 10px;
        font-weight: bold;
        letter-spacing: .7em;
        text-align: center;
        transition: .5s;
    }

    h1:hover span:nth-child(3) {
        transform: translateY(-50%) scaleY(1);
    }
`;

export const Body = styled.div`
    margin: auto;
    max-width: 980px;
    margin-bottom: 50px;
`;
