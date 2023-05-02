function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
    document.body.style.overflow = "visible";
}

const modals = document.querySelectorAll(".modal");

modals.forEach((modal) => {
    const closeButton = modal.querySelector(".close");
    closeButton.addEventListener("click", function() {
        closeModal(modal.id);
    });

    modal.addEventListener("click", function(e) {
        if (e.target === modal) {
            closeModal(modal.id);
        }
    });
});