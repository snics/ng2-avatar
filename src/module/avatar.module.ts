import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AvatarComponent } from './component/avatar.component';

// Export module's public API
export { AvatarComponent } from './component/avatar.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    AvatarComponent
  ],
  declarations: [
    AvatarComponent
  ]
})
export class AvatarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AvatarModule,
      providers: []
    };
  }
}
