## Lumix React App Contribution Guidelines

Welcome to the Lumix community and thank you for your interest in contributing to our React app! Your contributions are highly valued, and we invite you to participate in HacktoberFest 23 by working on our project.

### How to Contribute

Follow these steps to get started with your contribution:

1. Pick an existing issue from our [Issue Tracker](https://github.com/lumix-ui/lumix/issues) or create a new one if you've identified a specific area for improvement or a bug.
2. Develop your React component that you believe will benefit fellow developers. Ensure that your component follows best practices and adheres to our coding guidelines.
3. Submit a Pull Request (PR) to merge your contribution into the Lumix project.
4. Before creating a PR, make sure to add your name and GitHub ID to the contributors' section to ensure proper credit for your work.
5. Keep in mind that every merged PR during HacktoberFest 23 will count towards your HacktoberFest contributions.

### Component Location

For now, please add your new component to the following path within the Lumix project:

**Path:** `ui/lumix/src/components`

Your component should be a JavaScript (JS) or JSX file. Make sure that your component is well-documented and that you've followed our coding standards.

### Raising a Pull Request

Once your new component is ready, create a PR by linking it to the relevant issue you've worked on. Ensure that your PR includes a clear and concise description of the changes you've made, along with any necessary documentation or testing.

### Contributor Wall

To add your name to the contributor wall of Lumix, follow these steps:

1. Open the following file: `ui/lumix/src/pages/contributors/index.js`
2. Add your name and GitHub profile link to the `contributors` array.
   ```javascript
   const contributors = [
    ...previous entries,
     {
       name: "Your Name",
       github: "https://github.com/your-username"
     },
     // Add your name here if you are raising your PR

   ];
   ```
3. Save the file and create a PR to include your contribution in the project's contributor list.

Thank you for being a part of the Lumix community and for helping make this project even better. We look forward to your contributions!
