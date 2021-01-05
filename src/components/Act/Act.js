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
  title: {
    width: '20%',
    marginLeft: 'auto',
    maginRight: '0',
    marginBottom: '10'
  },
  titleText: {
    textAlign: 'center',
    fontStyle: 'italic',
  },
  afterTitleText: {
    textAlign: 'right',
    marginTop: 10,
  },
  taxNumbers: {
    width: '14%',
    marginLeft: 'auto',
    maginRight: '0',
    marginBottom: 2,
  },
  person: {
    flexDirection: 'row',
    minHeight: 30,
  },
  personPos: {
    width: '10%',
    border: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    marginRight: -1,
    paddingLeft: 2,
    paddingTop: 10,
  },
  personName: {
    width: '60%',
    fontWeight: 'bold',
    fontSize: 9,
    textAlign: 'center',
    border: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    margin: 0,
    paddingTop: 10,
  },
  personTaxNumber: {
    width: '20%',
    textAlign: 'center',
    marginLeft: 'auto',
    maginRight: '0',
    border: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    paddingTop: 10,

  },
  textUnderPerson: {
    width: '60%',
    fontStyle: 'italic',
    textAlign: 'center',
    margin: 0,
    paddingTop: 1,
    marginLeft: 50,
  },  
  addInfo: {
    flexDirection: 'row',
  },
  addInfoLeftSide: {
    width: '62%',
    flexDirection: 'column',
    justifyContent: 'space-between',

  },
  contractBlock: {
    flexDirection: 'row',
  },
  contract: {
    paddingLeft: 5,
    width: '70%',
    textAlign: 'left',
    borderBottom: 1,
    borderBottomColor: 'black',
    borderBottomStyle: 'solid',
  },
  actTitle: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10,
  },
  actInfo: {
    marginTop: 3,
    flexDirection: 'row',
  },
  actDataLeft: {
    width: 50,
    textAlign: 'center'
  },  
  actDataRight: {
    width: 50,
    textAlign: 'center'
  },  
  actInfoHeader: {
    margin: -0.5,
    paddingRight: 2,
    paddingLeft: 2,
    border: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
  },
  actInfoContent: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: -0.5,
    fontWeight: 'bold',
    border: 1,
    borderStyle: 'solid',
    borderColor: 'black',
  },
  inventoryInfo: {
    flexDirection: 'row',
    fontSize: 7,
    width: '100%',
    marginTop: 25,
  },
  inventoryData: {
    borderColor: 'black',
    borderBottom: 1,
    borderStyle: 'solid',
    width: '60%',
    paddingLeft: 2,
  },
  inventoryDescr: {
    fontStyle: 'italic',
    fontSize: 7,
    marginLeft: 330,
  },
  appendix: {
    fontSize: 7,
    marginTop: 10,
    flexDirection: 'row',
    marginBottom: 40,
  },
  appendixData: {
    flexDirection: 'row',
  },
  numOfPages: {
    paddingLeft: 2,
    paddingRight: 2,
    borderBottom: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    width: 20,
    textAlign: 'center',
  },
  docList: {
    paddingLeft: 2,
    borderBottom: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    width: 415,
  },
  signatureBlock: {
    flexDirection: 'row',
    fontSize: 7,
    alignItems: 'flex-end',
    position: 'relative',
  },
  position: {
    width: 55,
    borderBottom: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    textAlign: 'center',
    marginLeft: 2,
    marginRight: 2,
  },
  signature: {
    width: 70,
    borderBottom: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    textAlign: 'center',
    marginLeft: 1,
    marginRight: 2,
  },
  fullName: {
    width: 75,
    borderBottom: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    textAlign: 'center',
    marginLeft: 1,
    marginRight: 2,
  },
  signatureDescr: {
    flexDirection: 'row',
    fontSize: 7,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  clientDescr: {
    width: 67,
  },
  execDescr: {
    width: 66,
  },
  positionDescr: {
    width: 55,
  },
  signDescr: {
    marginLeft: 5, 
    width: 70
  },
  fullNameDescr: {
    marginLeft: 7, 
    width: 75
  },
  tableHeader: {
    marginTop: 15,
    flexDirection: 'row',
    fontSize: 7,
    textAlign: 'center',
    alignItems: 'center',

  },
  firstCol: { 
    width: '5vw',
  },
  secondCol: {
    width: '23vw',
  },
  thirdCol: {
    width: '10vw',
  },
  fourthCol: {
    width: '18vw',
  },
  fifthCol: {
    width: '7vw',
  },
  sixSevenEightCol: {
    flexDirection: 'column',
    width: "30vw"
  },
  sixthCol: {
    width: '9vw',
  },
  seventhCol: {
    width: '11vw',
  },
  eighthCol: {
    width: '10vw',
  },
  tableRow: {
    textAlign: 'center',
    fontSize: 7,
    flexDirection: 'row',
  },
  tableFull: {
    width: '63.15vw',
    borderColor: 'black',
    paddingRight: 10,
    fontWeight: 'bold',
    border: 1,
    borderStyle: 'solid',
    margin: -0.5,
    textAlign: 'right',
    fontSize: 8,

  },
  numsRowBottom: {
    border: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    margin: -0.5,
    fontSize: 8,

  },
  mainRow: {
    height: 70,
    border: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    margin: -0.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 2,
    paddingRight: 2,
  },
  topRow: {
    height: 36,
    border: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    margin: -0.5,
    flexDirection: 'row',
    alignItems: 'center',
  }, 
  bottomRow: {
    height: 35,
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
    marginLeft: -0.5,
    marginRight: -0.5,
    marginTop: -0.5,

  },
  bottomRowNum: {
      flexDirection: 'row',
  },
  tableRowGoods: {
    flexDirection: 'row',
    marginTop: -0.5,
    marginBottom: -0.5,
    width: '100%',

  },
  firstColCell: {
    width: '5.54%',
    border: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    margin: -0.5,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  secondColCell: {
    width: '24.8%',
    border: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    margin: -0.5,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,

  },
  thirdColCell: {
    width: '10.95%',
    border: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    margin: -0.5,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,


  },
  fourthColCell: {
    width: '19.45%',
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
    width: '7.67%',
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
    width: '9.85%',
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
    width: '12%',
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
    width: '10.87%',
    border: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    margin: -0.5,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  executorSignature: {   
    maxWidth: 70,
    maxHeight: 70,
 
  },
  executorSignatureView: {
    position: 'absolute',
    top: -30,
    left: 130,

  },
  executorStamp: {
    maxWidth: 70,
    maxHeight: 70,
  },

  executorStampView: {
    position: 'absolute',
    top: -30,
    left: 50,
  },

  clientSignature: {
  },

  clientSignatureView: {
    position: 'absolute',
    top: -30,
    left: 405,
    width: 70,
  },

  clientStamp: {
    maxWidth: 70,
    maxHeight: 70,
  },
  clientStampView: {
    position: 'absolute',
    top: -30,
    left: 10,
  },
  exexcutorStampField: {
    position: 'relative',
    flexDirection: 'row',
    marginTop: 20,
    fontSize: 8,
  },
  exexcutorStampDescr: {
    marginLeft: 40,
    fontWeight: 700,
  },
  dateOfSign: {
    marginLeft: 225,
    flexDirection: 'row',  
  },
  dateOfDignData: {
    borderBottom: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    width: 50
  },
  clientStampField: {
    marginLeft: 280,
    position: 'relative',
    marginTop: 10,
    fontWeight: 700,

  },
  template: {
    position: 'absolute',
    fontSize: 100,
    top: '30%',
    left: '20%',
    opacity: 0.5,
  },


});

const Act = ({ docDate, docNumber, client, clientTaxNumber, executor, executorTaxNumber, contract, contractDate, actNumber, actDate, inventoryUsageInformation, numberOfPafes, documentsList, executerPosition, executerFullName, clientPosition, clientFullName, tableInfo, dateOfSigning,}) => {
  const allCosts = tableInfo.map((i) => i.quantity*i.unitPrice);
  const allQuantity = tableInfo.map((i) => +i.quantity);
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
  const TableRow = ({ num, nameOfGoods, dateOfWorks, measure, quantity, unitPrice, price}) => (
    <View style={styles.tableRowGoods}>
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
          <Text>{dateOfWorks} </Text>
        </View>
      </View>
      <View style={styles.fourthColCell}>
        <View style={styles.tableCell}>
          <Text> </Text>
        </View>
      </View>
      <View style={styles.fifthColCell}>
        <View style={styles.tableCell}>
          <Text>{measure} </Text>
        </View>
      </View>
      <View style={styles.sixthColCell}>
        <View style={styles.tableCell}>
          <Text>{quantity} </Text>
        </View>
      </View>
      <View style={styles.seventhColCell}>
        <View style={styles.tableCell}>
          <Text>{unitPrice} </Text>
        </View>
      </View>
      <View style={styles.eighthColCell}>
        <View style={styles.tableCell}>
          <Text>{price}</Text>
        </View>
      </View>
    </View>
  )

  const tableArr = tableInfo.map((i, index) => {
    return (
      <TableRow 
        key={index}
        num={index+1}
        nameOfGoods={i.nameOfGoods}
        dateOfWorks={i.dateOfWorks}
        measure={i.measure}
        quantity={i.quantity}
        unitPrice={i.unitPrice}
        price={i.quantity*i.unitPrice}
      />
    )
  })

  const executorSignature = localStorage.getItem('executorSignature');
  const executorStamp = localStorage.getItem('executorStamp');
  const clientSignature = localStorage.getItem('clientSignature');
  const clientStamp = localStorage.getItem('clientStamp');

  

  return (
    <Document>
        <Page size='A4' style={styles.page}>
        <View style={styles.template}>
          <Text>Образец</Text>
        </View>

        <View style={styles.title}>
          <View style={styles.titleText}><Text>Приложение 50</Text></View>
          <View style={styles.titleText}><Text>к приказу Министра финансов</Text></View>
          <View style={styles.titleText}><Text>Республики Казахстан</Text></View>
          <View style={styles.titleText}><Text>от 20 декабря 2012 года № 562</Text></View>
          <View style={styles.afterTitleText}><Text>Форма Р-1</Text></View>
        </View>
        <View style={styles.taxNumbers}>
          <View>
            <Text>ИНН/БИН</Text>
          </View>
        </View>
        <View style={styles.person}>
            <Text style={styles.personPos}>Заказчик</Text>
            <Text style={styles.personName}>{client}</Text>
            <Text style={styles.personTaxNumber}>{clientTaxNumber}</Text>
        </View>
        <View>
          <Text style={styles.textUnderPerson}>полное наименование, адрес, данные о средствах связи</Text>
        </View>
        <View style={styles.person}>
          <Text style={styles.personPos}>Исполнитель</Text>
          <Text style={styles.personName}>{executor}</Text>
          <Text style={styles.personTaxNumber}>{executorTaxNumber}</Text>
        </View>
        <View>
          <Text style={styles.textUnderPerson}>полное наименование, адрес, данные о средствах связи</Text>
        </View>
        <View style={styles.addInfo}>
          <View style={styles.addInfoLeftSide}>
            <View style={styles.contractBlock}>
              <Text>Договор(контракт)</Text>
              <Text style={styles.contract}>{contract} {contractDate}</Text>
            </View>
            <Text style={styles.actTitle}>акт выполненых работ (оказанных услуг)</Text>
          </View>

          <View style={styles.actInfo}>
            <View style={styles.actDataRight}>
              <View style={styles.actInfoHeader}>
                <Text>Номер документа</Text>
              </View>
              <View style={styles.actInfoContent}>
                <Text>{docNumber} </Text>
              </View>
            </View>
            <View style={styles.actDataLeft}>
              <View style={styles.actInfoHeader}>
                <Text>Дата составления</Text>
              </View>
              <View style={styles.actInfoContent}>
                <Text>{docDate} </Text>
              </View>
            </View>
          </View>
        </View>
        
        {/* Table Here */}              
        <View style={styles.tableHeader}>
          <View style={styles.firstCol}>
            <View style={styles.mainRow}>
                <Text>Номер по порядку</Text>
            </View>
            <View style={styles.numsRow}>
                <Text>1</Text>
            </View>
          </View>
          <View style={styles.secondCol}>
            <View style={styles.mainRow}>
              <Text>Наименование работ (услуг) (в разрезе их подвидов в соответствии с технической спецификацией, заданием, графиком выполнения работ (услуг) при их наличии)</Text>
            </View>
            <View style={styles.numsRow}>
              <Text>2</Text>
            </View>
          </View>
          <View style={styles.thirdCol}>
            <View style={styles.mainRow}>
              <Text>Дата выполнения работ (оказания услуг)</Text>
            </View>
            <View style={styles.numsRow}>
              <Text>3</Text>
            </View>
          </View>
          <View style={styles.fourthCol}>
            <View style={styles.mainRow}>
              <Text>Сведения об отчете о научных исследованиях, маркетинговых, консультационных и прочих услугах (дата, номер, количество страниц) (при их наличии)</Text>
            </View>
            <View style={styles.numsRow}>
              <Text>4</Text>
            </View>
          </View>
          <View style={styles.fifthCol}>
            <View style={styles.mainRow}>
              <Text>Единица измерения</Text>
            </View>
            <View style={styles.numsRow}>
              <Text>5</Text>
            </View>
          </View>
          <View style={styles.sixSevenEightCol}>
            <View style={styles.topRow}>
                <Text>Выполнено работ (оказано услуг)</Text>
            </View>
            <View style={styles.bottomRowNum}>
              <View style={styles.sixthCol}>
                <View style={styles.bottomRow}>
                  <Text>количество</Text>
                </View>
                <View style={styles.numsRow}>
                  <Text>6</Text>
                </View>
              </View>
              <View style={styles.seventhCol}>
                <View style={styles.bottomRow}>
                  <Text>цена за единицу</Text>
                </View>
                <View style={styles.numsRow}>
                  <Text>7</Text>
                </View>
              </View>
              <View style={styles.eighthCol}>
                <View style={styles.bottomRow}>
                  <Text>стоимость</Text>
                </View>
                <View style={styles.numsRow}>
                  <Text>8</Text>
                </View>
              </View>
            </View>
          </View>           
        </View>

        <View>
          {tableArr}
          <View style={styles.tableRow}>
            <View style={styles.tableFull}>
              <Text>Итого:</Text>
            </View>
            <View style={styles.sixthCol}>
              <View style={styles.numsRowBottom}>
                <Text>{total}</Text>
              </View>
            </View>
            <View style={styles.seventhCol}>
              <View style={styles.numsRowBottom}>
                <Text>x</Text>
              </View>
            </View>
            <View style={styles.eighthCol}>
              <View style={styles.numsRowBottom}>
                <Text>{fullCost}</Text>
                </View>
            </View>
          </View>
        </View>

        <View style={styles.inventoryInfo}><Text>Сведения об использовании запасов, полученных от заказчика</Text><Text style={styles.inventoryData}>{inventoryUsageInformation}</Text></View>
        <View><Text style={styles.inventoryDescr}>наименование, количество, стоимость</Text></View>
        <View style={styles.appendix}>
          <View style={styles}>
            <Text>Приложение:</Text>
          </View>
          <View style={styles.appendixInfo}>
            <Text>Перечень документации, в том числе отчет(ы) о маркетинговых, научных исследованиях, консультационных и прочих услугах (обязательны при его(их)</Text>
            <View style={styles.appendixData}>
              <Text>наличии) на</Text>
              <Text style={styles.numOfPages}>{numberOfPafes}</Text>
              <Text>страниц</Text>
              <Text style={styles.docList}>{documentsList}</Text>
            </View>
          </View>
        </View>
        <View style={styles.signatureBlock}>
          <Text >Сдал(Исполнитель)</Text>
          <Text style={styles.position}>{executerPosition}</Text>
          <Text >/</Text>
          <Text style={styles.signature}> </Text>
          <View style={styles.clientSignatureView}>
            <Image id='clientSignature' src={clientSignature !== null ? clientSignature : ' '} style={styles.clientSignature} alt='clientSignature'/>
          </View>
          <Text >/</Text>
          <Text style={styles.fullName}>{executerFullName}</Text>
          <Text >Принял(Заказчик)</Text>
          <Text style={styles.position}>{clientPosition}</Text>
          <Text >/</Text>
          <Text style={styles.signature}> </Text>
          <View style={styles.executorSignatureView}>
            <Image id='executorSignature' src={executorSignature !== null ? executorSignature : ' '} style={styles.executorSignature} alt='executorSignature'/>
          </View>
          <Text >/</Text>
          <Text style={styles.fullName}>{clientFullName}</Text>
        </View>
        <View style={styles.signatureDescr}>
          <Text style={styles.clientDescr}></Text>
          <Text style={styles.positionDescr}>должность</Text>
          <Text style={styles.signDescr}>подпись</Text>
          <Text style={styles.fullNameDescr}>расшифровка подписи</Text>
          <Text style={styles.execDescr}></Text>
          <Text style={styles.positionDescr}>должность</Text>
          <Text style={styles.signDescr}>подпись</Text>
          <Text style={styles.fullNameDescr}>расшифровка подписи</Text>
        </View>

        <View style={styles.exexcutorStampField}>
          <View style={styles.exexcutorStampDescr}>
            <Text style={styles}>М.П.</Text>
          </View>
          <View style={styles.executorStampView}>
            <Image id='executorStamp' src={executorStamp !== null ? executorStamp : ' '} style={styles.executorStamp} alt='executorStamp'/>
          </View>
          <View style={styles.dateOfSign}>
            <Text style={styles}>Дата подписания (принятия) работ (услуг) </Text>
            <Text style={styles.dateOfDignData}>{dateOfSigning}</Text>
          </View>
        </View>

        <View style={styles.clientStampField}>
          <View style={styles}>
              <Text style={styles}>М.П.</Text>
            </View>
            <View style={styles.clientStampView}>
              <Image id='clientStamp' src={clientStamp !== null ? clientStamp : ' '} style={styles.clientStamp} alt='clientStamp'/>
            </View>
        </View>

        </Page>
    </Document>
  );
}

export default Act;


