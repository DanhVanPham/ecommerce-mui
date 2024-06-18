import { pdf } from '@react-pdf/renderer';
import fontkit from '@pdf-lib/fontkit'
import { PDFDocument, rgb } from 'pdf-lib'

// ----------------------------------------------------------------------

export const getUrlPdf = async (document) => {

    const blobPdf = await pdf(document).toBlob();
    return URL.createObjectURL(blobPdf)
}

// ----------------------------------------------------------------------

export const createPdfDoc = async (pdfUrl) => {
    try {
        // Fetch the PDF URL
        const existingPdfBytes = await fetch(pdfUrl).then(res => res.arrayBuffer())
        // Load a PDFDocument from the existing PDF bytes
        const pdfDoc = await PDFDocument.load(existingPdfBytes)

        return pdfDoc;
    } catch (error) {
        console.error('An error occurred: ', error);
        return null;
    }
}

// ----------------------------------------------------------------------

export const createFileFromDoc = async (pdfDoc, fileName) => {
    try {
        // Serialize the PDFDocument to bytes (a Uint8Array)
        const pdfBytes = await pdfDoc.save()

        // Convert binary byte to blob
        const base64String = await base64Arraybuffer(pdfBytes)
        const base64Response = await fetch(`data:application/pdf;base64,${base64String}`);
        const pdfBlob = await base64Response.blob();
        const fileOfBlob = new File([pdfBlob], fileName);

        return fileOfBlob;
    } catch (error) {
        console.error('An error occurred: ', error);
        return null;
    }
}

const base64Arraybuffer = async (data) => {
    // Use a FileReader to generate a base64 data URI
    const base64url = await new Promise((r) => {
        const reader = new FileReader()
        reader.onload = () => r(reader.result)
        reader.readAsDataURL(new Blob([data]))
    })

    return base64url.substring(base64url.indexOf(',') + 1)
}

// ----------------------------------------------------------------------

export const createFileFromUrl = async (pdfUrl, fileName) => {
    try {
        const pdfDoc = await createPdfDoc(pdfUrl)

        const file = await createFileFromDoc(pdfDoc, fileName)

        return file;
    } catch (error) {
        console.error('An error occurred: ', error);
        return null;
    }
}

// ----------------------------------------------------------------------

export const loadAndEmbedFont = async (urlFont, pdfDoc) => {
    const fontResponse = await fetch(urlFont);
    const fontBytes = await fontResponse.arrayBuffer();
    // Embed a font into document.
    pdfDoc.registerFontkit(fontkit);
    return pdfDoc.embedFont(fontBytes);
};

export const hexToRgb = (hex) => {
    const r = parseInt(hex.substr(1, 2), 16) / 255.0;
    const g = parseInt(hex.substr(3, 2), 16) / 255.0;
    const b = parseInt(hex.substr(5, 2), 16) / 255.0;
    return rgb(r, g, b);
};
