# Angular Project Commands

- **Install dependencies:** `npm install`
 -- You run this first to install all the project's dependencies, which are listed in your package.json file. You generally only need to do this once, or whenever you add new dependencies.

- **Run the development server:** `ng serve` 
 -- After the dependencies are installed, you run this command to start the development server. This will compile your Angular application and serve it locally. As you can see in your package.json, npm run start is a shortcut for ng serve, which is what I used.
 -- The ng serve command will also watch for any changes you make to the source code and automatically reload the application in your browser.

-------------------------------------------
# How the app structured:
- main.ts starts the app --> bootstrapApplication uses app.config.ts to get the app's settings --> The providers array in app.config.ts lists application-wide features.

- That's why, to make FormsModule (and the [(ngModel)] directive) available everywhere, we need to add it to the providers array in this central configuration file.

-------------------------------------------
# Important:
- Components: You know that components are the basic building blocks of an Angular app, made of a TypeScript class and an HTML template.

- Property Binding {{ }}: You learned how to display data from your class in your template (one-way binding).

- Event Binding ( ): You learned how to trigger a method in your class when a user does something, like clicking a button.

- Two-Way Binding [( )]: You learned how to use [(ngModel)] to create a perfect two-way sync between a form input and a class property.

- Standalone Components: You now understand that modern Angular components are standalone and must explicitly import the features their templates use, like FormsModule.

- Application Configuration: You know that app.config.ts is where you provide application-wide services and features.

-------------------------------------------
# Component Styling : 
- A huge advantage of Angular's component-based architecture is that it lets you write CSS styles that are scoped specifically to that component.
- This means the styles you write for your App component will only affect the elements inside the App component's template. They won't "leak out" and accidentally change the look of other components or the rest of your page.