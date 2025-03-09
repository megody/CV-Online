document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.getElementById("language-toggle");
    const elements = document.querySelectorAll("[data-it], [data-en]");
    
    // Controlla la lingua attuale dell'HTML e imposta il toggle di conseguenza
    const isEnglish = document.documentElement.lang === "en";
    toggle.checked = isEnglish;

    // Imposta i testi iniziali
    elements.forEach(el => {
        el.innerHTML = isEnglish ? el.getAttribute("data-en") : el.getAttribute("data-it");
    });

    // Evento per cambiare lingua quando il toggle viene attivato
    toggle.addEventListener("change", function() {
        const isEnglish = this.checked;

        elements.forEach(el => {
            el.innerHTML = isEnglish ? el.getAttribute("data-en") : el.getAttribute("data-it");
        });

        document.documentElement.lang = isEnglish ? "en" : "it";
    });
});

document.getElementById("download-pdf").addEventListener("click", function () {
    const cv = document.querySelector(".cv-container");

    html2canvas(cv, { scale: 2 }).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "a4"
        });

        const imgWidth = 210; // Larghezza A4 in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save("Matilde_Irace_CV.pdf");
    });
});
