import { Component, OnInit } from '@angular/core';
import { Path } from '@app/shared/interfaces';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  paths: Array<Path> = [
    {
      name: 'Публичная страница',
      link: '/public'
    },
    {
      name: 'Закрытый раздел 1',
      link: '/page1'
    },
    {
      name: 'Закрытый раздел 2',
      link: '/page2'
    },
    {
      name: 'Закрытый раздел 3',
      link: '/page3'
    },
    {
      name: 'Закрытый раздел 4',
      link: '/admin'
    },,
  ];

  constructor() { }

  ngOnInit() {
  }

}
