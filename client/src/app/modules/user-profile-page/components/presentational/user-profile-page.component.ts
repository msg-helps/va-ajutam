import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-profile-page',
  template: `
  <h2> My Data </h2>
  <div class="col-md-6 col-lg-6 well">
    <form [formGroup]="userGroup">
            <div class='form-group'>
                <label for="firstName">First Name</label>
                <input 
                  type="text" class="form-control" id="firstName" 
                  formControlName="firstName">
            </div>
            <div class='form-group'>
                <label for="lastName">Last Name</label>
                <input 
                  type="text" class="form-control" id="lastName" 
                  formControlName="lastName">
            </div>
            <div class='form-group'>
                <label for="phone">Phone</label>
                <input 
                  type="tel" class="form-control" id="phone" 
                  formControlName="phone">
            </div>
            <div class='form-group'>
                <label for="organization">Organisation</label>
                <input 
                  type="text" class="form-control" id="organization" 
                  formControlName="organization">
            </div>
            <div class='form-group'>
              <label for="region">Region</label>
              <input 
                type="text" class="form-control" id="region" 
                formControlName="region">
          </div>
    </form>
</div>`,
  styleUrls: ['user-profile-page.component.scss']
})
export class UserProfilePageComponent{

  @Input() userGroup: FormGroup;

}
