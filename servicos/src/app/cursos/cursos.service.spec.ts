import { TestBed, async, inject } from '@angular/core/testing';
import { CursosService } from './cursos.service';

describe('Service: Cursos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CursosService]
    });
  });

  it('should ...', inject([CursosService], (service: CursosService) => {
    expect(service).toBeTruthy();
  }));
});
