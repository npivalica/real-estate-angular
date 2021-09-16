import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsGridComponent } from './agents-grid.component';

describe('AgentsGridComponent', () => {
  let component: AgentsGridComponent;
  let fixture: ComponentFixture<AgentsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
