document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); 
            const name = document.getElementById("name").value;
            const phone = document.getElementById("phone").value;

            if (name && phone) {
                alert(`Terima kasih, ${name}! Kami akan menghubungi Anda segera di nomor ${phone}.`);
                form.reset(); 
            } else {
                alert("Mohon lengkapi semua data sebelum mengirim.");
            }
        });
    }
});