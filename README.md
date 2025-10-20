# Angular Project Commands

- **Install dependencies:** `npm install`
 -- You run this first to install all the project's dependencies, which are listed in your package.json file. You generally only need to do this once, or whenever you add new dependencies.

- **Run the development server:** `ng serve` 
 -- After the dependencies are installed, you run this command to start the development server. This will compile your Angular application and serve it locally. As you can see in your package.json, npm run start is a shortcut for ng serve, which is what I used.
 -- The ng serve command will also watch for any changes you make to the source code and automatically reload the application in your browser.

-------------------------------------------
# What We've Learned

This project covers the fundamental concepts of modern Angular development.

### 1. Core Concepts
- **Components**: The basic building blocks of an Angular app, each consisting of a TypeScript class, an HTML template, and scoped styles.
- **Standalone Components**: Modern components are `standalone` and manage their own dependencies by explicitly `importing` the directives and pipes they use in their templates.
- **Application Configuration (`app.config.ts`)**: The central file for providing application-wide services and features.

### 2. Template Syntax (Data Binding)
- **Interpolation `{{ }}`**: For displaying data from the component's class in the template (one-way binding).
- **Property Binding `[ ]`**: For binding to an HTML element's properties, like `[disabled]`.
- **Event Binding `( )`**: For listening to events (like a button click) and calling a method in the component's class.
- **Two-Way Binding `[(ngModel)]`**: A special syntax for creating a two-way sync between a form input and a class property. Requires importing `FormsModule`.

### 3. Structural Directives (Control Flow)
- **`@if` block**: The modern syntax for conditionally adding or removing elements from the DOM.
- **`@for` block**: The modern syntax for rendering a list of items from an array. It requires a `track` expression for performance.

### 4. Component Styling
- **Scoped Styles**: CSS added to a component's `styles` property is scoped to that component, preventing it from affecting other parts of the application. The `:host` selector can be used to style the component's own element.

-------------------------------------------
# Production Build and Deployment

To prepare and deploy your application for the world to see, follow these steps:

1.  **Create a Production Build:** `npm run build`
    *   This command compiles and optimizes your application for production.
    *   It bundles all your code into a `dist/first-app` directory, which contains the static HTML, CSS, and JavaScript files that are ready to be hosted on a web server.

2.  **Deploy to Hosting:**
    *   After the build is complete, the contents of the `dist/first-app` directory are deployed to a web hosting service.
    *   We used an integrated tool to publish the contents of this folder, making the application live and accessible to everyone.
    * https://my-app-1234-46554149-eb8a2.web.app/