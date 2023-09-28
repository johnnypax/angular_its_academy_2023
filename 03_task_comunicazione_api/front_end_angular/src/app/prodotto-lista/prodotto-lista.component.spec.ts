import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottoListaComponent } from './prodotto-lista.component';

describe('ProdottoListaComponent', () => {
  let component: ProdottoListaComponent;
  let fixture: ComponentFixture<ProdottoListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdottoListaComponent]
    });
    fixture = TestBed.createComponent(ProdottoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
