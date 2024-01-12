import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRjUiKitComponent } from './ngx-rj-ui-kit.component';

describe('NgxRjUiKitComponent', () => {
  let component: NgxRjUiKitComponent;
  let fixture: ComponentFixture<NgxRjUiKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxRjUiKitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxRjUiKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
