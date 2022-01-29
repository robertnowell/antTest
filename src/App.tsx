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
                        <HeaderLoggedIn21 />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export const HeaderLoggedIn21 = ({}) => {
    return <HeaderLoggedIn1 className={'none'} />;
};
const HeaderLoggedIn1 = ({className}) => {
    return (
        <HeaderLoggedIn className={className}>
            <Group>
                <Group105
                    src={
                        'https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/ecac6dec-924b-43cf-ae31-a9620cc8ef52.svg?alt=media&token=efdc9bfb-deb6-4e9f-bb8a-85d128466a6e'
                    }
                />
                <Rectangle223>
                    <Beta>Beta</Beta>
                </Rectangle223>
            </Group>
            <Rectangle3>
                <Search1
                    src={
                        'https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/d5ba6524-8b69-49ad-9b4d-29f3a486aa77.svg?alt=media&token=d5cea140-a16b-41cf-80fb-78919406f6b8'
                    }
                />
                <Search>Search...</Search>
            </Rectangle3>
            <ExploreClasses>Explore Classes</ExploreClasses>
            <MyClasses>My Classes</MyClasses>
            <Notifications>Notifications</Notifications>
            <Group2>
                <Ellipse1
                    src={
                        'https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/b50c3759-df14-4cf5-bf01-069c59ba16db.svg?alt=media&token=412492fc-e1e3-4364-8524-8feebb6c6372'
                    }
                />
                <_2>2</_2>
            </Group2>
            <Rectangle214
                src={
                    'https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/8a17a0a8-c0a5-4235-ae45-cfeb2fec1a51.png?alt=media&token=6f137573-3eb6-4648-a062-e7eee74f2acb'
                }
            />
        </HeaderLoggedIn>
    );
};
const HeaderLoggedIn = styled.div`
    width: 1240px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const Group = styled.div`
    align-self: stretch;
    width: 147.18px;
    margin-right: 64.04px;
    height: 70px;
    position: relative;
`;
const Group105 = styled.img`
    width: 147.18px;
    height: 44px;
    position: absolute;
    top: 13px;
    left: 0;
`;
const Rectangle223 = styled.div`
    background-color: #000000;
    position: absolute;
    top: 8px;
    left: 58px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 2px;
`;
const Beta = styled.div`
    color: #ffffff;
    text-align: center;
    width: 26px;
    height: 12px;
    font-size: 6px;
    font-family: Poppins;
    font-weight: 600;
    letter-spacing: 0.6px;
    line-height: 9.6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Rectangle3 = styled.div`
    border-width: 1px;
    border-color: #000000;
    border-style: solid;
    width: 120px;
    margin-right: 363.78px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 15px;
    padding-left: 6px;
    padding-right: 6px;
    align-items: center;
    border-radius: 10px;
`;
const Search1 = styled.img`
    width: 16px;
    height: 16px;
`;
const Search = styled.div`
    color: #000000;
    width: 78px;
    height: 46px;
    font-size: 14px;
    font-family: Poppins;
    font-weight: 500;
    line-height: 22.4px;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
`;
const ExploreClasses = styled.div`
    color: #000000;
    text-align: right;
    width: 120px;
    height: 70px;
    font-size: 14px;
    font-family: Poppins;
    font-weight: 500;
    line-height: 18.2px;
    margin-right: 74px;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: center;
`;
const MyClasses = styled.div`
    color: #000000;
    text-align: right;
    width: 83px;
    height: 70px;
    font-size: 14px;
    font-family: Poppins;
    font-weight: 500;
    line-height: 18.2px;
    margin-right: 62px;
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: center;
`;
const Notifications = styled.div`
    color: #000000;
    text-align: right;
    width: 91px;
    height: 70px;
    font-size: 14px;
    font-family: Poppins;
    font-weight: 500;
    line-height: 18.2px;
    margin-right: 6px;
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: center;
`;
const Group2 = styled.div`
    align-self: stretch;
    width: 20px;
    margin-right: 37px;
    height: 70px;
    position: relative;
`;
const Ellipse1 = styled.img`
    width: 20px;
    height: 20px;
    box-shadow: 1px 1px 0px 0px #000000;
    position: absolute;
    top: 25px;
    left: 0;
`;
const _2 = styled.div`
    color: #000000;
    text-align: center;
    width: 20px;
    height: 20px;
    font-size: 12px;
    font-family: Poppins;
    font-weight: 600;
    line-height: 15.6px;
    position: absolute;
    top: 25px;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Rectangle214 = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 8px;
`;
