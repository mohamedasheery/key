import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantFilterComponent } from './tenant-filter.component';

describe('TenantFilterComponent', () => {
  let component: TenantFilterComponent;
  let fixture: ComponentFixture<TenantFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
