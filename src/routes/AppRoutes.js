import React from 'react';
import Page404 from '../pages/Page404/Page404';
import { Route, Switch } from "react-router-dom";
import StartPage from '../pages/StartPage/StartPage';
import FillInputs from '../components/FillInputs/FillInputs';
import DocumentsPreview from '../components/DocumentsPreview/DocumentsPreview';
import PreviewAct from '../components/PreviewAct/PreviewAct';
import PreviewInvoice from '../components/PreviewInvoice/PreviewInvoice';
import PreviewPayment from '../components/PreviewPayment/PreviewPayment';

const Aproutes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={StartPage} />
                <Route path='/filling' component={FillInputs} />
                <Route path='/preview' component={DocumentsPreview} />
                <Route path='/preview-act' component={PreviewAct} />
                <Route path='/preview-invoice' component={PreviewInvoice} />
                <Route path='/preview-payment' component={PreviewPayment} />
                <Route path='*' component={(routeProps) => <Page404 {...routeProps}/>} />
            </Switch>
        </>
    );
};

export default Aproutes;