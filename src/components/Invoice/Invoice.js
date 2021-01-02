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
        position: 'relative',
    },
    signatureRightSide: {
        width: '50%',
        position: 'relative',
    },
    signatureLeftSide: {
        width: '35%',
        position: 'relative',
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
        width: '100%',
    },
    firstCol: {
        width: '3%'
    },
    secondCol: {
        width: '26%'
    },
    thirdCol: {
        width: '5%'
    },
    fourthCol: {
        width: '7%'
    },
    fifthCol: {
        width: '9%'
    },
    sixthCol: {
        width: '12%'
    },
    sevAndEghCol: {
        width: '14%'
    },
    seventhCol: {
        width: '50%'
    },
    eighthCol: {
        width: '50%'
    },
    ninethCol: {
        width: '10%'
    },
    tenAndElevCol: {
        width: '14%'
    },
    tenthCol: {
        width: '50%'
    },
    eleventhCol: {
        width: '50%'
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
        marginTop: -0.5,
        marginRight: -0.5,
        marginLeft: -0.5,
    },
    bottomRowNum: {
        flexDirection: 'row',
    },
    tableRow: {
        textAlign: 'center',
        fontSize: 7,
        flexDirection: 'row',
    },
    tableRowCell: {
        fontSize: 7,
        flexDirection: 'row',
        marginTop: -0.5,
        marginBottom: -0.5,
        width: '100%',
    },
    totalInfo: {
        width: '50.18%',
        borderColor: 'black',
        border: 1,
        borderStyle: 'solid',
        margin: -0.5,
        textAlign: 'left',
        paddingLeft: 3,
        fontWeight: 'bold',
    },
    firstColCell: {
        width: '3.16%',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondColCell: {
        width: '26.18%',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    thirdColCell: {
        width: '5.2%',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    fourthColCell: {
        width: '7.18%',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    fifthColCell: {
        width: '9.18%',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    sixthColCell: {
        width: '12.18%',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    seventhColCell: {
        width: '7.18%',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    eighthColCell: {
        width: '7.18%',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    ninethColCell: {
        width: '10.18%',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    tenthColCell: {
        width: '7.18%',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    eleventhColCell: {
        width: '7.18%',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    sixthColBottom: {
        width: '12.18%',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,


    },
    seventhColBottom: {
        width: '7.18%',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,

    },
    eighthColBottom: {
        width: '7.18%',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,

    },
    ninethColBottom: {
        width: '10.18%',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,

    },
    tenthColBottom: {
        width: '7.18%',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,

    },
    eleventhColBottom: {
        width: '7.18%',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: -0.5,

    },

    executorSignature: {   
        // maxWidth: 70,
        // maxHeight: 70,
     
      },
      executorSignatureView: {
        position: 'absolute',
        top: 12,
        right: 0,
        width: 70,  
      },
      chiefAccountantSignatureView: {
        position: 'absolute',
        top: 12,
        right: 0,
        width: 70,  
      },
   
      executorStampView: {
        position: 'absolute',
        top: 0,
        left: '51%',
        width: 70,  

      },
    
      clientSignature: {
      },
    
      clientSignatureView: {
        position: 'absolute',
        top: -20,
        right: 0,
        width: 70,
      },
    
})

const Invoice = ({ exciseRate, VATRate, procedureDate, invoiceNumber, invoiceDate, client, clientBINNumber, clientAdress, clientBank, clientIIKNumber, clientBIKBank, executor, executorIIK, executorBINNumber, executorAdress, executorBank, contract, contractDate, contractСonditions, destination, proxy, departureMethod, CMR, executorPosition, executorFullName, clientPosition, clientFullName, dateOfSigning, executivePersonSupplier, executivePersonSupplierPosition, сhiefAccountant, tableInfo,}) => {
    const allCosts = tableInfo.map((i) => i.quantity*i.unitPrice);

    const sumOfArrItems = (arr) => {
        let sum=0; 
        if(arr.length !== 0) {
            for(let i=0; i<arr.length; i++) {
            sum = sum+arr[i];
            } 
        }
        return sum;
    }

    const fullCost = Math.round(sumOfArrItems(allCosts));
    const totalVAT = VATRate === '100' ? 0 :  Math.round(sumOfArrItems(allCosts)*VATRate/100);
    const totalExciseRate = exciseRate === '100' ? 0 : Math.round(sumOfArrItems(allCosts)*exciseRate/100);

    const TableRow = ({ num, nameOfGoods, VATRate, measure, quantity, unitPrice, exciseRate}) => (
        <View style={styles.tableRowCell}>
          <View style={styles.firstColCell}>
            <View style={styles.tableCell}>
              <Text>{num} </Text>
            </View>
          </View>
          <View style={styles.secondColCell}>
            <View style={styles.tableCell}>
              <Text>{nameOfGoods} </Text>
            </View>
          </View>    
          <View style={styles.thirdColCell}>
            <View style={styles.tableCell}>
              <Text>{measure} </Text>
            </View>
          </View>
          <View style={styles.fourthColCell}>
            <View style={styles.tableCell}>
              <Text>{quantity} </Text>
            </View>
          </View>
          <View style={styles.fifthColCell}>
            <View style={styles.tableCell}>
              <Text>{unitPrice} </Text>
            </View>
          </View>
          <View style={styles.sixthColCell}>
            <View style={styles.tableCell}>
              <Text>{unitPrice*quantity} </Text>
            </View>
          </View>
          <View style={styles.seventhColCell}>
            <View style={styles.tableCell}>
              <Text>{VATRate === '100' ? 'Без НДС' : `${VATRate}%`} </Text>
            </View>
          </View>
          <View style={styles.eighthColCell}>
            <View style={styles.tableCell}>
              <Text>{VATRate === '100' ? ' ' : Math.round(unitPrice*quantity*VATRate/100)}</Text>
            </View>
          </View>
          <View style={styles.ninethColCell}>
            <View style={styles.tableCell}>
              <Text>{VATRate === '100' ? ' ' : Math.round(((VATRate/100 + 1)*unitPrice*quantity))}</Text>
            </View>
          </View>
          <View style={styles.tenthColCell}>
            <View style={styles.tableCell}>
              <Text>{exciseRate === '100' ? ' ' : `${exciseRate}%`}</Text>
            </View>
          </View>
          <View style={styles.eleventhColCell}>
            <View style={styles.tableCell}>
              <Text>{exciseRate === '100' ? ' ' : Math.round((unitPrice*quantity*exciseRate/100))}</Text>
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
        exciseRate={exciseRate}
      />
    )
  );

  const executorSignature = localStorage.getItem('executorSignature');
  const executorStamp = localStorage.getItem('executorStamp');
  const clientSignature = localStorage.getItem('clientSignature');
  const clientStamp = localStorage.getItem('clientStamp');
  const сhiefAccountantSignature = localStorage.getItem('сhiefAccountantSignature');



    

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
                        <View style={styles.sixthColBottom}>
                            <View style={styles.numsRowTotal}>
                                <Text>{fullCost}</Text>
                            </View>
                        </View>
                        <View style={styles.seventhColBottom}>
                            <View style={styles.numsRowTotal}>
                                <Text> </Text>
                            </View>
                        </View>
                        <View style={styles.eighthColBottom}>
                            <View style={styles.numsRowTotal}>
                                <Text>{totalVAT} </Text>
                            </View>
                        </View>
                        <View style={styles.ninethColBottom}>
                            <View style={styles.numsRowTotal}>
                                <Text>{fullCost + totalVAT}</Text>
                            </View>
                        </View>
                        <View style={styles.tenthColBottom}>
                            <View style={styles.numsRowTotal}>
                                <Text> </Text>
                            </View>
                        </View>
                        <View style={styles.eleventhColBottom}>
                            <View style={styles.numsRowTotal}>
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
                        <View style={styles.clientSignatureView}>
                            <Image id='clientSignature' src={clientSignature !== null ? clientSignature : ' '} style={styles.clientSignature} alt='clientSignature'/>
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
                        <View style={styles.chiefAccountantSignatureView}>
                            <Image id='сhiefAccountantSignature' src={сhiefAccountantSignature !== null ? сhiefAccountantSignature : ' '} style={styles.сhiefAccountantSignature} alt='сhiefAccountantSignature'/>
                        </View>
                        <View style={styles.signatureUnderRow}>
                            <Text>(Ф.И.О., подпись)</Text>
                        </View>
                    </View>
                    <View style={styles.executorStampView}>
                        <Image id='executorStamp' src={executorStamp !== null ? executorStamp : ' '} style={styles.executorStamp} alt='executorStamp'/>
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
                        <View style={styles.executorSignatureView}>
                            <Image id='executorSignature' src={executorSignature !== null ? executorSignature : ' '} style={styles.executorSignature} alt='executorSignature'/>
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