import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BreathworkComponent } from './components/breathwork/breathwork.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { GratitudeComponent } from './components/gratitude/gratitude.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MeditationComponent } from './components/meditation/meditation.component';
import { VisionBoardComponent } from './components/vision-board/vision-board.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'meditate', component: MeditationComponent },
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'exercise', component: ExerciseComponent},
  {path: 'breathe', component: BreathworkComponent},
  {path: 'gratitude', component: GratitudeComponent},
  {path: 'vision-board', component: VisionBoardComponent},
  {path: 'sign-up', component: MeditationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
