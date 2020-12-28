import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Image } from '@react-pdf/renderer';
import Regular from '../../utils/font/Roboto/Roboto-Regular.ttf';
import Bold from '../../utils/font/Roboto/Roboto-Bold.ttf';
import Italic from '../../utils/font/Roboto/Roboto-Italic.ttf';
import { string } from 'prop-types';

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
    docHeader: {
        flexDirection: 'row',
        fontSize: 13,
        fontWeight: 'bold',
        justifyContent: 'center',
        paddingTop: 15,
        paddingBottom: 15,
    },
    simpleRow: {
        flexDirection: 'row',
        width: '100%',
        borderBottom: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        paddingTop: 1,
    }, 
    simpleRowBold: {
        flexDirection: 'row',
        width: '100%',
        borderBottom: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        paddingTop: 1,
        fontWeight: 'bold',
    }, 
    underSimpleRow: {
        fontStyle: 'italic',
        fontSize: 7,
        textAlign: "center",
    },
    signatureBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10,
    },
    signatureRightSide: {
        width: '50%',
    },
    signatureLeftSide: {
        width: '35%',
    },
    signatureRowBold: {
        fontWeight: 'bold',
        flexDirection: 'row',
        paddingTop: 1,
    },
    signatureUnderRow:{
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: 7,

    },
    signatureRowLine: {
        borderColor: 'black',
        borderStyle: 'solid',
        borderBottom: 1,
        width: '100%',
        paddingTop: 1,
    },
    tableHeader: {
        marginTop: 10,
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
    },
    firstCol: {
        width: '3vw'
    },
    secondCol: {
        width: '18vw'
    },
    thirdCol: {
        width: '5vw'
    },
    fourthCol: {
        width: '7vw'
    },
    fifthCol: {
        width: '8vw'
    },
    sixthCol: {
        width: '10vw'
    },
    sevAndEghCol: {
        width: '16vw'
    },
    seventhCol: {
        width: '8vw'
    },
    eighthCol: {
        width: '8vw'
    },
    ninethCol: {
        width: '10vw'
    },
    tenAndElevCol: {
        width: '16vw'
    },
    tenthCol: {
        width: '8vw'
    },
    eleventhCol: {
        width: '8vw'
    },
    mainRow: {
        height: 50,
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    topRow: {
        height: 31,
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,
        flexDirection: 'row',
        alignItems: 'center',


    }, 
    bottomRow: {
        height: 20,
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,
        flexDirection: 'row',
        alignItems: 'center',


    },
    numsRow: {
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,
    },
    bottomRowNum: {
        flexDirection: 'row',
    },

    tableRow: {
        textAlign: 'center',
        fontSize: 7,
        flexDirection: 'row',
    },
    tableCell: {
    borderColor: 'black',
    border: 1,
    borderStyle: 'solid',
    margin: -0.5,
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
    },
    totalInfo: {
        width: '41.15vw',
        borderColor: 'black',
        border: 1,
        borderStyle: 'solid',
        margin: -0.5,
        textAlign: 'left',
        paddingLeft: 3,
        fontWeight: 'bold',
    },
    
})

