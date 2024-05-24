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
const puppeteer = require('puppeteer');
(() => __awaiter(void 0, void 0, void 0, function* () {
    // Create browser instance
    const browser = yield puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    // Create a new page
    const page = yield browser.newPage();
    // Website URL to export as pdf
    const website_url = "https://www.makeprops.fr/";
    // Open URL in current page
    yield page.goto(website_url, {
        waitUntil: "networkidle2",
    });
    // Save PDF File
    yield page.pdf({ path: "./MakeProps.pdf", format: "a4" });
    // Close browser instance
    yield browser.close();
}))();
