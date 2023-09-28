import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottoModificaComponent } from './prodotto-modifica.component';

describe('ProdottoModificaComponent', () => {
  let component: ProdottoModificaComponent;
  let fixture: ComponentFixture<ProdottoModificaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdottoModificaComponent]
    });
    fixture = TestBed.createComponent(ProdottoModificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
