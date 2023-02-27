import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVersionFormComponent } from './view-version-form.component';

describe('ViewVersionFormComponent', () => {
  let component: ViewVersionFormComponent;
  let fixture: ComponentFixture<ViewVersionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVersionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewVersionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
