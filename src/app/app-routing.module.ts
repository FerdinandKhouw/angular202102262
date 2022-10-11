import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  { path: "admin", component: AdminComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent},
  { path: "admin", component: AdminComponent},
  { path: "header", component: HeaderComponent},
  { path: "sidebar", component: SidebarComponent},
  { path: "content", component: ContentComponent},
  { path: "footer", component: FooterComponent},
  { path: "", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
