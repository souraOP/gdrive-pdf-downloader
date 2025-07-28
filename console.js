/***

MIT License

Copyright (c) 2023 Sourasish Mondal

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal 
in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
***/


let trustedURL;
if (window.trustedTypes && trustedTypes.createPolicy) {
    const policy = trustedTypes.createPolicy('myPolicy', {
        createScriptURL: (input) => {
            return input;
        }
    });
    trustedURL = policy.createScriptURL('https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js');
} else {
    trustedURL = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js';
}

// Load the jsPDF library using the trusted URL.
let jspdf = document.createElement("script");
jspdf.onload = function () {
    // Generate a PDF from images with "blob:" sources.
    let pdf = new jsPDF();
    let elements = document.getElementsByTagName("img");
    for (let i = 0; i < elements.length; i++) {
        let img = elements[i];
        if (!/^blob:/.test(img.src)) {
            continue;
        }
        let canvasElement = document.createElement('canvas');
        let con = canvasElement.getContext("2d");
        canvasElement.width = img.width;
        canvasElement.height = img.height;
        con.drawImage(img, 0, 0, img.width, img.height);
        let imgData = canvasElement.toDataURL("image/jpeg", 1.0);
        pdf.addImage(imgData, 'JPEG', 0, 0);
        if (i !== elements.length - 1) {
            pdf.addPage();
        }
    }

    // Download the generated PDF.
    pdf.save("download.pdf");
};
jspdf.src = trustedURL;
document.body.appendChild(jspdf);
