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
  actData: {
    maxWidth: 70,
    textAlign: 'center',
    paddingTop: 10,

  },  
  actInfoHeader: {
    marginBottom: -1,
    paddingTop: 2,
    border: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    marginLeft: -1,
  },
  actInfoContent: {
    paddingTop: 2,
    fontWeight: 'bold',
    marginLeft: -1,
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
    alignItems: 'flex-end'
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
  },
  tableDescr: {
    flexDirection: 'row',
    textAlign: 'center',
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
  sixthCol: {
    width: '9vw',
  },
  seventhCol: {
    width: '11vw',
  },
  eighthCol: {
    width: '10vw',
  },
  textDescr: {
    height: 66,
    padding: 3,
    borderColor: 'black',
    border: 1,
    borderStyle: 'solid',
    margin: -0.5,
    display: 'table',
  },
  numDescr: {
    borderColor: 'black',
    border: 1,
    borderStyle: 'solid',
    margin: -0.5,
    paddingTop:2,
  },
  textDescrPrices: {
    paddingTop: 12,
    height: 33.5,
    width: '100.5%',
    textAlign: 'center',
    borderColor: 'black',
    border: 1,
    borderStyle: 'solid',
    margin: -0.5,

  },
  textDescrCol: {
    paddingTop: 12,
    height: 33.5,
    borderColor: 'black',
    border: 1,
    borderStyle: 'solid',
    margin: -0.5,
  },
  tableRow: {
    flexDirection: 'row',
    textAlign: 'center',
    fontSize: 7,
    alignItems: 'center',
  },
  tableCell: {
    paddingTop: 3,
    borderColor: 'black',
    border: 1,
    borderStyle: 'solid',
    margin: -0.5,
    height: 20,
  },
  tableFull: {
    paddingTop: 2,
    width: '63.15vw',
    borderColor: 'black',
    paddingRight: 10,
    fontWeight: 'bold',
    border: 1,
    borderStyle: 'solid',
    margin: -0.5,
    textAlign: 'right',
  },



  // table: { display: 'table', width: 'auto', borderStyle: 'solid', borderWidth: 1, borderRightWidth: 0, borderBottomWidth: 0 }, tableRow: { margin: 'auto', flexDirection: 'row' }, tableCol: { width: '25%', borderStyle: 'solid', borderWidth: 1, borderLeftWidth: 0, borderTopWidth: 0 }, tableCell: { margin: 'auto', marginTop: 5, fontSize: 10 }
});

const Act = ({ client, clientTaxNumber, executor, executorTaxNumber, contract, contractDate, actNumber, actDate, inventoryUsageInformation, numberOfPafes, documentsList, executerPosition, executerSignature, executerFullName, clientPosition, clientSignature, clientFullName, tableInfo, }) => {
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
    <View style={styles.tableRow}>
      <View style={styles.firstCol}>
        <Text style={styles.tableCell}>{num}</Text>
      </View>
      <View style={styles.secondCol}>
        <Text style={styles.tableCell}>{nameOfGoods}</Text>
      </View>    
      <View style={styles.thirdCol}>
        <Text style={styles.tableCell}>{dateOfWorks}</Text>
      </View>
      <View style={styles.fourthCol}>
        <Text style={styles.tableCell}> </Text>
      </View>
      <View style={styles.fifthCol}>
        <Text style={styles.tableCell}>{measure}</Text>
      </View>
      <View style={styles.sixthCol}>
        <Text style={styles.tableCell}>{quantity}</Text>
      </View>
      <View style={styles.seventhCol}>
        <Text style={styles.tableCell}>{unitPrice}</Text>
      </View>
      <View style={styles.eighthCol}>
        <Text style={styles.tableCell}>{price}</Text>
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
  
  const imgSignature = () => {
    var base64 = localStorage["file"];
    var base64Parts = base64.split(",");
    var fileFormat = base64Parts[0].split(";")[1];
    var fileContent = base64Parts[1];
    var file = new File([fileContent], "file name here", {type: fileFormat});

    var reader = new FileReader();

    var imgtag = document.getElementById("imgSign");
    imgtag.title = file.name;
  
    reader.onload = function(event) {
      imgtag.src = event.target.result;
    };
  
    reader.readAsDataURL(file);

    // return file;
  }


  return (
    <Document>
        <Page size='A4' style={styles.page}>
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
            <View style={styles.actData}>
              <Text style={styles.actInfoHeader}>Номер документа</Text>
              <Text style={styles.actInfoContent}>{actNumber}</Text>
            </View>
            <View style={styles.actData}>
              <Text style={styles.actInfoHeader}>Дата составления</Text>
              <Text style={styles.actInfoContent}>{actDate}</Text>
            </View>
          </View>
        </View>
        
        {/* Table Here */}              
        <View style={styles.tableHeader}>
          <View style={styles.tableHeadDesrc}>
            <View style={styles.tableDescr}>
              <View style={styles.firstCol}>
                <Text style={styles.textDescr}>Номер по порядку</Text><Text style={styles.numDescr}>1</Text>
              </View>
              <View style={styles.secondCol}>
                <Text style={styles.textDescr}>Наименование работ (услуг) (в разрезе их подвидов в соответствии с технической спецификацией, заданием, графиком выполнения работ (услуг) при их наличии)</Text><Text style={styles.numDescr}>2</Text>
              </View>
              <View style={styles.thirdCol}>
                <Text style={styles.textDescr}>Дата выполнения работ (оказания услуг)</Text><Text style={styles.numDescr}>3</Text>
              </View>
              <View style={styles.fourthCol}>
                <Text style={styles.textDescr}>Сведения об отчете о научных исследованиях, маркетинговых, консультационных и прочих услугах (дата, номер, количество страниц) (при их наличии)</Text><Text style={styles.numDescr}>4</Text>
              </View>
              <View style={styles.fifthCol}>
                <Text style={styles.textDescr}>Единица измерения</Text><Text style={styles.numDescr}>5</Text>
              </View>
            </View>
          </View>
          <View style={styles.tableDescrPrices}>
            <View  style={styles.tableDescrPricesCell}>
              <Text style={styles.textDescrPrices}>Выполнено работ (оказано услуг)</Text>
            </View>
            <View>
              <View style={styles.tableDescr}>
                <View style={styles.sixthCol}>
                  <Text style={styles.textDescrCol}>количество</Text><Text style={styles.numDescr}>6</Text>
                </View>
                <View style={styles.seventhCol}>
                  <Text style={styles.textDescrCol}>цена за единицу</Text><Text style={styles.numDescr}>7</Text>
                </View>
                <View style={styles.eighthCol}>
                  <Text style={styles.textDescrCol}>стоимость</Text><Text style={styles.numDescr}>8</Text>
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
              <Text style={styles.numDescr}>{total}</Text>
            </View>
            <View style={styles.seventhCol}>
              <Text style={styles.numDescr}>x</Text>
            </View>
            <View style={styles.eighthCol}>
              <Text style={styles.numDescr}>{fullCost}</Text>
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
          <Text style={styles.signature}>{executerSignature}</Text>
          <Text >/</Text>
          <Text style={styles.fullName}>{executerFullName}</Text>
          <Text >Принял(Заказчик)</Text>
          <Text style={styles.position}>{clientPosition}</Text>
          <Text >/</Text>
          <Text style={styles.signature}>{clientSignature}</Text>
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


        {/* <View style={styles.signature}>
          <Image src={imgSignature} id='imgSign'/>
        </View> */}
        </Page>
    </Document>
  );
}

export default Act;


