import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      window.dispatchEvent(
      new Event('resize')
      );
    }, 300)
  }

  toggleSideBar(){
    this.toggleSideBarForMe.emit();
  }
}
