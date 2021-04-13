import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PAchievmentsComponent } from './p-achievments.component';

describe('PAchievmentsComponent', () => {
  let component: PAchievmentsComponent;
  let fixture: ComponentFixture<PAchievmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PAchievmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PAchievmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
