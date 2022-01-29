import styled from 'styled-components';

export const HeaderDefault1 = ({className}) => {
    return (
        <HeaderDefault className={className}>
            <Title>Overview</Title>
            <IconSearch
                src={
                    'https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/ebf571fa-91d4-4275-a0b4-377b62ce9648.svg?alt=media&token=f3f3f3fe-2abf-4b5b-829f-6afc13dd0678'
                }
            />
            <IconNotificationsNew
                src={
                    'https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/73fc5c3d-840e-4cb7-a604-86ed14b90b65.svg?alt=media&token=26c7bea2-d161-4333-8de5-279b20ff79bd'
                }
            />
            <Name1>Jones Ferdinand</Name1>
            <Photo>
                <AvatarMan_header>
                    <Ellipse />
                    <MHeader
                        src={
                            'https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/aaf9f1fe-6eb0-4a9a-92ec-e3efeb2d285e.png?alt=media&token=3f997771-5a8d-46eb-b811-a5d7294fba35'
                        }
                    />
                </AvatarMan_header>
                <ProfileCircle
                    src={
                        'https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/2c424fde-105d-4770-ac5f-3a51edb44c36.svg?alt=media&token=c5b23d69-1784-4b7f-84af-10ed5e91e810'
                    }
                />
            </Photo>
        </HeaderDefault>
    );
};

const HeaderDefault = styled.div`
    width: 1122px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const Title = styled.div`
    color: #252733;
    width: 771px;
    height: 34px;
    font-size: 24px;
    font-family: Mulish;
    font-weight: 700;
    letter-spacing: 0.3px;
    margin-bottom: 4px;
    margin-right: 64px;
    align-self: flex-end;
`;
const IconSearch = styled.img`
    width: 16px;
    height: 16px;
    margin-right: 24px;
`;
const IconNotificationsNew = styled.img`
    width: 16px;
    height: 16px;
    margin-right: 64px;
`;
const Name1 = styled.div`
    color: #252733;
    text-align: right;
    width: 109px;
    height: 18px;
    font-size: 14px;
    font-family: Mulish;
    font-weight: 600;
    letter-spacing: 0.2px;
    line-height: 20px;
    margin-right: 14px;
`;
const Photo = styled.div`
    width: 44px;
    height: 44px;
    align-self: stretch;
    position: relative;
`;
const AvatarMan_header = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    top: 2px;
    left: 2px;
`;
const Ellipse = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    left: 0;
`;
const MHeader = styled.img`
    width: 63.33px;
    height: 43.33px;
    position: absolute;
    top: -1.67px;
    left: -11.67px;
`;
const ProfileCircle = styled.img`
    width: 44px;
    height: 44px;
    position: absolute;
    top: 0;
    left: 0;
`;
