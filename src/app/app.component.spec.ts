import { TestBed } from '@angular/core/testing';
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
    // Compiles component’s resources like the template, styles etc.  
    }).compileComponents();
  });

  // it(): Declaration of a single test
  it('should create the app', () => {
    // Fixture is a way of fixing the state of a component and modelling it in a browser environment
    // Fixture is a wrapper around an instance of a component
    // Have access to a component instance and template
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

  // verify new todo gets added to the list
  it('should add new todo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
   
  });


});
