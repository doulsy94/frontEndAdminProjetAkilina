import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeideeComponent } from './listeidee.component';

describe('ListeideeComponent', () => {
  let component: ListeideeComponent;
  let fixture: ComponentFixture<ListeideeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeideeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeideeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
