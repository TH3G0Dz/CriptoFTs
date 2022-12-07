import { EmailActiveMessageComponent } from './ative-email.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('LoginComponent', () => {
  let component: EmailActiveMessageComponent;
  let fixture: ComponentFixture<EmailActiveMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailActiveMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailActiveMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
