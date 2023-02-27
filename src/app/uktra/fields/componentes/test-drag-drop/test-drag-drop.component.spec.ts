import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDragDropComponent } from './test-drag-drop.component';

describe('TestDragDropComponent', () => {
  let component: TestDragDropComponent;
  let fixture: ComponentFixture<TestDragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDragDropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
