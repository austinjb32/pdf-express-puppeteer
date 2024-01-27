import {launch, PDFOptions} from "puppeteer";
import { Response } from "express";

export interface PdfOptions {
    res: Response;
    content?: string;
    url?: string;
    filename?: string;
    pdfOptions?: PDFOptions;
    download?: boolean;
    save?: boolean;
  }
export async function generatePdf (options: PdfOptions){
    const { res, content, url, filename = "test", pdfOptions, download, save } = options;
try {
        const browser = await launch({headless:"new"});
        const Options:PDFOptions = {
            path: save ? `${filename}.pdf` : undefined,
            format: pdfOptions?.format? pdfOptions.format : "A4",
            ...pdfOptions
          }
          
          if(url && content) throw new Error("You can only pass one of url or content");
    
        browser.newPage().then(async (page) => {
          if(content) await page.setContent(content);
          if(url)await page.goto(url, {waitUntil: 'networkidle0'});
          await page.pdf(Options).then((buffer) => {
            res.setHeader("Content-Type", "application/pdf");
            if(download){
                res.setHeader(
                    "Content-Disposition",
                    `attachment; filename=${filename}.pdf`
                  );
            };
            res.send(buffer);
            res.end();
          }
          );
          await browser.close();
        });
} catch (error) {
    console.error(error);
    res.status(500).send('Error generating PDF');
}
  }