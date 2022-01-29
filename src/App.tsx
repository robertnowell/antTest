import React from 'react';
import ReactDOM from 'react-dom';
import {Button, DatePicker, version, PageHeader, Menu} from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import styled from 'styled-components';
import {Selectedfalse3, Selectedtrue1} from './components/taskCard';
import {SidebarDesktop1} from './components/sidebar';
import {HeaderDefault1} from './components/header';
import Search from 'antd/lib/input/Search';
import profilePhoto from './Rectangle214.png';

import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact>
                        <NewRoot1 />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export const NewRoot1 = ({}) => {
    const onSearch = () => {};
    return (
        <NewRootRoot>
            <HeaderLoggedIn2>
                <RightGroup>
                    <Logo2
                        src={
                            'https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/ed38cce8-9c23-4ee8-a221-6811439f7e73.svg?alt=media&token=f103c5a8-7318-4999-8da7-abac878504f2'
                        }
                    />
                    <Search placeholder="input search text" onSearch={onSearch} style={{width: 200}} />
                </RightGroup>
                <LeftGroup2>
                    <ExploreClasses>Explore Classes</ExploreClasses>
                    <MyClasses>My Classes</MyClasses>
                    <Notifications>Notifications</Notifications>
                    <NotifCount>
                        <Count>2</Count>
                    </NotifCount>
                    <ProfileImage
                        src={
                            'https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/7b475b2f-5957-4969-bf63-aefad1a2585a.png?alt=media&token=cde4fb52-75da-4210-ab87-d4aa95a42272'
                        }
                    />
                </LeftGroup2>
            </HeaderLoggedIn2>
        </NewRootRoot>
    );
};

const LeftGroup2 = styled.div`
    width: 400px;
    display: flex;
    align-self: left;
    justify-content: space-between;
    align-items: center;
`;

const ExploreClasses = styled.button`
    cursor: pointer;
    border: none;
    background: none;
    font-weight: 500;
`;

const MyClasses = styled.div`
    cursor: pointer;
    border: none;
    background: none;
    font-weight: 500;
`;

const Notifications = styled.div`
    cursor: pointer;
    border: none;
    background: none;
    font-weight: 500;
`;

const NewRootRoot = styled.div``;

const HeaderLoggedIn2 = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Logo2 = styled.img``;

const NotifCount = styled.div`
    width: 20px;
    background: yellow;
    border-radius: 100%;
    aspect-ratio: 1/1;
`;

const Count = styled.div`
    font-size: 12px;
    font-weight: 600;
    display: flex;
    justify-content: center;
`;

const ProfileImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 8px;
`;

const RightGroup = styled.div`
    width: 500px;
    display: flex;
    align-self: right;
    justify-content: space-between;
    align-items: center;
`;
