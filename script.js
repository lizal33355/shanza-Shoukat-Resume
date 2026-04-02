function downloadPDF() {
  const element = document.querySelector(".container");

  html2canvas(element, { scale: 3 }).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');

    // A4 dimensions in px (approx for 96 dpi)
    const pdfWidth = 595;  // A4 width
    const pdfHeight = 842; // A4 height

    // calculate height to maintain aspect ratio
    const imgWidth = pdfWidth;
    const imgHeight = canvas.height * pdfWidth / canvas.width;

    const pdf = new jspdf.jsPDF('p', 'pt', 'a4');
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save('Shanza_Shoukat_CV.pdf');
  });
}
