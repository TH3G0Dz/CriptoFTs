import { SolicitarResetSenhaComponent } from './solicitar-reset-senha.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('LoginComponent', () => {
  let component: SolicitarResetSenhaComponent;
  let fixture: ComponentFixture<SolicitarResetSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitarResetSenhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarResetSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
