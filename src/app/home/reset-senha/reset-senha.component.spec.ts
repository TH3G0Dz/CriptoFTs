import { ResetSenhaComponent } from './reset-senha.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('LoginComponent', () => {
  let component: ResetSenhaComponent;
  let fixture: ComponentFixture<ResetSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetSenhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
