import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar.component';
import { AvatarModule } from './avatar.module';

export * from './avatar.component';
export * from './avatar.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AvatarComponent,
    AvatarModule
  ],
  exports: [
  AvatarComponent,
  AvatarModule
  ]
})
export class Ng2AvatarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AvatarModule,
      providers: [AvatarModule]
    };
  }
}
