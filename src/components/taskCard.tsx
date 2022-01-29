import styled from 'styled-components';

export const Selectedfalse3 = ({selected, title, count, className}) => {
    return (
        <Selectedfalse className={className}>
            <Unresolved>{title}</Unresolved>
            <_60>{count}</_60>
        </Selectedfalse>
    );
};
export const Selectedtrue1 = ({selected, title, count, className}) => {
    return (
        <Selectedtrue className={className}>
            <Unresolved3>Unresolved</Unresolved3>
            <_603>{count}</_603>
        </Selectedtrue>
    );
};

const Selectedfalse = styled.div`
    background-color: #ffffff;
    border-width: 1px;
    border-color: #dfe0eb;
    border-style: solid;
    height: 134px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 32px;
    padding-right: 32px;
    border-radius: 8px;
`;
const Unresolved = styled.div`
    color: #9fa2b4;
    text-align: center;
    width: 194px;
    font-size: 19px;
    font-family: Mulish;
    font-weight: 700;
    letter-spacing: 0.4px;
`;
const _60 = styled.div`
    color: #252733;
    text-align: center;
    width: 194px;
    font-size: 40px;
    font-family: Mulish;
    font-weight: 700;
    letter-spacing: 1px;
`;
const Selectedtrue = styled.div`
    background-color: #ffffff;
    border-width: 1px;
    border-color: #3751ff;
    border-style: solid;
    height: 134px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 32px;
    padding-right: 32px;
    border-radius: 8px;
`;
const Unresolved3 = styled.div`
    color: #3751ff;
    text-align: center;
    width: 194px;
    font-size: 19px;
    font-family: Mulish;
    font-weight: 700;
    letter-spacing: 0.4px;
`;
const _603 = styled.div`
    color: #3751ff;
    text-align: center;
    width: 194px;
    font-size: 40px;
    font-family: Mulish;
    font-weight: 700;
    letter-spacing: 1px;
`;
