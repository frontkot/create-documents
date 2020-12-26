import React from 'react';
import Act from '../Act/Act';
import { useSelector } from 'react-redux';
import { getData } from '../../store/inputData/selectors';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet, BlobProvider } from '@react-pdf/renderer';
import jsPDF from 'jspdf';



const Preview = () => {
    const docName = 'Act.pdf';
    const data = useSelector(getData);
    const {client, clientTaxNumber } = data;

        
    return (
            <BlobProvider document={<Act client={client} clientTaxNumber={clientTaxNumber}/>} fileName={docName}>
                {({ url }) => <iframe src={url} style={{ width: '100%', height: '80vh', fontFamily: 'Roboto' }} />}
            </BlobProvider>
    );
};

export default Preview;