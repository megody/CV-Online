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

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    doc.text("Matilde Irace - CV", 10, 10); // Titolo CV
    
    // Prende il contenuto del CV e lo inserisce nel PDF
    const content = document.body.innerText;
    doc.text(content, 10, 20);
    
    doc.save("Matilde_Irace_CV.pdf"); // Salva il PDF
}