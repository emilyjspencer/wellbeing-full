import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginFormComponent } from './components/forms/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { ContactComponent } from './components/contact/contact.component';
import { BreatheComponent } from './components/breathe/breathe.component';
import { VisionBoardComponent } from './components/vision-board/vision-board.component';
import { GratitudeComponent } from './components/gratitude/gratitude.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationFormComponent } from './components/forms/registration/registration.component';
import { BreathworkComponent } from './components/breathwork/breathwork.component';
import { MeditationComponent } from './components/meditation/meditation.component';
import { AboutComponent } from './components/about/about.component';
import { ModalComponent } from './modals/modal/modal.component';
import { ModalsListComponent } from './modals/modals-list/modals-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TabsComponent } from './components/tabs/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginFormComponent,
    LogoutComponent,
    SignUpComponent,
    ExerciseComponent,
    ContactComponent,
    BreatheComponent,
    VisionBoardComponent,
    GratitudeComponent,
    HomeComponent,
    RegistrationFormComponent,
    BreathworkComponent,
    MeditationComponent,
    AboutComponent,
    ModalComponent,
    ModalsListComponent,
    TabsComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
