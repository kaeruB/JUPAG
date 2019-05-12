import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatchInjuriesComponent} from './match_injuries.component';


describe('MatchGoalsComponent', () => {
  let component: MatchInjuriesComponent;
  let fixture: ComponentFixture<MatchInjuriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchInjuriesComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchInjuriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
