import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterResponseComponent } from './filter-response.component';

describe('FilterResponseComponent', () => {
  let component: FilterResponseComponent;
  let fixture: ComponentFixture<FilterResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
