import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ktbz-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  private readonly routes = environment.routes;

  navigationRoutes!: Route[];

  constructor() {}

  ngOnInit(): void {
    this.navigationRoutes = this.initRoutes();
    console.log(this.navigationRoutes);
  }

  private initRoutes() {
    return this.routes.reduce((acc: Route[], curr: any) => {
      console.log(curr);
      if (curr.fragments) {
        const fr = curr.fragments
          .reduce((acc2: string, curr2: any) => {
            return [
              ...acc2,
              { fragment: curr2.value, displayValue: curr2.displayValue },
            ];
          }, [])
          .map((item: any) => ({ ...item, path: curr.path }));
        return [...acc, ...fr];
      } else {
        return [...acc, { path: curr.path, displayValue: curr.displayValue }];
      }
    }, []);
  }
}

interface Route {
  path: string;
  fragment?: string;
  displayValue: string;
}
