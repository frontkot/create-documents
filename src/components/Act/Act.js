import React from 'react';
import Pdf from 'react-to-pdf';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getData } from '../../store/inputData/selectors';

const ref = React.createRef();

const Act = ({
}) => {
    const data = useSelector(getData);
    const {    
        client,
        clientTaxNumber,
        executor,
        executorTaxNumber,
        contract,
        nameOfWorks,
        dateOfWorks,
        measure,
        quantity,
        unitPrice,
        price,
        actNumber,
        actDate,
        inventoryUsageInformation,
        numberOfPafes,
        documentsList,
        executerPosition,
        executerSignature,
        executerFullName,
        clientPosition,
        clientSignature,
        clientFullName,
        dateIfSignin
    } = data;
    console.log(data)

    return (
        <>
            {/* <Link className='page404-button' onClick={history.goBack}>Вернуться назад</Link> */}

            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div ref={ref}>
                <h1>{client}</h1>
                <h2>{clientTaxNumber}</h2>
            </div>
        </>
    );
};

export default Act;