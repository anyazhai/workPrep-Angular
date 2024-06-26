import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';

import { AppComponent } from './app.component';
import { WarningAlert } from './warningalert/warningalert.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { GameControlComponent } from './warningalert/game-control/game-control.component';
import { OddComponent } from './warningalert/odd/odd.component';
import { EvenComponent } from './warningalert/even/even.component';
import { FilterPipe } from './shared/filter.pipe';
import { DropdownDirective } from './shared/dropdown.directive';
import { StructuralExDirective } from './shared/structural-ex.directive';
import { RoutingexComponent } from './routingex/routingex.component';
import { UserComponent } from './routingex/users/user/user.component';
import { UsersComponent } from './routingex/users/users.component';
import { ServerComponent } from './routingex/servers/server/server.component';
import { ServersComponent } from './routingex/servers/servers.component';
import { HomeComponent } from './routingex/home/home.component';
import { EditServerComponent } from './routingex/servers/edit-server/edit-server.component';
import { ServersService } from './routingex/servers/servers.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { FormsExampleComponent } from './forms-example/forms-example.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlert,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    FilterPipe,
    DropdownDirective,
    StructuralExDirective,
    RoutingexComponent,
    UserComponent,
    UsersComponent,
    ServerComponent,
    ServersComponent,
    HomeComponent,
    EditServerComponent,
    FormsExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    //RouterModule.forRoot(appRoutes)
    AppRoutingModule
  ],
  providers: [ServersService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
