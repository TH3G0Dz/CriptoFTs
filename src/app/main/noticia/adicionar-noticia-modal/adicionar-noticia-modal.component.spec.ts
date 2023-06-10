import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarNoticiaModalComponent } from './adicionar-noticia-modal.component';

describe('AdicionarNoticiaModalComponent', () => {
  let component: AdicionarNoticiaModalComponent;
  let fixture: ComponentFixture<AdicionarNoticiaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarNoticiaModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarNoticiaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
