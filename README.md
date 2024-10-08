# Download PDFs from Gdrive which have restricted action i.e can't be downloaded

This is a code to download PDFs or Images that are uploaded to google drive and have "NO ACCESS TO DOWNLOAD THEM". This is just for fun code, not meant for exploitation usage!


## 1. Fork this repository

Fork this repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

## 2. Go to your google drive folder where the pdf is there.

<img width="90%" src="https://github.com/souraOP/gdrive-pdf-downloader/blob/4325c22101b344c57446caa7ab6e784e9ccadb2e/assets/1.png" alt="opened pdf folder in gdrive" />

## 3. Open the inspect element tool

For Mac User, shortcut is:
```
Command + Option + i
```
For Windows user, shortcut is:
```
Control + Shift + c
```

## 4. Click on the networks tab then select Fetch/XHR

<img width="90%" src="https://github.com/souraOP/gdrive-pdf-downloader/blob/646da0d9a849b60007a122477e270b1198997835/assets/2.png" alt="inspect element window with network tab"/>

### IMP!!: Make sure that inspect element tab is open, then reload the page and instantly open the pdf file

## 5. Click on the size option, to order it from low to high

Make sure that you see some file names as :
```
img?ck=drive.......
```
This type of files are the pages of the pdf.

<img width="50%" src="https://github.com/souraOP/gdrive-pdf-downloader/blob/c5b887523bf900590a1f178702788b50bd586a6e/assets/3.png" alt="check the image file"/>

## 6. Now scroll all the way to the bottom page of the pdf, so that all the pages loads

After that you can see many ```img?ck=drive...``` loads up on the network page

After scrolling all the way to the bottom, wait for 10 or 15 seconds to load up all the files (depending upon your network connectivity).

OR, 

Check how much size it has transferred (if transferred value is almost closed to original value then its done!)

<img width="50%" src="https://github.com/souraOP/gdrive-pdf-downloader/blob/53e62be710e497fdf609f8fb066ba7d7596bdeb4/assets/4.png" alt="check the image file"/>

## 7. Go to the console tab and paste the console.js code there or simply copy it from here.

```
let jspdf = document.createElement("script");
jspdf.onload = function () {
  let pdf = new jsPDF();
  let elements = document.getElementsByTagName("img");
  for (let i in elements) {
    let img = elements[i];
    console.log("add img ", img);
    if (!/^blob:/.test(img.src)) {
      console.log("invalid src");
      continue;
    }
    let can = document.createElement('canvas');
    let con = can.getContext("2d");
    con.imageSmoothingEnabled = false; // added line
    can.width = img.width;
    can.height = img.height;
    con.drawImage(img, 0, 0, img.width, img.height);
    let imgData = can.toDataURL("image/jpeg", 1.0);
    pdf.addImage(imgData, 'JPEG', 0, 0);
    pdf.addPage();
  }
  pdf.save("download.pdf");
};
jspdf.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js';
document.body.appendChild(jspdf);
```
<img width="50%" src="https://github.com/souraOP/gdrive-pdf-downloader/blob/47e9ff2873463619378b7095a0469b76adf004ae/assets/5.png" alt="check the image file"/>

Simply paste the code here and press Enter

## 8. After that all the image files in the pdf will converted into one PDF and automatically downloaded when its done

<img width="50%" src="https://github.com/souraOP/gdrive-pdf-downloader/blob/f2eadaa87b45c7d91b072009660e3c524388940b/assets/6.png" alt="downloaded file"/>

### Make sure that you don't click anywhere else and wait for the code to execute completely!


## 9. Check the download.pdf



Thank You!
from Sourasish Mondal

Please fork this repo and make sure to give it a star!!!!

## Star History

<a href="https://star-history.com/#souraOP/gdrive-pdf-downloader&Date">
 <picture>
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=souraOP/gdrive-pdf-downloader&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=souraOP/gdrive-pdf-downloader&type=Date" />
 </picture>
</a>
