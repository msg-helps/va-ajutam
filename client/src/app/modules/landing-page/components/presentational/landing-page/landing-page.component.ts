import {Component, EventEmitter, Input, Output} from '@angular/core';
import AppStats from '../../../landing-page.model';

@Component({
  selector: 'app-landing-page-details',
  template: `
    <!-- Landing Page -->
    <div class="content container" role="main">
      <!-- Situation Stats -->
      <div class="row">
        <div class="col">
          <div id="confirmati" class="card card-small">
            <span>Confirmati:
              {{ appStats.confirmed }}</span>
          </div>
        </div>
        <div class="col">
          <div id="vindecati" class="card card-small">
            <span>Vindecati:
              {{ appStats.cured }}</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div id="carantina" class="card card-small">
            <span>Carantina:
              {{ appStats.quarantined }}</span>
          </div>
        </div>
        <div class="col">
          <div id="izolare" class="card card-small">
            <span>Izolare:
              {{ appStats.isolated }}</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div id="decese" class="card card-small">
            <span>Decese:
              {{ appStats.deaths }}</span>
          </div>
        </div>
        <div class="col">
          <div id="teste" class="card card-small">
            <span>Teste:
              {{ appStats.tests }}</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div id="apeluri112" class="card card-small">
            <span>Apeluri 112:
              {{ appStats.call112 }}</span>
          </div>
        </div>
        <div class="col">
          <div id="telverde" class="card card-small">
            <span>Telverde:
              {{ appStats.telVerde }}</span>
          </div>
        </div>
      </div>
      <!-- Application Stats -->
      <div class="row">
        <i class="fa fa-user"></i>
        <p>{{ appStats.newUsers }} Utilizatori noi inregistrati</p>
      </div>
      <div class="row">
        <i class="fa fa-question"></i>
        <p>{{ appStats.newRequests }} Cereri noi in preajma</p>
      </div>
      <div class="row">
        <i class="fa fa-search"></i>
        <p>{{ appStats.nearbySearch }} Cautari in zona ta</p>
      </div>
      <div class="row">
        <i class="fa fa-heart"></i>
        <p>{{ appStats.completedRequests }} Cereri complete <3</p>
      </div>
      <!-- Testing purposes -->
      <div class="modal-footer justify-content row fixed-bottom">
        <button class="btn btn-primary" (click)="loadStats.emit()">Reload</button>
      </div>
    </div>
  `,
  styleUrls: ['./landing-page.component.scss']
})
export class AppStatsComponent {
  @Input() appStats: AppStats;
  @Output() loadStats = new EventEmitter<void>();
}
