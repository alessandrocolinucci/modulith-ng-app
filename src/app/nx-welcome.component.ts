import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'modulith-ng-app-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="items-center">
      <h1 class="underline">Welcome to Modulith!</h1>
    </div>
  `,
})
export class NxWelcomeComponent {}
