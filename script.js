// Toggle visibility of sections
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden'); // Show the section
    } else {
        section.classList.add('hidden'); // Hide the section
    }
}

// Toggle Social Media Popup
function togglePopup() {
    const popup = document.getElementById('popup');
    popup.classList.toggle('hidden');
}
