import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetaComponent } from './seta.component';

describe('SetaComponent', () => {
  let component: SetaComponent;
  let fixture: ComponentFixture<SetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
