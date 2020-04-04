import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import CreatePageValidation from 'src/app/shared/model/createpage-validation.model';
import BaseHelp from '../../../../shared/model/help.model';
import StaticContentLabel from '../../../../shared/model/createpage-static-content.model';

@Component({
  selector: 'app-createpage-details',
  template: `
  <div class="container" *ngIf="addForm">
  <form class="form-horizontal" [formGroup]="addForm">
    <fieldset>
      <div class="form-group">
        <label class="col-md-3 control-label" for="title">{{staticContent.title}}</label>
        <div class="col-md-9">
          <textarea formControlName="title" placeholder="Detalii despre ce oferi" id="title" type="text" class="form-control input-md"></textarea>
          <span class="help-block" *ngIf="!addForm.get('title').valid && addForm.get('title').touched">
            {{validation.detailsV}}
          </span>
        </div>
      </div>

      <div class="form-group">
        <label class="col-md-3 control-label" for="details">{{staticContent.description}}</label>
        <div class="col-md-9">
          <input formControlName="name" placeholder="Florentina Dragu"  id="name" type="text" class="form-control input-md">
          <span class="help-block" *ngIf="!addForm.get('name').valid && addForm.get('name').touched">
            {{validation.nameV}}
          </span>
          <input formControlName="contactPerson" placeholder="Persoana de contact" id="contactPerson" type="text" class="form-control input-md">
          <span class="help-block" *ngIf="!addForm.get('contactPerson').valid && addForm.get('contactPerson').touched">
            {{validation.personV}}
          </span>
          <input formControlName="phoneNumber" placeholder="Numar de telefon" id="phoneNumber" type="text" class="form-control input-md">
          <span class="help-block" *ngIf="!addForm.get('phoneNumber').valid && addForm.get('phoneNumber').touched">
            {{validation.phoneV}}
          </span>
        </div>
      </div>

      <div class="form-group">
        <label class="col-md-3 control-label" for="address">{{staticContent.address}}</label>
        <div class="col-md-9">
          <textarea formControlName="address" placeholder="Adresa de unde se poate ridicat" id="address" type="text" class="form-control input-md"></textarea>
          <span class="help-block" *ngIf="!addForm.get('address').valid && addForm.get('address').touched">
           {{validation.addressV}}
          </span>
        </div>
      </div>

      <button class="btn btn-primary" type="submit" [disabled]="!addForm.valid" (click)="saveButton.emit()">{{staticContent.buttonName}}</button>
    </fieldset>
  </form>
  </div>
  `,
  styleUrls: ['./createpage-details.component.scss']
})
export class CreatepageDetailsComponent {
  @Input() helpModel: BaseHelp;
  @Input() addForm: FormGroup;
  @Input() validation: CreatePageValidation;
  @Input() staticContent: StaticContentLabel;
  @Output() saveButton = new EventEmitter<void>();
}
