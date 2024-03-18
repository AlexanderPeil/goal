import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundesligaTableComponent } from './bundesliga-table.component';

describe('BundesligaTableComponent', () => {
  let component: BundesligaTableComponent;
  let fixture: ComponentFixture<BundesligaTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BundesligaTableComponent]
    });
    fixture = TestBed.createComponent(BundesligaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
