# Interactive Custom Cursor

This project creates a custom mouse cursor that tracks the mouse movement within a designated area and changes its size when it enters a specific container element. This is a fun, interactive effect for websites where you want to add a unique user experience.

## Live link : https://piyush-raj-sharma.github.io/Interactive-Custom-Cursor/

## Features:
- Custom cursor that follows the mouse movement within the `.main` container.
- Cursor scales up when it enters the `.container` area.
- Smooth transition effect for scaling.

## How It Works:
1. The cursor follows the mouse's position within the `.main` container.
2. When the mouse enters the `.container` area, the cursor scales up to `1.5x` its size.
3. When the mouse leaves the `.container`, the cursor resets to its original size.

## Installation:
1. Clone the repository or download the files to your local machine.
2. Open the `index.html` file in your browser to view the interactive cursor in action.

## Files:
- **index.html**: The HTML structure that contains the main content and the container.
- **style.css**: The styling of the custom cursor and the overall page layout.
- **mouseTracker.js**: The JavaScript file that contains the logic for tracking the mouse and applying the scale effect.

## How to Customize:
- You can change the cursor's size by adjusting the `width` and `height` properties in the `.cursor` class in the `style.css` file.
- The scale effect can be modified by changing the value in the `cursor.style.transform` property in the `mouseTracker.js` file.
- You can also modify the boundaries by adjusting the `.container` element's dimensions.
