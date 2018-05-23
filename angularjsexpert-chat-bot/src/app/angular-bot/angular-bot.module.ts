import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './main/main.component';
import { ChatComponent } from './chat/chat.component';
import { ChatService } from './chat.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MainComponent, ChatComponent],
  providers: [ ChatService ]
})
export class AngularBotModule { }
