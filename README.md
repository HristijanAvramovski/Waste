# Waste Skip Selection Web Application

This project is a React-based web application that allows users to view, compare, and select waste skip sizes for hire. It features a modern and user-friendly interface that dynamically displays available skips, pricing, hire periods, and other relevant information.

## 🚀 Features

- 📋 **Table of Skips**: Displayed in a responsive table with skip details (image, size, price, hire period, etc.)
- 🧩 **Dialog Component**: Opens a detailed skip info dialog fixed at the bottom of the screen
- ✅ **Selection Logic**: Allows selecting one skip at a time; updates the button to "Selected"
- 🔁 **Interactive UI**: Button state changes when skip is selected or deselected
- 📱 **Responsive Design**: Optimized for mobile and desktop viewing

## 🛠️ Tech Stack

- **Frontend**: React (with functional components and hooks)
- **Styling**: CSS (custom styles for table, dialog, and buttons)
- **Tooling**: Git, GitHub, and optionally GitHub Pages for deployment

## 💡 Approach

### 1. **State Management**
The application uses `useState` to manage:
- `selectedSkipId`: Keeps track of which skip is currently selected.
- `dialogItem`: Stores the skip whose details should be shown in the bottom dialog.

### 2. **Dialog Behavior**
- When the "Select this skip" button is clicked, the corresponding skip item is passed to the dialog.
- The dialog is fixed to the bottom of the page (`position: fixed`) and contains skip info and action buttons ("Continue" and "Back").

### 3. **Button Text Logic**
- The button text immediately changes to "Selected" when a skip is selected.
- If the user clicks "Back", the selection is cleared, and the button reverts to "Select this skip".

### 4. **CSS Styling**
- The dialog appears fixed at the bottom of the screen.
- Buttons and information are aligned in a single row using Flexbox.
- Responsive styles are added for mobile devices.

## 📂 File Structure
public
src
  components
    SkipDialog
    WasteList
  App.css
  App.js
  index.css
  index.js
.gitignore
README.md
package-lock.json
package.json

