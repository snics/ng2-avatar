import { NgModule } from '@angular/core';
import { AvatarModule } from "./src/avatar/avatar.module";

export {
  AvatarComponent,
  AvatarModule
} from './src/avatar'

const MODULES = [
  AvatarModule
];

@NgModule({
  imports: [
    AvatarModule
  ],
  exports: MODULES
})

export class AvatarModules {
}
