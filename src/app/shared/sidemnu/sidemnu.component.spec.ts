import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemnuComponent } from './sidemnu.component';

describe('SidemnuComponent', () => {
  let component: SidemnuComponent;
  let fixture: ComponentFixture<SidemnuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidemnuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidemnuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
