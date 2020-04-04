import {Component, EventEmitter, Input, Output} from '@angular/core';
import AppStats from '../../../landing-page.model';

@Component({
  selector: 'app-landing-page-details',
  template: `
    <!-- Landing Page -->
    <div class="content" role="main">
      <!-- Situation Stats -->
      <div class="row">
        <div class="column">
          <div id="confirmati" class="card card-small">
            <span>Confirmati:
              {{ appStats.confirmati }}</span>
          </div>
        </div>
        <div class="column">
          <div id="vindecati" class="card card-small">
            <span>Vindecati:
              {{ appStats.vindecati }}</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <div id="carantina" class="card card-small">
            <span>Carantina:
              {{ appStats.carantina }}</span>
          </div>
        </div>
        <div class="column">
          <div id="izolare" class="card card-small">
            <span>Izolare:
              {{ appStats.izolare }}</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <div id="apeluri112" class="card card-small">
            <span>Apeluri 112:
              {{ appStats.call112 }}</span>
          </div>
        </div>
        <div class="column">
          <div id="telverde" class="card card-small">
            <span>Telverde:
              {{ appStats.telverde }}</span>
          </div>
        </div>
      </div>
      <!-- Footer -->
      <footer>
        <button class="btn btn-primary">Cereri/Donatii</button>
        <button class="btn btn-primary">Ofera/cere ajutor</button>
        <button class="btn btn-primary" (click)="loadStats.emit()">Profilul meu</button>
      </footer>
    </div>
  `,
  styleUrls: ['./landing-page.component.scss']
})
export class AppStatsComponent {
  @Input() appStats: AppStats;
  @Output() loadStats = new EventEmitter<void>();
}