const Invoice = ({ procedureDate, actNumber, actDate, invoiceNumber, invoiceDate, paymentNumber, paymentDate, client, clientTaxNumber, clientBINNumber, clientAdress, clientBank, clientIIKNumber, clientBIKBank, executor, executorIIK, executorBINNumber, executorAdress, executorBank, executorTaxNumber, executorKbe, executorBIK, executorBankCode, contract, contractDate, contractСonditions, destination, proxy, departureMethod, CMR, shipper, consignee, totalPayableForAll, includingVAT, totalItems, totalForAmount, currency, totalPayable, inventoryUsageInformation, numberOfPafes, documentsList, executorPosition, executorFullName, clientPosition, clientFullName, dateOfSigning, executivePersonSupplier, executivePersonSupplierPosition, сhiefAccountant, executerSignature, clientSignature, tableInfo,}) => {
    const allCosts = tableInfo.map((i) => i.quantity*i.unitPrice);
    const allVAT = tableInfo.map((i) => isNaN(i.VATRate) ? 0 : (i.VATRate/100*i.quantity*i.unitPrice))
    const allExciseRate = tableInfo.map((i) => isNaN(i.exciseRate) ? 0 : (i.exciseRate/100*i.quantity*i.unitPrice))

    const sumOfArrItems = (arr) => {
        let sum=0; 
        console.log(arr)
        if(arr.length !== 0) {
            for(let i=0; i<arr.length; i++) {
            sum = sum+arr[i];
            } 
        }
        return sum;
    }

    const fullCost = sumOfArrItems(allCosts);
    const totalVAT = Math.ceil(sumOfArrItems(allVAT)) === 0 ? ' ' : sumOfArrItems(allVAT);
    const totalExciseRate = Math.ceil(sumOfArrItems(allExciseRate)) === 0 ? ' ' : sumOfArrItems(allExciseRate);
    console.log(totalExciseRate)
    console.log(totalVAT)


    const TableRow = ({ num, nameOfGoods, VATRate, measure, quantity, unitPrice, exciseRate}) => (
        <View style={styles.tableRow}>
          <View style={styles.firstCol}>
            <View style={styles.tableCell}>
              <Text>{num} </Text>
            </View>
          </View>
          <View style={styles.secondCol}>
            <View style={styles.tableCell}>
              <Text>{nameOfGoods} </Text>
            </View>
          </View>    
          <View style={styles.thirdCol}>
            <View style={styles.tableCell}>
              <Text>{measure} </Text>
            </View>
          </View>
          <View style={styles.fourthCol}>
            <View style={styles.tableCell}>
              <Text>{quantity} </Text>
            </View>
          </View>
          <View style={styles.fifthCol}>
            <View style={styles.tableCell}>
              <Text>{unitPrice} </Text>
            </View>
          </View>
          <View style={styles.sixthCol}>
            <View style={styles.tableCell}>
              <Text>{unitPrice*quantity} </Text>
            </View>
          </View>
          <View style={styles.seventhCol}>
            <View style={styles.tableCell}>
              <Text>{VATRate} </Text>
            </View>
          </View>
          <View style={styles.eighthCol}>
            <View style={styles.tableCell}>
              <Text>{(isNaN(VATRate)) ? ' ' : unitPrice*quantity*VATRate/100}</Text>
            </View>
          </View>
          <View style={styles.ninethCol}>
            <View style={styles.tableCell}>
              <Text>{(isNaN(+VATRate)) ? ' ' : ((VATRate/100 + 1)*unitPrice*quantity)}</Text>
            </View>
          </View>
          <View style={styles.tenthCol}>
            <View style={styles.tableCell}>
              <Text>{exciseRate}</Text>
            </View>
          </View>
          <View style={styles.eleventhCol}>
            <View style={styles.tableCell}>
              <Text>{isNaN(+exciseRate) ? ' ' : (unitPrice*quantity + unitPrice*exciseRate/100)}</Text>
            </View>
          </View>
        </View>
      )

    const tableArr = tableInfo.map((i, index) => (
      <TableRow 
        key={index}
        num={index+1}
        nameOfGoods={i.nameOfGoods}
        VATRate={i.VATRate}
        measure={i.measure}
        quantity={i.quantity}
        unitPrice={i.unitPrice}
        exciseRate={i.exciseRate}
      />
    )
  )

    

    return (
        <Document>
            <Page size='A4' style={styles.page}>
                <View style={styles.docHeader}>
                    <Text>Счет-фактура № </Text>
                    <Text>{invoiceNumber} </Text>
                    <Text>от </Text>
                    <Text>{invoiceDate}</Text>
                </View>
                <View style={styles.simpleRow}>
                    <Text>Дата совершения оборота: </Text>
                    <Text>{procedureDate}</Text>
                </View>
                <View style={styles.simpleRowBold}>
                    <Text>Поставщик: </Text>
                    <Text>{executor}</Text>
                </View>
                <View style={styles.simpleRow}>
                    <Text>БИН и адрес места нахождения поставщика: </Text>
                    <Text>БИН: </Text>
                    <Text>{executorBINNumber}, </Text>
                    <Text>{executorAdress}</Text>
                </View>
                <View style={styles.simpleRow}>
                    <Text>ИИК поставщик: </Text>
                    <Text>{executorIIK} </Text>
                    <Text>в банке </Text>
                    <Text>{executorBank} </Text>
                </View>
                <View style={styles.simpleRow}>
                    <Text>Договор (контракт) на поставку товаров (работ, услуг): </Text>
                    <Text>{contract} </Text>
                    <Text>от </Text>
                    <Text>{contractDate}</Text>

                </View>
                <View style={styles.simpleRow}>
                    <Text>Условия оплаты по договору (контракту): </Text>
                    <Text>{contractСonditions}</Text>
                </View>
                <View style={styles.simpleRow}>
                    <Text>Пункт назначения поставляемых товаров (работ, услуг): </Text>
                    <Text>{destination}</Text>
                </View>
                <View style={styles.underSimpleRow}>
                    <Text>государство, регион, область, город, район</Text>
                </View>
                <View style={styles.simpleRow}>
                    <Text>Поставка товаров (работ,услуг) осуществлена по доверенности: </Text>
                    <Text>{proxy}</Text>
                </View>
                <View style={styles.simpleRow}>
                    <Text>Способ отправления: </Text>
                    <Text>{departureMethod}</Text>
                </View>
                <View style={styles.simpleRow}>
                    <Text>Товарно-транспортная накладная: </Text>
                    <Text>{CMR}</Text>
                </View>
                <View style={styles.simpleRow}>
                    <Text>Грузоотправитель: </Text>
                    <Text>БИН: </Text>
                    <Text>{executorBINNumber}, </Text>
                    <Text>{executorAdress}</Text>
                </View>
                <View style={styles.underSimpleRow}>
                    <Text>(БИН, наименование и адрес)</Text>
                </View>
                <View style={styles.simpleRow}>
                    <Text>Грузоотправитель: </Text>
                    <Text>БИН: </Text>
                    <Text>{clientBINNumber}, </Text>
                    <Text>{clientAdress}</Text>
                </View>
                <View style={styles.underSimpleRow}>
                    <Text>(БИН, наименование и адрес)</Text>
                </View>
                <View style={styles.simpleRowBold}>
                    <Text>Получатель: </Text>
                    <Text>{client}</Text>
                </View>
                <View style={styles.simpleRow}>
                    <Text>БИН и адрес места нахождения получателя: </Text>
                    <Text>БИН: </Text>
                    <Text>{clientBINNumber}, </Text>
                    <Text>{clientAdress}</Text>
                </View>
                <View style={styles.simpleRow}>
                    <Text>ИИК получателя: </Text>
                    <Text>{clientIIKNumber}, </Text>
                    <Text>в банке  </Text>
                    <Text>{clientBank} </Text>
                    <Text>БИК </Text>
                    <Text>{clientBIKBank}</Text>
                </View>
                <View style={styles.tableHeader}>
                    <View style={styles.firstCol}>
                        <View style={styles.mainRow}>
                            <Text>№ п/п</Text>
                        </View>
                        <View style={styles.numsRow}>
                            <Text>1</Text>
                        </View>
                    </View>
                    <View style={styles.secondCol}>
                        <View style={styles.mainRow}>
                            <Text>Наименование товаров (работ, услуг)</Text>
                        </View>
                        <View style={styles.numsRow}>
                            <Text>2</Text>
                        </View>
                    </View>
                    <View style={styles.thirdCol}>
                        <View style={styles.mainRow}>
                            <Text>Ед. изм.</Text>
                        </View>
                        <View style={styles.numsRow}>
                            <Text>3</Text>
                        </View>
                    </View>
                    <View style={styles.fourthCol}>
                        <View style={styles.mainRow}>
                            <Text>Кол-во (объем)</Text>
                        </View>
                        <View style={styles.numsRow}>
                            <Text>4</Text>
                        </View>
                    </View>
                    <View style={styles.fifthCol}>
                        <View style={styles.mainRow}>
                            <Text>Цена (KZT)</Text>
                        </View>
                        <View style={styles.numsRow}>
                            <Text>5</Text>
                        </View>
                    </View>
                    <View style={styles.sixthCol}>
                        <View style={styles.mainRow}>
                            <Text>Стоимость товаров (работ, услуг) без НДС</Text>
                        </View>
                        <View style={styles.numsRow}>
                            <Text>6</Text>
                        </View>
                    </View>
                    <View style={styles.sevAndEghCol}>
                        <View style={styles.topRow}>
                            <Text>НДС</Text>
                        </View>
                        <View style={styles.bottomRowNum}>
                            <View style={styles.seventhCol}>
                                <View style={styles.bottomRow}>
                                    <Text>Cтавка</Text>
                                </View>
                                <View style={styles.numsRow}>
                                    <Text>7</Text>
                                </View>
                            </View>
                            <View style={styles.eighthCol}>
                                <View style={styles.bottomRow}>
                                    <Text>Сумма</Text>
                                </View>
                                <View style={styles.numsRow}>
                                    <Text>8</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.ninethCol}>
                        <View style={styles.mainRow}>
                            <Text>Всего стоимость реализации</Text>
                        </View>
                        <View style={styles.numsRow}>
                            <Text>9</Text>
                        </View>
                    </View>
                    <View style={styles.tenAndElevCol}>
                        <View style={styles.topRow}>
                            <Text>Акциз</Text>
                        </View>
                        <View style={styles.bottomRowNum}>
                            <View style={styles.tenthCol}>
                                <View style={styles.bottomRow}>
                                    <Text>Ставка</Text>
                                </View>
                                <View style={styles.numsRow}>
                                    <Text>10</Text>
                                </View>
                            </View>
                            <View style={styles.eleventhCol}>
                                <View style={styles.bottomRow}>
                                    <Text>Сумма</Text>
                                </View>
                                <View style={styles.numsRow}>
                                    <Text>11</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View>

                    <View>{tableArr}</View>
                    <View style={styles.tableRow}>
                        <View style={styles.totalInfo}>
                            <View>
                                <Text>Всего по счету:</Text>
                            </View>
                        </View>
                        <View style={styles.sixthCol}>
                            <View style={styles.numsRow}>
                                <Text>{fullCost}</Text>
                            </View>
                        </View>
                        <View style={styles.seventhCol}>
                            <View style={styles.numsRow}>
                                <Text> </Text>
                            </View>
                        </View>
                        <View style={styles.eighthCol}>
                            <View style={styles.numsRow}>
                                <Text>{totalVAT}</Text>
                            </View>
                        </View>
                        <View style={styles.ninethCol}>
                            <View style={styles.numsRow}>
                                <Text>{fullCost + totalVAT}</Text>
                            </View>
                        </View>
                        <View style={styles.tenthCol}>
                            <View style={styles.numsRow}>
                                <Text> </Text>
                            </View>
                        </View>
                        <View style={styles.eleventhCol}>
                            <View style={styles.numsRow}>
                                <Text>{totalExciseRate}</Text>
                            </View>
                        </View>

                    </View>
                </View>

                <View style={styles.signatureBlock}>
                    <View style={styles.signatureRightSide}>
                        <View style={styles.signatureRowBold}>
                            <Text>Директор: </Text>
                            <Text>{clientFullName} </Text>
                        </View>
                        <View style={styles.signatureRowLine}>
                            <Text> </Text>
                        </View>
                        <View style={styles.signatureUnderRow}>
                            <Text>(Ф.И.О., подпись)</Text>
                        </View>
                        <View style={styles.signatureRowBold}>
                            <Text>Главный бухгалтер: </Text>
                            <Text>{сhiefAccountant} </Text>
                        </View>
                        <View style={styles.signatureRowLine}>
                            <Text> </Text>
                        </View>
                        <View style={styles.signatureUnderRow}>
                            <Text>(Ф.И.О., подпись)</Text>
                        </View>
                    </View>

                    <View style={styles.signatureLeftSide}>
                        <View style={styles.signatureRowBold}>
                            <Text>ВЫДАЛ (ответственное лицо поставщика)</Text>
                        </View>
                        <View style={styles.signatureRowLine}>
                            <Text>{executorPosition} </Text>
                        </View>
                        <View style={styles.signatureUnderRow}>
                            <Text>(должность)</Text>
                        </View>
                        <View style={styles.signatureRowBold}>
                            <Text> </Text>
                        </View>
                        <View style={styles.signatureRowLine}> 
                            <Text>{executorFullName} </Text>
                        </View>

                        <View style={styles.signatureUnderRow}>
                            <Text>(Ф.И.О., подпись)</Text>
                        </View>
                    </View>
                </View>

                <View>
                    <Text>Примечание: Без печати недействительно. Оригинал (первый экземпляр) - покупателю. Копия (второй экземпляр) - поставщику.</Text>
                </View>
            </Page>
        </Document>


    );
};

export default Invoice;