import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CddComponent } from './cdd.component';

describe('CddComponent', () => {
  let component: CddComponent;
  let fixture: ComponentFixture<CddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
