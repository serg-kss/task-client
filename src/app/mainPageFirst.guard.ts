import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import { MainPageComponent } from "./components/main-page/main-page.component";



@Injectable({
   providedIn: 'root'
 })
export class MainPageGuard {
   private firstNavigation = true;

   constructor(private router: Router) { }

   canActivate(route: ActivatedRouteSnapshot,
               state: RouterStateSnapshot): boolean {
      if (this.firstNavigation) {
         this.firstNavigation = false;
         if (route.component != MainPageComponent) {
            this.router.navigateByUrl('');
            return false;
         }
      }
      return true;
   }
}