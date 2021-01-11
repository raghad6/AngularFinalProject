import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ARowComponent } from './a-row.component';

describe('ARowComponent', () => {
  let component: ARowComponent;
  let fixture: ComponentFixture<ARowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ARowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ARowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
