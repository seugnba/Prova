import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalcolatriceComponent } from './calcolatrice/calcolatrice.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CalcolatriceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProvaApp';
}
