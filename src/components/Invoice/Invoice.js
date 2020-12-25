import React from 'react';
// import Pdf from 'react-to-pdf';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { getData } from '../../store/inputData/selectors';

// const ref = React.createRef();

const Invoice = () => {
    // const data = useSelector(getData);
    // const {    
    //     client,
    //     clientTaxNumber,
    //     clientBINNumber,
    //     clientAdress,
    //     clientBank,
    //     executor,
    //     executorTaxNumber,
    //     executorBINNumber,
    //     executorAdress,
    //     executorBank,
    //     contract,
    //     contractDate,
    //     contractСonditions,
    //     destination,
    //     proxy,
    //     departureMethod,
    //     CMR,
    //     shipper,
    //     consignee,
    //     nameOfGoods,
    //     dateOfWorks,
    //     measure,
    //     quantity,
    //     unitPrice,
    //     withoutVAT,
    //     VATRate,
    //     VATTax,
    //     exciseRate,
    //     exciseTax,
    //     price,
    //     actNumber,
    //     actDate,
    //     inventoryUsageInformation,
    //     numberOfPafes,
    //     documentsList,
    //     beneficiary,
    //     beneficiaryTaxNumber,
    //     beneficiaryIIK,
    //     beneficiaryKbe,
    //     beneficiaryBank,
    //     beneficiaryBIK,
    //     beneficiaryBankCode,
    //     paymentNumber,
    //     paymentDate,
    //     totalPayableForAll,
    //     includingVAT,
    //     totalItems,
    //     totalForAmount,
    //     currency,
    //     totalPayable,
    //     executerPosition,
    //     executerSignature,
    //     executerFullName,
    //     clientPosition,
    //     clientSignature,
    //     clientFullName,
    //     dateOfSigning,
    //     executivePersonSupplier,
    //     executivePersonSupplierPosition,
    //     сhiefAccountant,  
    // } = data;

    return (
        <>
            <Link to='/preview' className='go-button'>Вернуться на старницу превью документов</Link>
            <Link to='/filling' className='go-button'>Вернуться к редактированию документов</Link>

            {/* <Pdf targetRef={ref} filename={`Счет-фактура № от.pdf`}>
                {({ toPdf }) => <button onClick={toPdf}>Сохранить в ПДФ</button>}
            </Pdf>
            <div ref={ref} className='invoice'>
                {client && <p>{client}</p>}
                {clientTaxNumber && <p>{clientTaxNumber}</p>}
                {executor && <p>{executor}</p>}
                {executorTaxNumber && <p>{executorTaxNumber}</p>}
                {contract && <p>{contract}</p>}
                {nameOfGoods && <p>{nameOfGoods}</p>}
                {dateOfWorks && <p>{dateOfWorks}</p>}
                {measure && <p>{measure}</p>}
                {quantity && <p>{quantity}</p>}
                {unitPrice && <p>{unitPrice}</p>}
                {price && <p>{price}</p>}

                {executerPosition && <p>{executerPosition}</p>}
                {executerSignature && <p>{executerSignature}</p>}
                {executerFullName && <p>{executerFullName}</p>}
                {clientPosition && <p>{clientPosition}</p>}
                {clientSignature && <p>{clientSignature}</p>}
                {clientFullName && <p>{clientFullName}</p>}
                {dateOfSigning && <p>{dateOfSigning}</p>}
            </div> */}
        </>
    );
};

export default Invoice;