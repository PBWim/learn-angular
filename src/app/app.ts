// This is the main component of your application.

import {Component} from '@angular/core';
import { FormsModule } from '@angular/forms'; // This imports the FormsModule into the file.
// import { NgIf } from '@angular/common'; // This line imports the NgIf directive from Angular's common library.

// This is the metadata, using the @Component decorator
// @Component: This is a "decorator" that tells Angular that the App class is a component.
@Component({
  selector: 'app-root', // This is like a custom HTML tag for this component
                        // This defines the custom HTML tag for this component. 
                        // If you look in your index.html file, you will find <app-root></app-root>. 
                        // That's where Angular injects this component.

  standalone: true, // This tells Angular that this component manages its own dependencies.

  // While 'app.config.ts' makes FormsModule's services available to the whole app, 
  // this imports array makes its template features (the directives) available to this 
  // specific component.
  imports: [
    FormsModule // This is the crucial part. It tells your component's template: 
                // "You are allowed to use the features from FormsModule," 
                // which includes the [(ngModel)] directive.
                
    // NgIf // By adding NgIf to the component's imports array, you are telling the 
         // App component's template that it is allowed to use the *ngIf directive.
  ],

  styles: [`
    :host {
      // This is a special selector in Angular. It targets the "host" element of the component 
      // itself (the <app-root> tag). We've used it to set a default font.
      font-family: sans-serif;
    }
    h4 {
      color: #336699;
    }
    input {
      border: 1px solid #ccc;
      padding: 8px;
      border-radius: 4px;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      background-color: #f0f0f0;
      padding: 10px;
      margin-bottom: 5px;
      border-radius: 4px;
    }
  `],

  template: // This is the HTML template for the component
            // This is the HTML that gets displayed.
  `
    <u>One way data binding</u>
    <br/>
    <h4>{{ title }}</h4>

    <u>Two way data binding with ngModel</u> <br/>
    This is extremely useful for form inputs, where you want a value to be displayed 
    in an input field and also have any changes from the user automatically 
    update the property in your class.
    <br/>
    <div>
      <input [(ngModel)]="title">
    </div>

    <br/><br/>

    <u>Event Binding & Attribute binding</u> <br/>
    Lets you control the attributes of an element, 
    like disabled, hidden, src (for images), or href (for links).
    <br/>
    <div>
      <button 
        [disabled]="title.length === 0"
        (click)="buttonClicked()">
          Click Me
      </button>
    </div>   

    <br/> <br/>
    <hr/>

    <u>Directives</u> <br/>

    <u>1.  IF </u> <br/>
    Structural directives shape or reshape the DOM's structure, typically by adding, 
    removing, or manipulating elements. 
    They are easy to spot because they always start with an asterisk *.

    This is much more powerful than just hiding an element with [hidden]="true". 
    *ngIf completely removes it from the webpage, which can be more efficient.

    <!--
    <div *ngIf="title === 'Button Clicked'">
      <p>You clicked the button!</p>
    </div>
    -->

    <br/> <br/>

    Since Angular v17, there is a new, built-in syntax for control flow that is cleaner, 
    more powerful, and doesn't require any imports. It's called the @ if block.

    @if (title === 'Button Clicked') {
      <div>
        <p>You clicked the button!</p>
      </div>
    }

    <br/> <br/>

    <u>2. FOR </u> <br/>

    This block iterates over the shoppingList array.

    <h2>My Shopping List</h2>
    <ul>
      @for (item of shoppingList; track item) {
        <li>{{ item }}</li>
      }
    </ul>
  `, 
})

// This is the component's class
export class App {
  title : string = 'My First Angular App'; // one-way data binding
    // The data flows one way: from the component's class to the template.

  // New array for our shopping list
  shoppingList = [
    'Milk',
    'Bread',
    'Eggs',
    'Cheese',
  ];

  // Event Binding
  buttonClicked(){
    this.title = 'Button Clicked';
  }
}
