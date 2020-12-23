import React from 'react';
import Pdf from 'react-to-pdf';
import { Link } from 'react-router-dom';

const ref = React.createRef();

const Invoice = ({
    // client,
    // clientTaxNumber,
    // executor,
    // executorTaxNumber,
    // contract,
    // nameOfWorks,
    // dateOfWorks,
    // measure,
    // quantity,
    // unitPrice,
    // price,
    // actNumber,
    // actDate,
    // inventoryUsageInformation,
    // numberOfPafes,
    // documentsList,
    // executerPosition,
    // executerSignature,
    // executerFullName,
    // clientPosition,
    // clientSignature,
    // clientFullName,
    // dateIfSignin
}) => {
    return (
        <>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div ref={ref}>
                <h1>Hello CodeSandbox</h1>
                <h2>Start editing to see some magic happen!</h2>
            </div>
        </>
    );
};

export default Invoice;