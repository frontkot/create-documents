import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Image } from '@react-pdf/renderer';
import Regular from '../../utils/font/Roboto/Roboto-Regular.ttf';
import Bold from '../../utils/font/Roboto/Roboto-Bold.ttf';
import Italic from '../../utils/font/Roboto/Roboto-Italic.ttf';

Font.register({
    family: 'Roboto',
    fonts: [
        {
            src: Regular
        },
        {
            src: Bold,
            fontWeight: 'bold'
        },
        {
            src: Italic,
            fontWeight: 'normal',
            fontStyle: 'italic'
        },
    ]
})

const styles = StyleSheet.create({
    page: {
        padding: 20,
        fontFamily: 'Roboto',
        fontSize: 8
    },
    
})

const Payment = ({ client, clientTaxNumber, clientBINNumber, clientAdress, clientBank, executor, executorTaxNumber, executorBINNumber, executorAdress, executorBank, contract, contractDate, contractСonditions, destination, proxy, departureMethod, CMR, shipper, consignee, nameOfGoods, dateOfWorks, measure, quantity, unitPrice, withoutVAT, VATRate, VATTax, exciseRate, exciseTax, price, actNumber, actDate, inventoryUsageInformation, numberOfPafes, documentsList, beneficiary, beneficiaryTaxNumber, beneficiaryIIK, beneficiaryKbe, beneficiaryBank, beneficiaryBIK, beneficiaryBankCode, paymentNumber, paymentDate, totalPayableForAll, includingVAT, totalItems, totalForAmount, currency, totalPayable, executerPosition, executerSignature, executerFullName, clientPosition, clientSignature, clientFullName, dateOfSigning, executivePersonSupplier, executivePersonSupplierPosition, сhiefAccountant, tableInfo}) => {
    // const allCosts = tableInfo.map((i) => i.quantity*i.unitPrice);
    // const allQuantity = tableInfo.map((i) => +i.quantity);
    // const sumOfArrItems = (arr) => {
    //   let sum=0; 
    //   if(arr.length !== 0) {
    //     for(let i=0; i<arr.length; i++) {
    //       sum = sum+parseInt(arr[i])
    //     } 
    //   }
    //   return sum;
    // }
    // const fullCost = sumOfArrItems(allCosts);
    // const total = sumOfArrItems(allQuantity);

    return (
        <Document>
            <Page size='A4' style={styles.page}>
                <View>
                    <Text></Text>
                </View>




                <View>
                    <Text></Text>
                </View>
                <View>
                    <Text></Text>
                </View>

            </Page>
        </Document>


    );
};

export default Payment;