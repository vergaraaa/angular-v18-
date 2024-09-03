import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title [title]="currentFramework()" />

    <pre>{{ frameworkAsSignal() | json }}</pre>

    <pre>{{ frameworkAsProperty | json }}</pre>
  `,
  styles: ``,
})
export default class ChangeDetectionComponent {
  constructor() {
    setTimeout(() => {
      // this.frameworkAsProperty.name = 'React';

      this.frameworkAsSignal.update((value) => ({
        ...value,
        name: 'React',
      }));

      console.log('Done');
    }, 3000);
  }

  public currentFramework = computed(
    () => `Change detection - ${this.frameworkAsSignal().name}`
  );

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseYear: 2016,
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseYear: 2016,
  };
}
