import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentiDettaglioComponent } from './studenti-dettaglio.component';

describe('StudentiDettaglioComponent', () => {
  let component: StudentiDettaglioComponent;
  let fixture: ComponentFixture<StudentiDettaglioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentiDettaglioComponent]
    });
    fixture = TestBed.createComponent(StudentiDettaglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
