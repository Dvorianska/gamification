import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoftAchievmentComponent } from './exoft-achievment.component';

describe('ExoftAchievmentComponent', () => {
  let component: ExoftAchievmentComponent;
  let fixture: ComponentFixture<ExoftAchievmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoftAchievmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoftAchievmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
