import React from 'react';
import Page404 from '../pages/Page404/Page404';
import { Route, Switch } from "react-router-dom";
import StartPage from '../pages/StartPage/StartPage';
import FillInputs from '../components/FillInputs/FillInputs';
import DocumentsPreview from '../components/DocumentsPreview/DocumentsPreview';
import Act from '../components/Act/Act';
import Invoice from '../components/Invoice/Invoice';
import Payment from '../components/Payment/Payment';


const Aproutes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={StartPage} />
                <Route path='/filling' component={FillInputs} />
                <Route path='/preview' component={DocumentsPreview} />
                <Route path='/act' component={Act} />
                <Route path='/invoice' component={Invoice} />
                <Route path='/payment' component={Payment} />
                <Route path='*' component={(routeProps) => <Page404 {...routeProps}/>} />
            </Switch>
        </>
    );
};

export default Aproutes;