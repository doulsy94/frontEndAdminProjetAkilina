import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeministereComponent } from './listeministere.component';

describe('ListeministereComponent', () => {
  let component: ListeministereComponent;
  let fixture: ComponentFixture<ListeministereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeministereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeministereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
