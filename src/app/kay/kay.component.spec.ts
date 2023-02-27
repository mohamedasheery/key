import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KayComponent } from './kay.component';

describe('KayComponent', () => {
  let component: KayComponent;
  let fixture: ComponentFixture<KayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
