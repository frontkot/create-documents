import React from 'react';
import Invoice from '../Invoice/Invoice';
import { useSelector } from 'react-redux';
import { getData } from '../../store/inputData/selectors';
import { BlobProvider } from '@react-pdf/renderer';
import { Link } from 'react-router-dom';

const PreviewAct = () => {
    const data = useSelector(getData);
    const {
        docNumber,
        docDate,
        client,
        clientTaxNumber,
        clientBINNumber,
        clientAdress,
        clientBank,
        executor,
        executorTaxNumber,
        executorBINNumber,
        executorAdress,
        executorBank,
        beneficiary,
        beneficiaryTaxNumber,
        beneficiaryIIK,
        beneficiaryKbe,
        beneficiaryBank,
        beneficiaryBIK,
        beneficiaryBankCode,
        contract,
        contractDate,
        contractСonditions,
        destination,
        proxy,
        departureMethod,
        CMR,
        shipper,
        consignee,
        totalPayableForAll,
        includingVAT,
        totalItems,
        totalForAmount,
        currency,
        totalPayable,
        inventoryUsageInformation,
        numberOfPafes,
        documentsList,
        executorPosition,
        executorFullName,
        clientPosition,
        clientFullName,
        dateOfSigning,
        executivePersonSupplier,
        executivePersonSupplierPosition,
        сhiefAccountant,
        executerSignature,
        clientSignature,
        tableInfo,
        procedureDate,
        executorIIK,
        clientIIKNumber,
        clientBIKBank,
        VATRate,
        exciseRate

     } = data;
        
    return (
        <>
            <div className='preview-button_block'>
                <Link to='/filling' className='go-button'>Заполнение</Link>
                <Link to='/preview' className='go-button'>Предпросмотр</Link>
            </div>

            <BlobProvider document={
            <Invoice
                    docNumber={docNumber}
                    docDate={docDate}
                    client={client}
                    clientTaxNumber={clientTaxNumber}
                    clientBINNumber={clientBINNumber}
                    clientAdress={clientAdress}
                    clientBank={clientBank}
                    clientIIKNumber={clientIIKNumber}
                    clientBIKBank={clientBIKBank}
                    executor={executor}
                    executorTaxNumber={executorTaxNumber}
                    executorBINNumber={executorBINNumber}
                    executorAdress={executorAdress}
                    executorBank={executorBank}
                    beneficiary={beneficiary}
                    beneficiaryTaxNumber={beneficiaryTaxNumber}
                    beneficiaryIIK={beneficiaryIIK}
                    beneficiaryKbe={beneficiaryKbe}
                    beneficiaryBank={beneficiaryBank}
                    beneficiaryBIK={beneficiaryBIK}
                    beneficiaryBankCode={beneficiaryBankCode}
                    contract={contract}
                    contractDate={contractDate}
                    contractСonditions={contractСonditions}
                    destination={destination}
                    proxy={proxy}
                    departureMethod={departureMethod}
                    CMR={CMR}
                    shipper={shipper}
                    consignee={consignee}
                    totalPayableForAll={totalPayableForAll}
                    includingVAT={includingVAT}
                    totalItems={totalItems}
                    totalForAmount={totalForAmount}
                    currency={currency}
                    totalPayable={totalPayable}
                    inventoryUsageInformation={inventoryUsageInformation}
                    numberOfPafes={numberOfPafes}
                    documentsList={documentsList}
                    executorPosition={executorPosition}
                    executorFullName={executorFullName}
                    clientPosition={clientPosition}
                    clientFullName={clientFullName}
                    dateOfSigning={dateOfSigning}
                    executivePersonSupplier={executivePersonSupplier}
                    executivePersonSupplierPosition={executivePersonSupplierPosition}
                    сhiefAccountant={сhiefAccountant}
                    executerSignature={executerSignature}
                    clientSignature={clientSignature}
                    tableInfo={tableInfo}
                    procedureDate={procedureDate}
                    executorIIK={executorIIK}
                    exciseRate={exciseRate}
                    VATRate={VATRate}
                    

                />}
            >
                {({ url }) => <iframe src={url} style={{ width: '100%', height: '80vh' }} />}
            </BlobProvider>
        </>
    );
};

export default PreviewAct;