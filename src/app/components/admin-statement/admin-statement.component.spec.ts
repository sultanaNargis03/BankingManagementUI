import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStatementComponent } from './admin-statement.component';

describe('AdminStatementComponent', () => {
  let component: AdminStatementComponent;
  let fixture: ComponentFixture<AdminStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
