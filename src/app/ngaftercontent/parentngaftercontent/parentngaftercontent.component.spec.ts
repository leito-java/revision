import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentngaftercontentComponent } from './parentngaftercontent.component';

describe('ParentngaftercontentComponent', () => {
  let component: ParentngaftercontentComponent;
  let fixture: ComponentFixture<ParentngaftercontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentngaftercontentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ParentngaftercontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
