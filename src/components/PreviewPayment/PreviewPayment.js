import React from 'react';
import Payment from '../Payment/Payment';
import { useSelector } from 'react-redux';
import { getData } from '../../store/inputData/selectors';
import { BlobProvider } from '@react-pdf/renderer';

const PreviewAct = () => {
    const docName = 'Payment.pdf';
    const data = useSelector(getData);
    const {
        actNumber,
        actDate,
        invoiceNumber,
        invoiceDate,
        procedureDate,
        paymentNumber,
        paymentDate,
        client,
        clientBINNumber,
        clientAdress,
        clientBank,
        clientIIKNumber,
        clientBIKBank,
        executor,
        executorBINNumber,
        executorAdress,
        executorIIK,
        executorBank,
        beneficiary,
        beneficiaryTaxNumber,
        executorKbe,
        executorBankBIK,
        executorBankCode,
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
        executerSignature,
        executivePersonSupplier,
        executivePersonSupplierPosition,
        clientPosition,
        clientFullName,
        clientSignature,
        сhiefAccountant,
        dateOfSigning,
        tableInfo,
     } = data;
        
    return (
            <BlobProvider document={
            <Payment
                actNumber={actNumber}
                actDate={actDate}
                invoiceNumber={invoiceNumber}
                invoiceDate={invoiceDate}
                procedureDate={procedureDate}
                paymentNumber={paymentNumber}
                paymentDate={paymentDate}
                client={client}
                clientBINNumber={clientBINNumber}
                clientAdress={clientAdress}
                clientBank={clientBank}
                clientIIKNumber={clientIIKNumber}
                clientBIKBank={clientBIKBank}
                executor={executor}
                executorBINNumber={executorBINNumber}
                executorAdress={executorAdress}
                executorIIK={executorIIK}
                executorBank={executorBank}
                beneficiary={beneficiary}
                beneficiaryTaxNumber={beneficiaryTaxNumber}
                executorKbe={executorKbe}
                executorBankBIK={executorBankBIK}
                executorBankCode={executorBankCode}
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
                executerSignature={executerSignature}
                executivePersonSupplier={executivePersonSupplier}
                executivePersonSupplierPosition={executivePersonSupplierPosition}
                clientPosition={clientPosition}
                clientFullName={clientFullName}
                clientSignature={clientSignature}
                сhiefAccountant={сhiefAccountant}
                dateOfSigning={dateOfSigning}  
                tableInfo={tableInfo}               
                />}
            >
                {({ url }) => <iframe src={url} style={{ width: '100%', height: '80vh' }} />}
            </BlobProvider>
    );
};

export default PreviewAct;