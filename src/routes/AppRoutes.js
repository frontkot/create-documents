import React from 'react';
import Page404 from '../pages/Page404/Page404';
import { Route, Switch } from "react-router-dom";
import ChooseDoc from '../pages/ChooseDoc/ChooseDoc';
import StartPage from '../pages/StartPage/StartPage';
import Act from '../components/Act/Act';
import Invoice from '../components/Invoice/Invoice';


const Aproutes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={StartPage} />
                <Route path='/choose-document' component={ChooseDoc} />
                <Route path='/act' component={Act} />
                <Route path='/invoice' component={Invoice} />
                {/* <Route path='/payment' component={} /> */}
                
                <Route path='*' component={(routeProps) => <Page404 {...routeProps}/>} />
            </Switch>
        </>
    );
};

export default Aproutes;