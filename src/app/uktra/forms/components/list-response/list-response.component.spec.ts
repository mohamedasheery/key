import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResponseComponent } from './list-response.component';

describe('ListResponseComponent', () => {
  let component: ListResponseComponent;
  let fixture: ComponentFixture<ListResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
