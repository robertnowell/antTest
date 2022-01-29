import styled from 'styled-components';

export const SidebarDesktop1 = ({className}) => {
    return (
        <SidebarDesktop className={className}>
            <Group13>
                <Logo
                    src={
                        'https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/796dd743-899f-4102-b8d5-8e0c794aa85f.svg?alt=media&token=dfdbec69-4c8e-463a-8aba-522b649d9b21'
                    }
                />
                <DashboardKit>Dashboard Kit</DashboardKit>
            </Group13>
            <IconpiechartActivetrue2 icon={'piechart'} active={true} className={undefined} />
            <IconticketActivefalse2 icon={'ticket'} active={false} className={undefined} />
            <IconpiechartActivefalse12 icon={'piechart'} active={false} className={undefined} />
            <IconpiechartActivefalse12 icon={'piechart'} active={false} className={undefined} />
            <IconpiechartActivefalse12 icon={'piechart'} active={false} className={undefined} />
            <Listelem6 icon={'piechart'} active={false} className={undefined} />
            <IconpiechartActivefalse12 icon={'piechart'} active={false} className={undefined} />
            <IconpiechartActivefalse12 icon={'piechart'} active={false} className={undefined} />
        </SidebarDesktop>
    );
};

const IconpiechartActivetrue2 = ({icon, active, className}) => {
    return (
        <IconpiechartActivetrue className={className}>
            <Sheet8
                src={
                    'https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/2e970335-3881-4428-b256-b4ffad93400e.svg?alt=media&token=9233a50c-edde-4dbd-8998-75cf34370c48'
                }
            />
            <Selected1 />
            <Title9>Overview</Title9>
            <IconSidebarActive1Overview7
                src={
                    'https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/16cbe48f-998e-4628-9ba0-44b7c4d9ec33.svg?alt=media&token=c7c5798e-c121-43e5-b5f4-fc82c286bba5'
                }
            />
        </IconpiechartActivetrue>
    );
};

const IconpiechartActivefalse12 = ({icon, active, className}) => {
    return (
        <IconpiechartActivefalse className={className}>
            <Sheet10
                src={
                    'https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/30777d33-d59d-44d9-91ef-dddf7cf9f581.svg?alt=media&token=83264c68-99cc-4022-824a-f7c938949ef9'
                }
            />
            <Title11>Overview</Title11>
            <IconSidebarActive1Overview9
                src={
                    'https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/dd9a831c-5f9f-4324-8024-7412570b45b9.svg?alt=media&token=402e415e-7739-40ee-a064-9e5aa4bc6cc6'
                }
            />
        </IconpiechartActivefalse>
    );
};

const IconticketActivefalse2 = ({icon, active, className}) => {
    return (
        <IconticketActivefalse className={className}>
            <Sheet22
                src={
                    'https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/9f597845-d550-4410-8528-3f59377961e0.svg?alt=media&token=12246238-67af-4e22-a79b-cb58884be530'
                }
            />
            <Title23>Tickets</Title23>
            <IconSidebarInactive2Tickets1
                src={
                    'https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/3d104190-19a7-4b48-9901-a91c7c0c01e4.svg?alt=media&token=1f9038df-838e-4882-8745-0b960b727342'
                }
            />
        </IconticketActivefalse>
    );
};

const SidebarDesktop = styled.div`
    background-color: #363740;
    height: 608px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;
const Group13 = styled.div`
    margin-bottom: 59px;
    display: flex;
    flex-direction: row;
    gap: 12px;
    padding-left: 32px;
    padding-right: 43px;
    align-items: center;
`;
const Logo = styled.img`
    width: 32px;
    height: 32px;
    align-self: stretch;
`;
const DashboardKit = styled.div`
    color: #a4a6b3;
    font-size: 19px;
    font-family: Mulish;
    font-weight: 700;
    letter-spacing: 0.4px;
`;
const Listelem6 = styled(IconpiechartActivefalse12)`
    margin-bottom: 32px;
`;
const IconpiechartActivetrue = styled.div`
    width: 255px;
    height: 56px;
    position: relative;
`;
const Sheet8 = styled.img`
    width: 255px;
    height: 56px;
    position: absolute;
    top: 0;
    left: 0;
`;
const Selected1 = styled.div`
    background-color: #dde2ff;
    width: 3px;
    height: 56px;
    position: absolute;
    top: 0;
    left: 0;
`;
const Title9 = styled.div`
    color: #dde2ff;
    width: 159px;
    font-size: 16px;
    font-family: Mulish;
    font-weight: 400;
    letter-spacing: 0.2px;
    position: absolute;
    top: 18px;
    left: 72px;
`;
const IconSidebarActive1Overview7 = styled.img`
    width: 16px;
    height: 16px;
    position: absolute;
    top: 20px;
    left: 32px;
`;
const IconpiechartActivefalse = styled.div`
    width: 255px;
    height: 56px;
    position: relative;
`;
const Sheet10 = styled.img`
    width: 255px;
    height: 56px;
    position: absolute;
    top: 0;
    left: 0;
`;
const Title11 = styled.div`
    color: #9fa2b4;
    width: 159px;
    font-size: 16px;
    font-family: Mulish;
    font-weight: 400;
    letter-spacing: 0.2px;
    position: absolute;
    top: 18px;
    left: 72px;
`;
const IconSidebarActive1Overview9 = styled.img`
    width: 16px;
    height: 16px;
    position: absolute;
    top: 20px;
    left: 32px;
`;
const IconticketActivefalse = styled.div`
    width: 255px;
    height: 56px;
    position: relative;
`;
const Sheet22 = styled.img`
    width: 255px;
    height: 56px;
    position: absolute;
    top: 0;
    left: 0;
`;
const Title23 = styled.div`
    color: #a4a6b3;
    width: 159px;
    font-size: 16px;
    font-family: Mulish;
    font-weight: 400;
    letter-spacing: 0.2px;
    position: absolute;
    top: 18px;
    left: 72px;
`;
const IconSidebarInactive2Tickets1 = styled.img`
    width: 16px;
    height: 16px;
    position: absolute;
    top: 20px;
    left: 32px;
`;
