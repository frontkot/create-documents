import React from 'react';
import Payment from '../Payment/Payment';
import { useSelector } from 'react-redux';
import { getData } from '../../store/inputData/selectors';
import { BlobProvider } from '@react-pdf/renderer';

const PreviewAct = () => {
    const docName = 'Payment.pdf';
    const data = useSelector(getData);
    const {
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
        contract,
        contractDate,
        contractСonditions,
        destination,
        proxy,
        departureMethod,
        CMR,
        shipper,
        consignee,
        nameOfGoods,
        dateOfWorks,
        measure,
        quantity,
        unitPrice,
        withoutVAT,
        VATRate,
        VATTax,
        exciseRate,
        exciseTax,
        price,
        actNumber,
        actDate,
        inventoryUsageInformation,
        numberOfPafes,
        documentsList,
        beneficiary,
        beneficiaryTaxNumber,
        beneficiaryIIK,
        beneficiaryKbe,
        beneficiaryBank,
        beneficiaryBIK,
        beneficiaryBankCode,
        paymentNumber,
        paymentDate,
        totalPayableForAll,
        includingVAT,
        totalItems,
        totalForAmount,
        currency,
        totalPayable,
        executerPosition,
        executerSignature,
        executerFullName,
        clientPosition,
        clientSignature,
        clientFullName,
        dateOfSigning,
        executivePersonSupplier,
        executivePersonSupplierPosition,
        сhiefAccountant,
        tableInfo
     } = data;
        
    return (
            <BlobProvider document={
            <Payment
                fileName={docName}
                client={client}
                clientTaxNumber={clientTaxNumber}
                clientBINNumber={clientBINNumber}
                clientAdress={clientAdress}
                clientBank={clientBank}
                executor={executor}
                executorTaxNumber={executorTaxNumber}
                executorBINNumber={executorBINNumber}
                executorAdress={executorAdress}
                executorBank={executorBank}
                contract={contract}
                contractDate={contractDate}
                contractСonditions={contractСonditions}
                destination={destination}
                proxy={proxy}
                departureMethod={departureMethod}
                CMR={CMR}
                shipper={shipper}
                consignee={consignee}
                nameOfGoods={nameOfGoods}
                dateOfWorks={dateOfWorks}
                measure={measure}
                quantity={quantity}
                unitPrice={unitPrice}
                withoutVAT={withoutVAT}
                VATRate={VATRate}
                VATTax={VATTax}
                exciseRate={exciseRate}
                exciseTax={exciseTax}
                price={price}
                actNumber={actNumber}
                actDate={actDate}
                inventoryUsageInformation={inventoryUsageInformation}
                numberOfPafes={numberOfPafes}
                documentsList={documentsList}
                beneficiary={beneficiary}
                beneficiaryTaxNumber={beneficiaryTaxNumber}
                beneficiaryIIK={beneficiaryIIK}
                beneficiaryKbe={beneficiaryKbe}
                beneficiaryBank={beneficiaryBank}
                beneficiaryBIK={beneficiaryBIK}
                beneficiaryBankCode={beneficiaryBankCode}
                paymentNumber={paymentNumber}
                paymentDate={paymentDate}
                totalPayableForAll={totalPayableForAll}
                includingVAT={includingVAT}
                totalItems={totalItems}
                totalForAmount={totalForAmount}
                currency={currency}
                totalPayable={totalPayable}
                executerPosition={executerPosition}
                executerSignature={executerSignature}
                executerFullName={executerFullName}
                clientPosition={clientPosition}
                clientSignature={clientSignature}
                clientFullName={clientFullName}
                dateOfSigning={dateOfSigning}
                executivePersonSupplier={executivePersonSupplier}
                executivePersonSupplierPosition={executivePersonSupplierPosition}
                сhiefAccountant={сhiefAccountant}     
                tableInfo={tableInfo}               
                />}
            >
                {({ url }) => <iframe src={url} style={{ width: '100%', height: '80vh' }} />}
            </BlobProvider>
    );
};

export default PreviewAct;