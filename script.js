document.addEventListener('DOMContentLoaded', function () {
    // Get DOM elements
    const tabs = document.querySelectorAll('.tab');
    const avatar = document.getElementById('assistant-avatar');
    const assistantContent = document.querySelector('.assistant-content');
    const assistantHeading = assistantContent.querySelector('h1');
    const assistantParagraph = assistantContent.querySelector('p');
    const tabDropdowns = document.querySelectorAll('.tab-dropdown');
  
    // Define descriptions for each tab
    const tabDescriptions = {
      tab1: {
        heading: "About Me",
        content: "Learn more about this webpage with this button",
      },
      tab2: {
        heading: "Weather",
        content:
          "This button gives you the weather forecast of regions in your country. Click and see!",
      },
      tab3: {
        heading: "Shops Near me",
        content:
          "This button gives you a list of shopping complexs around your vicinity using your local address.",
      },
      tab4: {
        heading: "News",
        content:
          "Get info about the latest news both locally and internationally."
      }
    };
  
    // Function to update assistant content
    function updateAssistantContent(tabId) {
      const description = tabDescriptions[tabId];
      if (description) {
        assistantHeading.textContent = description.heading;
        assistantParagraph.textContent = description.content;
      }
    }
  
    // Function to animate the avatar's movement
    function animateAvatarToTab(tab) {
      const tabPosition = tab.getBoundingClientRect();
      const avatarPosition = avatar.getBoundingClientRect();
      const deltaX = tabPosition.left - avatarPosition.left;
      const deltaY = tabPosition.top - avatarPosition.top;
  
      // Animate the avatar's movement to the selected tab smoothly
      anime({
        targets: avatar,
        translateX: deltaX,
        translateY: deltaY,
        duration: 500, // Animation duration in milliseconds
        easing: 'easeInOutQuad', // Smooth easing
        complete: () => {
          // After animation, update and display the tab content
          updateAssistantContent(tab.id);
        },
      });
    }
  
    // Add click event listeners to tabs
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        // Close all other dropdowns
        tabDropdowns.forEach((dropdown, i) => {
          if (i !== index) {
            dropdown.style.display = 'none';
          }
        });
  
        // Toggle the dropdown of the clicked tab
        const dropdown = tabDropdowns[index];
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  
        // Animate the avatar to the clicked tab
        animateAvatarToTab(tab);
      });
    });
  });
  