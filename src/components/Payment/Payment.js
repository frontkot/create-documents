import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Image } from '@react-pdf/renderer';
import Regular from '../../utils/font/Roboto/Roboto-Regular.ttf';
import Bold from '../../utils/font/Roboto/Roboto-Bold.ttf';
import Italic from '../../utils/font/Roboto/Roboto-Italic.ttf';
import numberToWordsRu from 'number-to-words-ru';

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
        fontSize: 9,
    },
    pageInfo: {
        marginLeft: 250,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 7,
    },
    formInfo: {
        fontWeight: 'bold',
        marginTop: 10,
    },
    personBlock: {
        flexDirection: 'row',
    },  
    executorMain: {
        width: '60%',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,
        padding: 1,
    },
    exexcutorTitle: {
        fontWeight: 'bold',
    },
    executorBINNumber: {
        fontWeight: 'normal',
        flexDirection: 'row',
    },
    executorIIK: {
        width: '25%',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,
        fontWeight: 'bold',
        padding: 1,
        textAlign: 'center',

    },
    executorKbe: {
        width: '15%',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,
        fontWeight: 'bold',
        padding: 1,
        textAlign: 'center',
    },
    executorName: {
        minHeight: 25,
        fontWeight: 'bold',

    },
    executorNumbers: {
        paddingTop: 10,
    },
    exexcutorBIK: {
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,
        fontWeight: 'bold',
        padding: 1,
        textAlign: 'center',
        width: '15%',

    },
    executorCode: {
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,
        fontWeight: 'bold',
        padding: 1,
        textAlign: 'center',
        width: '25%',
    },
    executorAddNumbers: {
        paddingTop: 5,
        paddingBottom: 5,
    },
    paymentTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        marginTop: 25,
    },
    paymentTitleText: {
        flexDirection: 'row',
    },
    line: {
        marginTop: 5,
        marginBottom: 5,
        width: '100%',
        borderColor: 'black',
        borderStyle: 'solid',
        borderBottom: 3,
    },
    shipmentInfo: {
        flexDirection: 'row',
        marginTop: 10,
    },
    shipmentPerson: {
        width: '15%',
    },
    shipmentData: {
        width: '85%',
        fontWeight: 'bold',
        flexDirection: 'row',
    },
    contractInfo: {
        flexDirection: 'row',
        marginTop: 10,
    },  
    contractData: {
        flexDirection: 'row',
    },
    tableHeader: {
        marginTop: 10,
        fontWeight: 'bold',
    },
    tableRow: {
        flexDirection: 'row',
        marginTop: -0.5,
        marginBottom: -0.5,
    },  
    firstCol: {
        width: '4%',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondCol: {
        width: '10%',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    thirdCol: {
        width: '37%',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 3,
        paddingRight: 3,

    },
    fourthCol: {
        width: '10%',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    fifthCol: {
        width: '10%',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    sixthCol: {
        width: '15%',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    seventhCol: {
        width: '15%',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tableFooter: {
        width: '100%',
        paddingTop: 10,
    },
    fullCost: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-end',
        fontWeight: 'bold',
    },
    VATsize: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-end',
        fontWeight: 'bold',
    },
    totalInfo: {
        width: '15%',
        textAlign: 'right',
        paddingRight: 5,


    },
    fullCostText: {
        width: '15%',
        textAlign: 'right',
        paddingRight: 5,
    },
    fullCostData: {
        flexDirection: 'row',
    },
    fullCostInfo: {
        marginTop: 10,
    },
    fullCostInWord: {
        fontWeight: 'bold',
        flexDirection: 'row',
    },
    signatureBlock: {
        flexDirection: 'row',
        position: 'relative',
        marginTop: 13,
    },
    executorSecondName: {
        width: '40%',
        borderBottom: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        marginLeft: 10,
    },
    executorSignatureView: {
        position: 'absolute',
        top: -30,
        left: 320,
        width: 70,
    },
    executorStampView: {
        position: 'absolute',
        top: -30,
        left: 350,
        width: 70,
    },
    template: {
        position: 'absolute',
        fontSize: 100,
        top: '30%',
        left: '20%',
        opacity: 0.5,
    },
    
    
    
})

const Payment = ({ docDate, docNumber, VATRate, procedureDate, paymentNumber, paymentDate, client, clientBINNumber, clientAdress, clientBank, clientIIKNumber, clientBIKBank, executor, executorBINNumber, executorAdress, executorIIK, executorBank, beneficiary, beneficiaryTaxNumber, executorKbe, executorBankBIK, executorBankCode, contract, contractDate, contractСonditions, destination, proxy, departureMethod, CMR, shipper, consignee, totalPayableForAll, includingVAT, totalItems, totalForAmount, currency, inventoryUsageInformation, numberOfPafes, documentsList, executorPosition, executorFullName, executivePersonSupplier, executivePersonSupplierPosition, clientPosition, clientFullName, сhiefAccountant, dateOfSigning, tableInfo,}) => {
    const allCosts = tableInfo.map((i) => i.quantity*i.unitPrice);
    const allQuantity = tableInfo.map((i) => +i.quantity);

    const executorSignature = localStorage.getItem('executorSignature');
    const executorStamp = localStorage.getItem('executorStamp');
    // const clientSignature = localStorage.getItem('clientSignature');
    // const clientStamp = localStorage.getItem('clientStamp');
  

    const sumOfArrItems = (arr) => {
      let sum=0; 
      if(arr.length !== 0) {
        for(let i=0; i<arr.length; i++) {
          sum = sum+parseInt(arr[i])
        } 
      }
      return sum;
    }
    const fullCost = sumOfArrItems(allCosts);
    const total = sumOfArrItems(allQuantity);
    const totalVAT = VATRate === '100' ? 0 :  Math.round(sumOfArrItems(allCosts)*VATRate/100);
    const totalPay = fullCost + totalVAT;
    const totalPayWord =  numberToWordsRu.convert(totalPay, {
            currency: {
            currencyNameCases: ['тенге', 'тенге', 'тенге'],
            fractionalPartNameCases: ['тиын', 'тиын', 'тиын'],
            currencyNounGender: {
                    integer: 2,
                    fractionalPart: 0,
                },
            }
        }
    );

    const TableRow = ({ docDate, docNumber, num, nameOfGoods, measure, quantity, unitPrice, productCode}) => (
        <View style={styles.tableRow}>
          <View style={styles.firstCol}>
            <View style={styles.tableCell}>
              <Text>{num} </Text>
            </View>
          </View>
          <View style={styles.secondCol}>
            <View style={styles.tableCell}>
              <Text>{productCode} </Text>
            </View>
          </View>    
          <View style={styles.thirdCol}>
            <View style={styles.tableCell}>
              <Text>{nameOfGoods} </Text>
            </View>
          </View>
          <View style={styles.fourthCol}>
            <View style={styles.tableCell}>
              <Text>{quantity} </Text>
            </View>
          </View>
          <View style={styles.fifthCol}>
            <View style={styles.tableCell}>
              <Text>{measure} </Text>
            </View>
          </View>
          <View style={styles.sixthCol}>
            <View style={styles.tableCell}>
              <Text>{unitPrice} </Text>
            </View>
          </View>
          <View style={styles.seventhCol}>
            <View style={styles.tableCell}>
              <Text>{unitPrice*quantity} </Text>
            </View>
          </View>
        </View>
    )

    const tableArr = tableInfo.map((i, index) => (
        <TableRow 
            key={index}
            num={index+1}
            nameOfGoods={i.nameOfGoods}
            VATRate={VATRate}
            measure={i.measure}
            quantity={i.quantity}
            unitPrice={i.unitPrice}
            productCode={i.productCode}
        />
        )
    )


    return (
        <Document>
            <Page size='A4' style={styles.page}>
                <View style={styles.template}>
                    <Text>Образец</Text>
                </View>

                <View style={styles.pageInfo}>
                    <View style={styles.pageInfoDescription}>
                        <Text>Внимание! Оплата данного счета означает согласие с условиями поставки товара. Уведомление об оплате обязательно, в противном случае не гарантируется наличие товара на складе. Товар отпускается по факту прихода денег на р/с Поставщика, самовывозом, при наличии доверенности и документов удостоверяющих личность.</Text>
                    </View>
                </View>

                <View style={styles.formInfo}>
                    <View style={styles}>
                        <Text>Образец платежного поручения</Text>
                    </View>
                </View>

                <View style={styles.personBlock}>
                    <View style={styles.executorMain}>
                        <View style={styles.executorTitle}>
                            <Text>Бенефециар:</Text>
                        </View>
                        <View style={styles.executorName}>
                            <Text>{executor}</Text>
                        </View>
                        <View style={styles.executorBINNumber}>
                            <Text>БИН: </Text>
                            <Text>{executorBINNumber} </Text>
                        </View>
                    </View>
                    <View style={styles.executorIIK}>
                        <View style={styles}>
                            <Text>ИИК</Text>
                        </View>
                        <View style={styles.executorNumbers}>
                            <Text>{executorIIK}</Text>
                        </View>
                    </View>
                    <View style={styles.executorKbe}>
                        <View style={styles}>
                            <Text>Кбе</Text>
                        </View>
                        <View style={styles.executorNumbers}>
                            <Text>{executorKbe}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.personBlock}>
                    <View style={styles.executorMain}>
                        <View style={styles}>
                            <Text>Банк бенефециара: </Text>
                        </View>
                        <View style={styles}>
                            <Text>{executorBank}</Text>
                        </View>
                    </View>
                    <View style={styles.exexcutorBIK}>
                        <View style={styles}>
                            <Text>БИК</Text>
                        </View>
                        <View style={styles.executorAddNumbers}>
                            <Text>{executorBankBIK}</Text>
                        </View>
                    </View>
                    <View style={styles.executorCode}>
                        <View style={styles}>
                            <Text>Код назначения платежа</Text>
                        </View>
                        <View style={styles.executorAddNumbers}>
                            <Text>{executorBankCode}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.paymentTitle}>
                    <View style={styles.paymentTitleText}>
                        <Text>Счет на оплату №</Text>
                        <Text>{docNumber} </Text>
                        <Text>от </Text>
                        <Text>{docDate}</Text>
                    </View>
                </View>

                <View style={styles.line}>
                    <View style={styles}>
                        <Text></Text>
                    </View>
                </View>

                <View style={styles.shipmentInfo}>
                    <View style={styles.shipmentPerson}>
                        <Text>Поставщик:</Text>
                    </View>
                    <View style={styles.shipmentData}>
                        <Text>{executor}, </Text>
                        <Text>{executorAdress} </Text>
                    </View>

                </View>
                <View style={styles.shipmentInfo}>
                    <View style={styles.shipmentPerson}>
                        <Text>Покупатель: </Text>
                    </View>
                    <View style={styles.shipmentData}>
                        <Text>ИИН/БИН: </Text>
                        <Text>{clientBINNumber}, </Text>
                        <Text>{client}, </Text>
                        <Text>{clientAdress}</Text>
                        <Text></Text>
                    </View>
                </View>

                <View style={styles.contractInfo}>
                    <View style={styles}>
                        <Text>Договор: </Text>
                    </View>
                    <View style={styles.contractData}>
                        <Text>{contract} </Text>
                        <Text>{contractDate ? `от ${contractDate}` : ' '}</Text>
                    </View>
                </View>

                <View style={styles.tableHeader}>
                    <View style={styles.tableRow}>
                        <View style={styles.firstCol}>
                            <View style={styles}>
                                <Text>№</Text>
                            </View>
                        </View>
                        <View style={styles.secondCol}>
                            <View style={styles}>
                                <Text>Код</Text>
                            </View>
                        </View>
                        <View style={styles.thirdCol}>
                            <View style={styles}>
                                <Text>Наименование</Text>
                            </View>
                        </View>
                        <View style={styles.fourthCol}>
                            <View style={styles}>
                                <Text>Кол-во</Text>
                            </View>
                        </View>
                        <View style={styles.fifthCol}>
                            <View style={styles}>
                                <Text>Ед.</Text>
                            </View>
                        </View>
                        <View style={styles.sixthCol}>
                            <View style={styles}>
                                <Text>Цена</Text>
                            </View>
                        </View>
                        <View style={styles.seventhCol}>
                            <View style={styles}>
                                <Text>Сумма</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    {tableArr}
                </View>
                <View style={styles.tableFooter}>
                    <View style={styles.fullCost}>
                        <View style={styles.fullCostText}>
                            <Text>Итого: </Text>
                        </View>
                        <View style={styles.totalInfo}>
                            <Text>{`${totalPay}.00`}</Text>
                        </View>
                    </View>
                    <View style={styles.VATsize}>
                        <View style={styles.fullCostText}>
                            <Text>В том числе НДС: </Text>
                        </View>
                        <View style={styles.totalInfo}>
                            <Text>{`${totalVAT}.00`}</Text>
                        </View>
                    </View>
                    <View style={styles.fullCostInfo}>
                        <View style={styles.fullCostData}>
                            <Text>Всего наименований </Text>
                            <Text>{total}, </Text>
                            <Text>на сумму </Text>
                            <Text>{`${totalPay}.00`} </Text>
                            <Text>{currency}</Text>
                        </View>
                        <View style={styles.fullCostInWord}>
                            <Text>Всего к оплате: </Text>
                            <Text>{totalPayWord}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.line}>
                    <View style={styles}>
                        <Text></Text>
                    </View>
                </View>

                <View style={styles.signatureBlock}>
                    <View style={styles}>
                        <Text>Исполнитель </Text>
                    </View>
                    <View style={styles.executorSecondName}>
                        <Text>{executor}</Text>
                    </View>
                    <View style={styles.executorSignatureField}>
                        <Text> // </Text>
                    </View>
                    <View style={styles.executorSignatureView}>
                        <Image id='executorSignature' src={executorSignature !== null ? executorSignature : ' '} style={styles.executorSignature} alt='executorSignature'/>
                    </View>
                    <View style={styles.executorStampView}>
                        <Image id='executorStamp' src={executorStamp !== null ? executorStamp : ' '} style={styles.executorStamp} alt='executorStamp'/>
                    </View>
                </View>





            </Page>
        </Document>


    );
};

export default Payment;