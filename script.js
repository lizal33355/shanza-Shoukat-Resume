function downloadPDF() {
  const element = document.querySelector(".container");

  const opt = {
    margin: 0,
    filename: 'Shanza_Shoukat_CV.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save();
}