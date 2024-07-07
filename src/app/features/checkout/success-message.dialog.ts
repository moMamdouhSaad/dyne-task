import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-success-message-dialog',
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  standalone: true,
  template: `
    <h1 mat-dialog-title>Success</h1>
    <div mat-dialog-content>your order is being processed</div>
    <div mat-dialog-content>Thanks</div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Close</button>
    </div>
  `,
  styles: [
    `
      mat-dialog-content {
        padding: 20px;
      }

      mat-dialog-actions {
        display: flex;
        justify-content: flex-end;
      }
    `,
  ],
})
export class SuccessMessageDialogComponent {}
