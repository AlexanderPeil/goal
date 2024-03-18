import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundesligaMatchdayComponent } from './bundesliga-matchday.component';

describe('BundesligaMatchdayComponent', () => {
  let component: BundesligaMatchdayComponent;
  let fixture: ComponentFixture<BundesligaMatchdayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BundesligaMatchdayComponent]
    });
    fixture = TestBed.createComponent(BundesligaMatchdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
