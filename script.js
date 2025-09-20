
 function showTab(tabId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected section
    document.getElementById(tabId).classList.add('active');

    // Add active class to the matching tab
    document.querySelectorAll('.tab').forEach(tab => {
        if (tab.textContent.trim().toLowerCase() === tabId) {
            tab.classList.add('active');
        }
    });
}

function handleMobileTabChange(tabId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected section
    document.getElementById(tabId).classList.add('active');

    // Add active class to the matching tab
    document.querySelectorAll('.tab').forEach(tab => {
        if (tab.textContent.trim().toLowerCase() === tabId) {
            tab.classList.add('active');
        }
    });
}

// Animation stays the same
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('animate-fadeIn');
    });
});
