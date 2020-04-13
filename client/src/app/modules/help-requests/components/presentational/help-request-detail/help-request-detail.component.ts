import {Component, Input} from '@angular/core';
import HelpRequest from '../../../../../shared/model/help-request.model';

@Component({
  selector: 'app-help-request-detail',
  template: `
      <span>
        <app-info-card title="CE ESTE SOLICITAT">
          <app-info-card-text muted="true">{{ helpRequest.description }}</app-info-card-text>
        </app-info-card>

        <app-info-card title="CINE SOLICITA AJUTOR">
          <app-info-card-text muted="true">{{ helpRequest.requestedFor }}</app-info-card-text>
          <div class="row mt-3">
            <div class="col-6">
              <app-info-card-text muted="true">{{ helpRequest.contactPerson }}</app-info-card-text>
            </div>
            <div class="col-6 text-right">
              <app-info-card-text><a
                      [href]="'tel:' + helpRequest.contactPhone">{{ helpRequest.contactPhone }}</a></app-info-card-text>
            </div>
          </div>
        </app-info-card>

        <app-info-card title="ADRESA CORESPONDENTA">
          <app-info-card-text muted="true">{{ helpRequest.address }}</app-info-card-text>
          <div class="mt-2">
            <agm-map
                    *ngIf="mapsVisible"
                    [latitude]="mapsCoords[0]"
                    [longitude]="mapsCoords[1]"
                    [zoom]="15"
            >
              <agm-marker [latitude]="mapsCoords[0]" [longitude]="mapsCoords[1]"></agm-marker>
            </agm-map>
          </div>
        </app-info-card>

        <app-info-card title="LISTA VOLUNTARI">
          <table class="table">
            <tbody>
                <tr *ngFor="let user of helpRequest.volunteers">
                  <td>
                    <app-info-card-text>{{ user.firstName }} {{ user.lastName }}</app-info-card-text>
                  </td>
                  <td>
                    <app-info-card-text><a [routerLink]="'/user/' + user.id">Vezi profil</a></app-info-card-text>
                  </td>
                </tr>
            </tbody>
          </table>
        </app-info-card>
      </span>
  `,
  styleUrls: ['./help-request-detail.component.scss']
})
export class HelpRequestDetailComponent {
  @Input() helpRequest: HelpRequest;
  @Input() mapsVisible: boolean;
  @Input() mapsCoords: [number, number];
}
