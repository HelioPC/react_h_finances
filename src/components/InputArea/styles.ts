import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 30px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const SelectArea = styled.div`
    height: 100%;
    width: 100%;

    select {
        width: 155px;
        height: 45px;
        border-radius: 10px;
        border: 2px solid #AAF;
        padding-left: 15px;
    }
`;

export const InputArea = styled.div`
    height: 100%;
    width: 100%;

    input {
        width: 145px;
        height: 40px;
        border-radius: 10px;
        border: 2px solid #AAF;
        padding-left: 15px;
    }
`;

export const ButtonArea = styled.div<{ disabled: boolean }>`
    width: 80%;
    height: 45px;

    button {
        width: 100%;
        height: 100%;
        border-radius: 10px;

        ${props => props.disabled ? 
        'border: 1px solid black' : `
            background-color: darkblue;
            color: #FFF;
            cursor: pointer;
            transition: transform .5s;
            border: none;

            &:hover {
                transform: scale(1.05);
            }
        `}
    }
`
