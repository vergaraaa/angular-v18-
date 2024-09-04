import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, computed, inject, Signal } from '@angular/core';
import { switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

import { TitleComponent } from '@shared/title/title.component';
import { User } from '@interfaces/req-response.interface';
import { UsersService } from '@services/users.service';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="titleLabel()" />

    @if (user()) {
    <section>
      <img [srcset]="user()!.avatar" [alt]="user()!.first_name" />

      <div>
        <h3>{{ user()!.first_name }} {{ user()!.last_name }}</h3>

        <p>{{ user()!.email }}</p>
      </div>
    </section>
    } @else {
    <p>Loading user...</p>
    }
  `,
  styles: ``,
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  // public user = signal<User | undefined>(undefined);
  public user: Signal<User | undefined> = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(id))
    )
  );

  titleLabel = computed(() => {
    if (!this.user()) {
      return 'User info';
    }

    return `User info ${this.user()?.first_name} ${this.user()?.last_name}`;
  });
}
