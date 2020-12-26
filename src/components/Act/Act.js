import React from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet, BlobProvider, Font } from '@react-pdf/renderer';
import { useSelector } from 'react-redux';
import { getData } from '../../store/inputData/selectors';


Font.register({
    family: 'Roboto',
    src: '../../utils/font/Roboto/'
})

const styles = StyleSheet.create({
  page: {
    // fontFamily: 'Roboto',
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 5,
    padding: 5,
    flexGrow: 1
  }
});

const Act = ({
    client, clientTaxNumber
}) => {
  return (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Currently only English text is recognized</Text>
            </View>
            <View style={styles.section}>
                {client && <Text>{client}</Text>}
            </View>
            <View style={styles.section}>
                <Text>{clientTaxNumber}</Text>
            </View>
        </Page>
    </Document>
  );
}

export default Act;


