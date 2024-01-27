import { PDFOptions } from 'puppeteer';
import { Response } from 'express';

interface PdfOptions {
    res: Response;
    content?: string;
    url?: string;
    filename?: string;
    pdfOptions?: PDFOptions;
    download?: boolean;
    save?: boolean;
}
declare function generatePdf(options: PdfOptions): Promise<void>;

export { type PdfOptions, generatePdf };
