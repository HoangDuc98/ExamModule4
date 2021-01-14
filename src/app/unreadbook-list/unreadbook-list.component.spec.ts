import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnreadbookListComponent } from './unreadbook-list.component';

describe('UnreadbookListComponent', () => {
  let component: UnreadbookListComponent;
  let fixture: ComponentFixture<UnreadbookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnreadbookListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnreadbookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
