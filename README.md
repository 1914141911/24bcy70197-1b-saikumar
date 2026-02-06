This project is a simple banking web application built using HTML, CSS, and JavaScript with the main focus on understanding core frontend fundamentals. The application allows a user to perform basic banking actions such as depositing and withdrawing money while the account balance updates instantly on the screen. The idea behind this project is not to create a complex financial system but to clearly understand how JavaScript interacts with the DOM and handles user input in real time.

The interface displays the current account balance and provides an input field where the user can enter an amount. Based on the selected action, either deposit or withdraw, the balance is recalculated immediately. The application includes proper validation to ensure that the entered amount is valid and meaningful. Empty inputs, zero or negative values, and non-numeric entries are rejected, and the user is informed with a clear error message instead of silently failing or breaking the application.

When a withdrawal is attempted, the logic checks whether the entered amount exceeds the available balance. If the amount is greater than the current balance, the transaction is blocked and an error message is displayed. This ensures that the balance never becomes negative and keeps the logic realistic, even though the project itself is intentionally kept simple.

The entire project is developed using plain HTML for structure, CSS for styling, and vanilla JavaScript for functionality. No external libraries or frameworks are used, which makes this project useful for strengthening foundational concepts such as event handling, conditional logic, DOM manipulation, and basic state management in the browser.

To run the project, the repository can be cloned from GitHub and the index.html file can be opened directly in any modern web browser. Since there are no dependencies or build steps, the project works immediately and is suitable for quick testing or demonstration. Using Live Server in VS Code is optional but can improve the development experience.

This project is open-source and intended for learning and practice. It can be extended further by adding features such as transaction history, persistent balance storage using localStorage, dark mode, or improved mobile responsiveness. The current version, however, intentionally focuses on correctness, clarity, and clean logic rather than advanced features or heavy UI design.

Created by Sai Kumar (AIAD) as a learning-focused project to build confidence in frontend development and JavaScript fundamentals.
