import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildngaftercontentComponent } from './childngaftercontent.component';

describe('ChilfngaftercontentComponent', () => {
  let component: ChildngaftercontentComponent;
  let fixture: ComponentFixture<ChildngaftercontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildngaftercontentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildngaftercontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
