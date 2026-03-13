import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filho } from './filho';

describe('Filho', () => {
  let component: Filho;
  let fixture: ComponentFixture<Filho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Filho]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Filho);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
