import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentiListaComponent } from './studenti-lista.component';

describe('StudentiListaComponent', () => {
  let component: StudentiListaComponent;
  let fixture: ComponentFixture<StudentiListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentiListaComponent]
    });
    fixture = TestBed.createComponent(StudentiListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
