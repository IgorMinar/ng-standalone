import { Component } from '../standaloneShim';

@XComponent({
  selector: 'first-standalone-component',
  standalone: true,
  template: `I'm first! <button (click)="confirm()">click to confirm</button>`
})
export class FirstStandaloneComponent {
  confirm() {
    console.log('confirmed!');
  }
}

function XComponent(
  componentMetadata: Component & { standalone: true }
): ClassDecorator {
  console.log(`XComponent:`, componentMetadata);

  const compotentClazz = Component(componentMetadata);

  @NgModule({
    declarations: [[compotentClazz]],
    imports: [CommonModule]
  })
  class VirtualNgModule {}

  return compotentClazz;
}
