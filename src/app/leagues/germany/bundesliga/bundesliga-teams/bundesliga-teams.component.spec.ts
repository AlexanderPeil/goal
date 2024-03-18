import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundesligaTeamsComponent } from './bundesliga-teams.component';

describe('BundesligaTeamsComponent', () => {
  let component: BundesligaTeamsComponent;
  let fixture: ComponentFixture<BundesligaTeamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BundesligaTeamsComponent]
    });
    fixture = TestBed.createComponent(BundesligaTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
