import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import StaticContentLabel from 'src/app/shared/model/createpage-static-content.model';
import CreatePageValidation from 'src/app/shared/model/createpage-validation.model';
import BaseHelp from 'src/app/shared/model/help.model';
import RequestOfferDTO from 'src/app/shared/model/RequestOfferDTO';
import { LoadHelpOfferRequest } from '../../state/createpage.action';
import { selectHelpOfferRequestState, StateWithHelpOfferRequest } from '../../state/createpage.reducer';
import * as Consts from './../../../../shared/consts';


@Component({
  selector: 'app-smart-createpage-details',
  template: `
    <app-createpage-details
      [helpModel]="helpModel$ | async"
      [addForm]="addForm"
      [validation]="validation"
      [saveButton]="onSaveClick()"
      [staticContent]="staticContent"
    >
    </app-createpage-details>
  `,
  styleUrls: ['./smart-createpage-details.component.scss']
})
export class SmartCreatePageDetailsComponent implements OnInit {
  addForm: FormGroup;
  loading$: Observable<boolean>;
  saving$: Observable<boolean>;
  helpModel$: Observable<BaseHelp>;
  requestOfferDTO: RequestOfferDTO;
  validation: CreatePageValidation;
  staticContent: StaticContentLabel;

  constructor(private store: Store<StateWithHelpOfferRequest>, private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
    this.initModel(this.router.url); // TAKE THIS FROM ROUTE PATH
  //TODO: Inspect and resolve the failing data
    this.helpModel$ = this.store.select(selectHelpOfferRequestState).pipe(select(state => state.data));
    this.loading$ = this.store.select(selectHelpOfferRequestState).pipe(select(state => state.loading));
    this.saving$ = this.store.select(selectHelpOfferRequestState).pipe(select(state => state.saving));

    this.addForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      contactPerson: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required)
    });
    this.route.params.subscribe(param => {
      this.store.dispatch(new LoadHelpOfferRequest(param.id));
    });
  }

  initModel(path: string) {
    this.validation = {
      addressV: Consts.ADDRESS_VALIDATION,
      detailsV: Consts.DETAILS_VALIDATION,
      phoneV: Consts.NUMBER_VALIDATION,
      personV: Consts.CONTACT_PERSON_VALIDATION,
      nameV: Consts.NAME_VALIDATION
    };

    this.staticContent = {
      title: '',
      description: '',
      address: Consts.ADDRESS_LABEL,
      buttonName: ''
    };

    if (path === '/help/offer') {
      this.staticContent.title = Consts.OFFER_TITLE;
      this.staticContent.description = Consts.OFFER_DETAILS;
      // this.helpModel$.subscribe( data =>  data.title = Consts.OFFER_TITLE);
      // this.helpModel$.subscribe( description =>  Consts.OFFER_DETAILS);
      this.staticContent.buttonName = Consts.OFFER_BUTTON;
    } else if (path === '/help/request') {
      this.staticContent.title = Consts.REQUEST_TITLE;
      this.staticContent.description = Consts.REQUEST_DETAILS;
      this.staticContent.buttonName = Consts.REQUEST_BUTTON;
    }
  }

  onSaveClick() {
    const formValues = this.addForm.value;
    // How to have model two way binding. To do directly binding
    this.requestOfferDTO = new RequestOfferDTO(formValues.title, formValues.name, formValues.contactPerson,
      formValues.phoneNumber, formValues.address);

    // TODO: Save data

  }
}
