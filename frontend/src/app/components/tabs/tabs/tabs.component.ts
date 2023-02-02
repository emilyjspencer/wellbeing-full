import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {



  constructor() { }

  @ContentChildren(TabComponent) tabsList!: QueryList<TabComponent>

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    console.log(this.tabsList)
    const activeTabs = this.tabsList?.filter (tab => tab.isActive)

    if(activeTabs.length === 0) {
      this.setActiveTab(this.tabsList.first)
    }
  }

  setActiveTab(tab: TabComponent) {
   this.tabsList.forEach(tab => {
    tab.isActive = false;
   })
   tab.isActive = true;

   return false;
  }

}

