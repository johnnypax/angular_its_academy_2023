import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentiInserimentoComponent } from './studenti-inserimento.component';

describe('StudentiInserimentoComponent', () => {
  let component: StudentiInserimentoComponent;
  let fixture: ComponentFixture<StudentiInserimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentiInserimentoComponent]
    });
    fixture = TestBed.createComponent(StudentiInserimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
