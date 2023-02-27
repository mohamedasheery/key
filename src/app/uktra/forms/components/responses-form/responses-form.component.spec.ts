import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsesFormComponent } from './responses-form.component';

describe('ResponsesFormComponent', () => {
  let component: ResponsesFormComponent;
  let fixture: ComponentFixture<ResponsesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
