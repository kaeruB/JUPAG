import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  constructor(
    private builder: FormBuilder) {
    this.theFormGroup = this.builder.group({
      dateFrom: ['', []],
      dateTo: ['', []],
      ageFrom: ['', []],
      ageTo: ['', []],
      wonMatchesFrom: ['', []],
      wonMatchesTo: ['', []],
      activeFrom: ['', []],
      activeTo: ['', []],
      lostMatchesFrom: ['', []],
      lostMatchesTo: ['', []],
      goalsNumberFrom: ['', []],
      goalsNumberTo: ['', []],
      yellowFlagsFrom: ['', []],
      yellowFlagsTo: ['', []],
      redFlagsFrom: ['', []],
      redFlagsTo: ['', []],
    });
  }
  theFormGroup: FormGroup;
  dateFrom;
  dateTo;
  place = 'Chosen place';

  ageFrom;
  ageTo;
  ageValues = Array.from({length: 100}, (v, k) => k + 1);
  position;
  nationality;

  trainer;

  activeFrom;
  activeTo;
  bestInSeason;
  wonMatchesFrom;
  wonMatchesTo;
  lostMatchesFrom;
  lostMatchesTo;
  matchesValues = Array.from({length: 20}, (v, k) => k);

  goalsNumberFrom;
  goalsNumberTo;
  goalsNumberValues = Array.from({length: 50}, (v, k) => k);
  season;
  redFlagsFrom;
  redFlagsTo;
  yellowFlagsFrom;
  yellowFlagsTo;
  flagsValues = Array.from({length: 20}, (v, k) => k);
  ngOnInit() {
  }
  submit(): void {
    this.theFormGroup.updateValueAndValidity();

    this.theFormGroup.get('dateFrom').updateValueAndValidity();
    this.theFormGroup.get('dateTo').updateValueAndValidity();

    this.theFormGroup.get('activeFrom').updateValueAndValidity();
    this.theFormGroup.get('activeTo').updateValueAndValidity();

    this.theFormGroup.get('ageFrom').updateValueAndValidity();
    this.theFormGroup.get('ageTo').updateValueAndValidity();

    this.theFormGroup.get('wonMatchesFrom').updateValueAndValidity();
    this.theFormGroup.get('wonMatchesTo').updateValueAndValidity();
    this.theFormGroup.get('lostMatchesFrom').updateValueAndValidity();
    this.theFormGroup.get('lostMatchesTo').updateValueAndValidity();
    this.theFormGroup.get('goalsNumberFrom').updateValueAndValidity();
    this.theFormGroup.get('goalsNumberTo').updateValueAndValidity();

    this.theFormGroup.get('yellowFlagsFrom').updateValueAndValidity();
    this.theFormGroup.get('yellowFlagsTo').updateValueAndValidity();

    this.theFormGroup.get('redFlagsFrom').updateValueAndValidity();
    this.theFormGroup.get('redFlagsTo').updateValueAndValidity();
    this.theFormGroup.setValidators(this.checkOrder);
    this.theFormGroup.updateValueAndValidity();

    if (this.theFormGroup.valid) {
      console.log('Form is valid');
    } else {
      console.log('There is still an error in the form');
    }
  }

  checkOrder(group: FormGroup): any {
    if (group) {
      if (group.get('dateFrom').value > group.get('dateTo').value) {
        return {dateNotOrdered : true};
      }
      if (group.get('activeFrom').value > group.get('activeTo').value) {
        return {activeDateNotOrdered : true};
      }
      if (group.get('ageFrom').value > group.get('ageTo').value) {
        return {ageNotOrdered : true};
      }
      if (group.get('wonMatchesFrom').value > group.get('wonMatchesTo').value) {
        return {wonMatchesNotOrdered : true};
      }
      if (group.get('lostMatchesFrom').value > group.get('lostMatchesTo').value) {
        return {lostMatchesNotOrdered : true};
      }
      if (group.get('goalsNumberFrom').value > group.get('goalsNumberTo').value) {
        return {goalsNumberNotOrdered : true};
      }
      if (group.get('yellowFlagsFrom').value > group.get('yellowFlagsTo').value) {
        return {yellowFlagsNotOrdered : true};
      }
      if (group.get('redFlagsFrom').value > group.get('redFlagsTo').value) {
        return {redFlagsNotOrdered : true};
      }
    }
    return null;
  }

}
