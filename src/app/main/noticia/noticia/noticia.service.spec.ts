import { TestBed } from '@angular/core/testing';
import { NoticiaService } from './noticia.service';

describe('UsuarioService', () => {
  let service: NoticiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoticiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
