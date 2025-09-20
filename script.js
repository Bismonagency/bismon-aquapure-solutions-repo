
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
            
            // Add active class to selected tab
            event.target.classList.add('active');
        }

        function handleMobileTabChange(tabId) {
            // Hide all sections
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show selected section
            document.getElementById(tabId).classList.add('active');
        }

        // Add animation to sections when they become visible
        document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                section.classList.add('animate-fadeIn');
            });
        });
    </script>

