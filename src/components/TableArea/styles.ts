import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    background-color: #FFF;
    padding: 20px;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    margin-top: 20px;

    &:hover {
        box-shadow: 0px 0px 10px #ABC;
    }
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    padding: 10px 0;
    text-align: left;
`;
