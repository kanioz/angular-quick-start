import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('creates the application root', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders the main navigation', () => {
    const navigation = fixture.debugElement.query(By.css('nav'));
    expect(navigation.nativeElement.textContent).toContain('Home');
    expect(navigation.nativeElement.textContent).toContain('About');
  });
});
