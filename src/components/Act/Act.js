import React from 'react';
import Pdf from 'react-to-pdf';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getData } from '../../store/inputData/selectors';

const ref = React.createRef();

const Act = () => {
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
            <Link to='/preview' className='go-button'>Вернуться на старницу превью документов</Link>
            <Link to='/filling' className='go-button'>Вернуться к редактированию документов</Link>

            <Pdf targetRef={ref} filename={`Aкт выполненых работ №${actNumber} от ${actDate}.pdf`}>
                {({ toPdf }) => <button onClick={toPdf}>Сохранить в ПДФ</button>}
            </Pdf>
            <div ref={ref} className='act'>
                <p>{client}</p>
                <p>{clientTaxNumber}</p>
                <p>{executor}</p>
                <p>{executorTaxNumber}</p>
                <p>{contract}</p>
                <p>{nameOfWorks}</p>
                <p>{dateOfWorks}</p>
                <p>{measure}</p>
                <p>{quantity}</p>
                <p>{unitPrice}</p>
                <p>{price}</p>
                <p>{actNumber}</p>
                <p>{actDate}</p>
                <p>{inventoryUsageInformation}</p>
                <p>{numberOfPafes}</p>
                <p>{documentsList}</p>
                <p>{executerPosition}</p>
                <p>{executerSignature}</p>
                <p>{executerFullName}</p>
                <p>{clientPosition}</p>
                <p>{clientSignature}</p>
                <p>{clientFullName}</p>
                <p>{dateIfSignin}</p>
            </div>
        </>
    );
};

export default Act;