import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ResumeComponent } from "../resume/resume.component";
import { HeaderComponent } from "../header/header.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CoreModule } from "../core/core.module";
import { FooterComponent } from "../footer/footer.component";
import { ContactComponent } from "../contact/contact.component";
import { AboutComponent } from "../about/about.component";
import { ExperienceModule } from "../experience/experience.module";
import { WelcomeModule } from "../welcome/welcome.module";

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule, 
    CoreModule,
    FontAwesomeModule,
    WelcomeModule,
    ExperienceModule
  ],
  declarations: [ 
    ResumeComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  exports: [ ResumeComponent ],
  providers: [  ]
})

export class ResumeModule { }
