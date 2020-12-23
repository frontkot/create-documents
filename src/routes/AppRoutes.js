import React from 'react';
import Page404 from '../pages/Page404/Page404';
import { Route, Switch } from "react-router-dom";
import StartPage from '../pages/StartPage/StartPage';
import FillInputs from '../components/FillInputs/FillInputs';


const Aproutes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={StartPage} />
                <Route path='/filling' component={FillInputs} />
                {/* <Route path='/preview' component={Preview} /> */}
                <Route path='*' component={(routeProps) => <Page404 {...routeProps}/>} />
            </Switch>
        </>
    );
};

export default Aproutes;