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
    const img =
        'https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/243c76cd-03b3-47b9-a85c-df3b2aed7adb.png?alt=media&token=73cb3700-62d5-4328-98ab-cc79e423320e';
    const [msgs, setMsgs] = useState([
        {
            name: 'Caleb',
            message: 'Hey wahts msg',
            image: 'https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/243c76cd-03b3-47b9-a85c-df3b2aed7adb.png?alt=media&token=73cb3700-62d5-4328-98ab-cc79e423320e',
        },
        {
            name: 'Caleb',
            message: 'Hey wahts msg',
            image: 'https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/243c76cd-03b3-47b9-a85c-df3b2aed7adb.png?alt=media&token=73cb3700-62d5-4328-98ab-cc79e423320e',
        },
        {
            name: 'Caleb',
            message: 'Hey wahts msg',
            image: 'https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/243c76cd-03b3-47b9-a85c-df3b2aed7adb.png?alt=media&token=73cb3700-62d5-4328-98ab-cc79e423320e',
        },
        {
            name: 'Caleb',
            message: 'Hey wahts msg',
            image: 'https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/243c76cd-03b3-47b9-a85c-df3b2aed7adb.png?alt=media&token=73cb3700-62d5-4328-98ab-cc79e423320e',
        },
        {
            name: 'Caleb',
            message: 'Hey wahts a really long message check this one out just keeps gooing.',
            image: 'https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/243c76cd-03b3-47b9-a85c-df3b2aed7adb.png?alt=media&token=73cb3700-62d5-4328-98ab-cc79e423320e',
        },
        {
            name: 'Caleb',
            message: 'A smol test msg',
            image: 'https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/243c76cd-03b3-47b9-a85c-df3b2aed7adb.png?alt=media&token=73cb3700-62d5-4328-98ab-cc79e423320e',
        },
    ]);

    const [msg, setMsg] = useState('');
    const addMsg = () => {
        setMsgs([...msgs, {name: 'Caleb', message: msg, image: img}]);
    };
    return (
        <ChattrChatScreenRoot>
            <Header>
                <Logo>chattr</Logo>
                <Links>
                    <Button type="text">help</Button>
                    <Button type="text">contact us</Button>
                </Links>
            </Header>
            <Main>
                <ChatRooms>
                    <Channels>Channels</Channels>
                    <Frame1156>
                        <Button type="text"># Bugs</Button>
                        <Button type="text"># Feedback</Button>
                        <Button type="text"># Product</Button>
                        <Button type="text"># Payments</Button>
                        <Button type="text"># Help</Button>
                        <Button type="text"># Ideas</Button>
                    </Frame1156>
                </ChatRooms>
                <MessagesArea>
                    <Channel>
                        <_bugs>#Bugs</_bugs>
                        <Messages>
                            {msgs.map(({name, message, image}) => (
                                <Frame1166 className={undefined} message={message} name={name} image={image} />
                            ))}
                        </Messages>
                    </Channel>
                    <MessageBox>
                        <Input placeholder="Sent a message to #Bugs" onChange={(e) => setMsg(e.target.value)}></Input>
                        {/* <SendAMessageToBugs>Send a message to #Bugs</SendAMessageToBugs> */}
                        <Button onClick={addMsg} type={'primary'} size={'large'} disabled={false}>
                            <Button1>Send Message</Button1>
                        </Button>
                    </MessageBox>
                </MessagesArea>
            </Main>
        </ChattrChatScreenRoot>
    );
};

// make dynamic
const Frame1166 = ({className, name, message, image}) => {
    return (
        <Frame116 className={className}>
            <Rectangle208 src={image} />
            <Frame115>
                <Caleb>{name}</Caleb>
                <HeyWhatsIsAMessageAnyway>{message}</HeyWhatsIsAMessageAnyway>
            </Frame115>
        </Frame116>
    );
};
const Frame116 = styled.div`
    width: 280px;
    display: flex;
    flex-direction: row;
    justify-content: left;
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
    margin-left: 20px;
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
    align-self: center;
`;

const ChattrChatScreenRoot = styled.div`
    background-color: #ffffff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 51px;
    padding-top: 9px;
    padding-bottom: 9px;a
`;

const Header = styled.div`
    align-items: center;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
`;
const Logo = styled.div`
    color: #3b6fbe;
    font-size: 36px;
    font-family: Open Sans;
`;
const Links = styled.div`
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
    height: 700px;
    margin-left: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    overflow-y: scroll;
`;
const _bugs = styled.div`
    font-size: 24px;
    font-family: Open Sans;
    font-weight: 700;
`;
const Messages = styled.div`
    overflow-y: scroll;
    height: 700px;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 15px;
    padding-right: 277px;
    align-items: flex-start;
    overflow: hidden;
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

const Button1 = styled.div`
    color: #ffffff;
    font-size: 16px;
    font-family: Roboto;
    font-weight: 400;
    line-height: 24px;
`;
