function toggleContacts() {
	// body...
	var content = document.getElementById("contacts");
	if (content.style.display==="none") {
		content.style.display="block";
	}else{
		content.style.display = "none";
	}
}

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("img-modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector("#img-modal .close");

    document.querySelectorAll(".project-img img").forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
            modalImg.alt = img.alt;
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Optional: close modal when clicking outside the image
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
