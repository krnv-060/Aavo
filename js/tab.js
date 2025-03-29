function openTab(event, tabId) {
    let contents = document.querySelectorAll(".review-pane");
    let tabs = document.querySelectorAll(".review-link");

    // Hide all contents
    contents.forEach(content => {
        content.style.opacity = "0";
        setTimeout(() => {
            content.style.display = "none";
        }, 300); // Matches transition time
    });

    // Remove active class from all tabs
    tabs.forEach(tab => tab.classList.remove("active"));

    // Show the selected content with fade-in effect
    let activeContent = document.getElementById(tabId);
    setTimeout(() => {
        activeContent.style.display = "block";
        setTimeout(() => {
            activeContent.style.opacity = "1";
        }, 50);
    }, 300);

    // Mark clicked tab as active
    event.currentTarget.classList.add("active");
}