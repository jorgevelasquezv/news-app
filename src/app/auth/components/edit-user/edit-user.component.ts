import {
  Component,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../../domain/models/user.model';

@Component({
  selector: 'admin-edit-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-user.component.html',
})
export class EditUserComponent {
  public user: InputSignal<User> = input.required<User>();
  public saveUser: OutputEmitterRef<User> = output<User>();
  public closeModal: OutputEmitterRef<void> = output<void>();

  save() {
    this.saveUser.emit(this.user());
    this.close();
  }

  close() {
    this.closeModal.emit();
  }
}
