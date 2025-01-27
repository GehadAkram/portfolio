import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './resume/projects/projects.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DotsComponent } from './dots/dots.component';
import { EducationComponent } from './resume/education/education.component';
import { SkillsComponent } from './resume/skills/skills.component';
import { ExperinceComponent } from './resume/experince/experince.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ResumeComponent,
    ProjectsComponent,
    AboutComponent,
    FooterComponent,
    NavBarComponent,
    DotsComponent,
    EducationComponent,
    SkillsComponent,
    ExperinceComponent,
    TestimonialsComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
