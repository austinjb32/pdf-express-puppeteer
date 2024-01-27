
---

# pdf-express-puppeteer

## Overview

This Node.js module provides a function to generate PDF files using Puppeteer and Express.

## Installation

```bash
npm install pdf-express-puppeteer
```

## Usage

```javascript
const { generatePdf, PdfOptions } = require('pdf-express-puppeteer');
const { Response } = require('express');

// Example options
const options: PdfOptions = {
  res: /* Express Response object */,
  content: /* HTML content to convert to PDF */,
  url: /* URL to convert to PDF */,
  filename: /* Optional: Filename for the PDF */,
  pdfOptions: /* Optional: Puppeteer PDFOptions */,
  download: /* Optional: Set to true for a downloadable PDF */,
  save: /* Optional: Set to true to save the PDF locally */,
};

// Call the generatePdf function
generatePdf(options);
```

## Options

- `res` (Required): Express Response object.
- `content` (Optional): HTML content to convert to PDF.
- `url` (Optional): URL to convert to PDF.
- `filename` (Optional): Filename for the PDF. Defaults to "test".
- `pdfOptions` (Optional): Puppeteer PDFOptions.
- `download` (Optional): Set to true for a downloadable PDF.
- `save` (Optional): Set to true to save the PDF locally.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---