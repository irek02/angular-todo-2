import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  //Compiles the components
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      //Declares the component to be tested
      declarations: [
        AppComponent
      ],
    //Compiles component’s resources like the template, styles etc.  
    }).compileComponents();
  });

  it('should create the app', () => {
    //fixture is a way of fixing the state of a component and modelling it in a browser environment
    const fixture = TestBed.createComponent(AppComponent);
    //componentInstance is the instance of the root component class
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular Todo App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Angular Todo App');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-todo-2 app is running!');
  });
});
