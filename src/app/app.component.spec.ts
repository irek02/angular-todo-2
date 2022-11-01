import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SearchFilterPipe } from './search-filter.pipe';

// Describe(): It's a suite of tests
describe('AppComponent', () => {
  // Compiles the components
  // Use beforeEach to tests run in isolation
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      // Declares the component to be tested
      declarations: [
        AppComponent,
        SearchFilterPipe
      ],
      // Allows any property on any element
      // Ignore the errors related to any unknown elements or properties in a template
      schemas: [
        NO_ERRORS_SCHEMA
      ],
    // Compiles component’s resources like the template, styles etc.  
    }).compileComponents();
  });

  // it(): Declaration of a single test
  it('should create the app', () => {
    // Fixture is a way of fixing the state of a component and modelling it in a browser environment
    // Fixture is a wrapper around an instance of a component
    // Have access to a component instance and template
    // You must tell the TestBed to perform data binding by calling fixture.detectChanges().
    const fixture = TestBed.createComponent(AppComponent);
    // componentInstance is the instance of the root component class
    const app = fixture.componentInstance;
    // expect(): Expect something to be true
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular Todo App'`, () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent);
     // Act
    const app = fixture.componentInstance;
    // Assert
    expect(app.title).toEqual('Angular Todo App');
  });

  it('should display todo list', async () => {

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('.todo').length > 0).toBe(true);

  });

  it('should add new todo to input', async () => {

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const newTodo =  fixture.debugElement.query(By.css('.todo-input'));
    newTodo.nativeElement.value = 'learn';

    // Dispatch an input event
    newTodo.nativeElement.dispatchEvent(new Event('input'));

    expect(newTodo.nativeElement.value).toContain('learn');

  });
    
  it('should delete todo', async () => {

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    // Assert specific todo is present
    expect(compiled.innerHTML.includes('laugh')).toBe(true);

    console.log(compiled.innerHTML);

    // Delete it
    // use click as the user would
    fixture.componentInstance.deleteTodo(1);
    fixture.detectChanges();
    
    // Assert that its no longer truthy
    expect(compiled.innerHTML.includes('laugh')).toBe(false);


  });

});

