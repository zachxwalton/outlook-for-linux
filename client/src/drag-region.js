console.log("Drag region script loaded");

// Wait for the page to be fully loaded
function initDragRegion() {
  // Inject CSS to make the top navigation bar draggable
  const style = document.createElement('style');
  style.textContent = `
    /* Make the entire top navigation bar draggable */
    [role="banner"],
    [data-app-section="TopNavigation"],
    .ms-FocusZone[role="navigation"],
    header[role="banner"] {
      -webkit-app-region: drag !important;
      app-region: drag !important;
    }

    /* Make interactive elements within the header non-draggable */
    [role="banner"] button,
    [role="banner"] a,
    [role="banner"] input,
    [role="banner"] [role="button"],
    [role="banner"] [role="menuitem"],
    [role="banner"] [role="tab"],
    [role="banner"] [role="link"],
    [data-app-section="TopNavigation"] button,
    [data-app-section="TopNavigation"] a,
    [data-app-section="TopNavigation"] input,
    [data-app-section="TopNavigation"] [role="button"],
    [data-app-section="TopNavigation"] [role="menuitem"],
    [data-app-section="TopNavigation"] [role="tab"],
    [data-app-section="TopNavigation"] [role="link"] {
      -webkit-app-region: no-drag !important;
      app-region: no-drag !important;
    }

    /* Ensure the waffle menu and other clickable areas work */
    .ms-Button,
    .ms-CommandBarItem,
    .ms-Nav-link,
    [data-automationid],
    [class*="button"],
    [class*="Button"] {
      -webkit-app-region: no-drag !important;
      app-region: no-drag !important;
    }
  `;
  
  document.head.appendChild(style);
  console.log("Drag region CSS injected successfully");
}

// Initialize immediately and also after a delay to ensure Outlook has loaded
initDragRegion();

// Re-apply after Outlook's dynamic content loads
setTimeout(initDragRegion, 2000);
setTimeout(initDragRegion, 5000);

// Monitor for DOM changes and reapply if needed
const observer = new MutationObserver(() => {
  // Check if our style is still present
  const hasStyle = Array.from(document.head.querySelectorAll('style'))
    .some(style => style.textContent.includes('-webkit-app-region: drag'));
  
  if (!hasStyle) {
    console.log("Drag region style removed, reapplying...");
    initDragRegion();
  }
});

observer.observe(document.head, { childList: true });

console.log("Drag region observer started");

// Made with Bob
