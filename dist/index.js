"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = require("puppeteer");
function generatePdf(res, content, filename, download, save, pdfOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const browser = yield (0, puppeteer_1.launch)({ headless: "new" });
        const Options = Object.assign({ path: save ? `${filename}.pdf` : undefined, format: pdfOptions.format ? pdfOptions.format : "A4" }, pdfOptions);
        browser.newPage().then((page) => __awaiter(this, void 0, void 0, function* () {
            yield page.setContent(content);
            yield page.pdf(Options).then((buffer) => {
                res.setHeader("Content-Type", "application/pdf");
                if (download) {
                    res.setHeader("Content-Disposition", `attachment; filename=${filename}.pdf`);
                }
                ;
                res.send(buffer);
                res.end();
            });
            yield browser.close();
        }));
    });
}
