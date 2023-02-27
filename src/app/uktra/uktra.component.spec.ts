import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UktraComponent } from './uktra.component';

describe('UktraComponent', () => {
  let component: UktraComponent;
  let fixture: ComponentFixture<UktraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UktraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UktraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
