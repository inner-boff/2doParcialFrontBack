import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdestinoComponent } from './listdestino.component';

describe('ListdestinoComponent', () => {
  let component: ListdestinoComponent;
  let fixture: ComponentFixture<ListdestinoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListdestinoComponent]
    });
    fixture = TestBed.createComponent(ListdestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
