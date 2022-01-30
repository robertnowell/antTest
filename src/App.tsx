import {useState} from 'react';
import {Button, Input} from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import styled from 'styled-components';

import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact>
                        <ChattrChatScreen1 />
                        {/* <HandBuilt /> */}
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export const ChattrChatScreen1 = ({}) => {
    return (
        <ChattrChatScreenRoot>
            <Header>
                <Logo>chattr</Logo>
                <Links>
                    <Link1>help</Link1>
                    <Link1>contact us</Link1>
                </Links>
            </Header>
            <Main>
                <ChatRooms>
                    <Channels>Channels</Channels>
                    <Frame1156>
                        <_Bugs>#{'  '}Bugs</_Bugs>
                        <_Feedback>#{'  '}Feedback</_Feedback>
                        <_Feedback>#{'  '}Product</_Feedback>
                        <_Payments>#{'  '}Payments</_Payments>
                        <_Feedback>#{'  '}Help</_Feedback>
                        <_Feedback>#{'  '}Ideas</_Feedback>
                    </Frame1156>
                </ChatRooms>
                <MessagesArea>
                    <Channel>
                        <_bugs>#Bugs</_bugs>
                        <Messages>
                            {[0, 1, 2, 3, 4, 5].map((i) => (
                                <Frame1166 className={undefined} />
                            ))}
                        </Messages>
                    </Channel>
                    <MessageBox>
                        <SendAMessageToBugs>Send a message to #Bugs</SendAMessageToBugs>
                        <Button type={'primary'} size={'large'} disabled={false}>
                            <Button1>Send Message</Button1>
                        </Button>
                    </MessageBox>
                </MessagesArea>
            </Main>
        </ChattrChatScreenRoot>
    );
};
const Frame1166 = ({className}) => {
    return (
        <Frame116 className={className}>
            <Rectangle208
                src={
                    'https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/6534d937-ab83-4fe0-b914-ba7c0c57305e.png?alt=media&token=15e682d5-4d15-43d6-8a86-240fc7cceef4'
                }
            />
            <Frame115>
                <Caleb>Caleb</Caleb>
                <HeyWhatsIsAMessageAnyway>Hey whats is a message anyway?</HeyWhatsIsAMessageAnyway>
            </Frame115>
        </Frame116>
    );
};
const Frame116 = styled.div`
    width: 280px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;
const Rectangle208 = styled.img`
    width: 51px;
    height: 51px;
    align-self: stretch;
    border-radius: 12px;
`;
const Frame115 = styled.div`
    height: 44px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;
const Caleb = styled.div`
    font-size: 14px;
    font-family: Open Sans;
    font-weight: 700;
`;
const HeyWhatsIsAMessageAnyway = styled.div`
    font-size: 14px;
    font-family: Open Sans;
    font-weight: 400;
    align-self: stretch;
`;
const Link1 = styled.div`
    font-size: 13px;
    font-family: Open Sans;
    text-decoration: underline;
    font-weight: 400;
`;
const _Feedback = styled.div`
    font-size: 13px;
    font-family: Open Sans;
    font-weight: 400;
    white-space: pre-wrap;
`;
const ChattrChatScreenRoot = styled.div`
    background-color: #ffffff;
    height: 982px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 51px;
    padding-top: 9px;
    padding-bottom: 9px;
    margin: auto;
    min-width: 1512px;
    align-items: flex-end;
`;
const Header = styled.div`
    width: 1475px;
    margin-right: 17px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const Logo = styled.div`
    color: #3b6fbe;
    font-size: 36px;
    font-family: Open Sans;
    align-self: stretch;
`;
const Links = styled.div`
    width: 107px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const Main = styled.div`
    width: 1512px;
    align-self: stretch;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 75px;
    align-items: center;
    padding: 17px;
`;
const ChatRooms = styled.div`
    height: 212px;
    overflow: hidden;
    margin-top: 17px;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 15.5px;
    padding-bottom: 15.5px;
    padding-left: 12px;
    padding-right: 12px;
    align-items: center;
`;
const Channels = styled.div`
    width: 101px;
    font-size: 14px;
    font-family: Open Sans;
    font-weight: 700;
`;
const Frame1156 = styled.div`
    height: 138px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;
const _Bugs = styled.div`
    font-size: 13px;
    font-family: Open Sans;
    font-weight: 700;
    white-space: pre-wrap;
`;
const _Payments = styled.div`
    font-size: 13px;
    font-family: Open Sans;
    font-weight: 400;
    align-self: stretch;
    white-space: pre-wrap;
`;
const MessagesArea = styled.div`
    border-width: 1px;
    border-color: #cccccc;
    border-style: solid;
    height: 781px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    padding-right: 7px;
    align-items: flex-start;
    border-radius: 15px;
`;
const Channel = styled.div`
    height: 455px;
    margin-left: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;
const _bugs = styled.div`
    font-size: 24px;
    font-family: Open Sans;
    font-weight: 700;
`;
const Messages = styled.div`
    height: 398px;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 15px;
    padding-right: 277px;
    align-items: flex-start;
`;
const MessageBox = styled.div`
    width: 972px;
    margin-right: 7px;
    align-self: flex-end;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 27px;
    padding-right: 27px;
    align-items: center;
`;
const SendAMessageToBugs = styled.div`
    font-size: 14px;
    font-family: Open Sans;
    font-weight: 700;
    align-self: stretch;
    background-color: rgba(196, 196, 196, 0.2);
    border-width: 1px;
    border-color: #000000;
    border-style: solid;
    width: 751px;
    height: 19px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 0;
    padding-left: 31px;
    padding-right: 31px;
    padding-top: 19px;
    padding-bottom: 19px;
    border-radius: 17px;
`;
const Button1 = styled.div`
    color: #ffffff;
    font-size: 16px;
    font-family: Roboto;
    font-weight: 400;
    line-height: 24px;
`;
