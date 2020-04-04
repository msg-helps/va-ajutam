import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as Consts from './consts';
import RequestVsOffer from './model';
import { ActivatedRoute, Router } from '@angular/router';
import BaseHelp from '../shared/model/help.model';

@Component({
  selector: 'app-createpage',
  templateUrl: './createpage.component.html',
  styleUrls: ['./createpage.component.scss']
})
export class CreatepageComponent implements OnInit {
  addForm: FormGroup;
  helpModel: BaseHelp;
  buttonName: string;
  detailsV: string;
  nameV: string;
  personV: string;
  phoneV: string;
  addressV: string;

  object: RequestVsOffer;

  constructor(
    private router: Router
   ) { }

  ngOnInit() {
    this.initModel(this.router.url); // TAKE THIS FROM ROUTE PATH
    this.addForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      contactPerson: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required)
    });

  }

  initModel(path: string) {
    this.detailsV = Consts.DETAILS_VALIDATION;
    this.nameV = Consts.NAME_VALIDATION;
    this.personV = Consts.CONTACT_PERSON_VALIDATION;
    this.phoneV =  Consts.NUMBER_VALIDATION;
    this.addressV = Consts.ADDRESS_VALIDATION;
    this.helpModel = {
      id: '',
      description: '',
      user: null,
      contactPerson: '',
      contactPhone: '',
      address: '',
      category: null,
      createdAt: null,
      title: '',
      messages: []
    };
    this.helpModel.address = Consts.ADDRESS_LABEL;

    if (path === '/offer') {
      this.helpModel.title = Consts.OFFER_TITLE;
      this.helpModel.description = Consts.OFFER_DETAILS;
      this.buttonName = Consts.OFFER_BUTTON;
    } else if (path === '/request') {
      this.helpModel.title = Consts.REQUEST_TITLE;
      this.helpModel.description = Consts.REQUEST_DETAILS;
      this.buttonName = Consts.REQUEST_BUTTON;
    }
  }

  onSaveClick() {
    const formValues = this.addForm.value;
    // How to have model two way binding. To do directly binding
    this.object = new RequestVsOffer(formValues.title, formValues.name, formValues.contactPerson,
      formValues.phoneNumber, formValues.address);

    // TODO: Save data

  }

}
