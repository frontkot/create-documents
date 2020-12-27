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

const Invoice = ({ procedureDate, actNumber, actDate, invoiceNumber, invoiceDate, paymentNumber, paymentDate, client, clientTaxNumber, clientBINNumber, clientAdress, clientBank, executor, executorTaxNumber, executorBINNumber, executorAdress, executorBank, beneficiary, beneficiaryTaxNumber, beneficiaryIIK, beneficiaryKbe, beneficiaryBank, beneficiaryBIK, beneficiaryBankCode, contract, contractDate, contractСonditions, destination, proxy, departureMethod, CMR, shipper, consignee, totalPayableForAll, includingVAT, totalItems, totalForAmount, currency, totalPayable, inventoryUsageInformation, numberOfPafes, documentsList, executerPosition, executerFullName, clientPosition, clientFullName, dateOfSigning, executivePersonSupplier, executivePersonSupplierPosition, сhiefAccountant, executerSignature, clientSignature, tableInfo,}) => {
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
                <View style={styles.docHeader}>
                    <Text>Счет-фактура №</Text>
                    <Text>{invoiceNumber}</Text>
                    <Text>от</Text>
                    <Text>{invoiceDate}</Text>
                </View>
                <View>
                    <Text>Дата совершения оборота:</Text>
                    <Text>{procedureDate}</Text>
                </View>
                <View>
                    <Text>Поставщик</Text>
                    <Text>{executor}</Text>
                </View>
                <View>
                    <Text>БИН и адрес места нахождения поставщика: </Text>
                    <Text>БИН: </Text>
                    <Text>{executorBINNumber}, </Text>
                    <Text>{executorAdress}</Text>
                </View>
                <View>
                    <Text>ИИК поставщик: </Text>
                    <Text>{executorTaxNumber}</Text>
                    <Text>в банке  </Text>

                </View>
                <View>
                    <Text>Договор (контракт) на поставку товаров (работ, услуг): </Text>
                    <Text>{contract} </Text>
                    <Text>от </Text>
                    <Text>{contractDate}</Text>

                </View>
                <View>
                    <Text>Условия оплаты по договору (контракту): </Text>
                    <Text>{contractСonditions}</Text>
                </View>
                <View>
                    <Text>Пункт назначения поставляемых товаров (работ, услуг): </Text>
                    <Text>{}</Text>
                </View>
                <View>
                    <Text>Поставка товаров (работ,услуг) осуществлена по доверенности: </Text>
                    <Text>{}</Text>
                </View>
                <View>
                    <Text>Способ отправления: </Text>
                    <Text>{}</Text>
                </View>
                <View>
                    <Text>Товарно-транспортная накладная: </Text>
                    <Text>{CMR}</Text>
                </View>
                <View>
                    <Text>Грузоотправитель: </Text>
                    <Text>БИН: </Text>
                    <Text>{executorBINNumber}, </Text>
                    <Text>{executorAdress}</Text>

                </View>
                <View>
                    <Text>Грузоотправитель: </Text>
                    <Text>БИН: </Text>
                    <Text>{clientBINNumber}, </Text>
                    <Text>{clientAdress}</Text>
                </View>
                <View>
                    <Text>Получатель: </Text>
                    <Text>{client}</Text>
                </View>
                <View>
                    <Text>БИН и адрес места нахождения получателя: </Text>
                    <Text>БИН: </Text>
                    <Text>{clientBINNumber}, </Text>
                    <Text>{clientAdress}</Text>
                </View>
                <View>
                    <Text>ИИК получателя: </Text>
                    <Text>{clientTaxNumber}, </Text>
                    <Text>в банке  </Text>

                </View>


                <View>
                    <Text>Поставщик</Text>
                    <Text>{}</Text>
                </View>


                <View>
                    <Text>Поставщик</Text>
                    <Text>{}</Text>
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

export default Invoice;