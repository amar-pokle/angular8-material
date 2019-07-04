import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  accounts = [
    { 
      icon:'person',
      name: 'Personal information',
      desc:'Update your name,phone numbers and email addresses.'
    },
    {
      icon:'language',
      name: 'Language',
      desc:'Let us know your language and translation preferences'
    },
    {
      icon:'payments',
      name: 'Payment',
      desc:'Manage your payment settings and see your payment history'
    },
    
  ];
  
  Privacys = [
    {
      icon:'https',
      name: 'Privacy settings',
      desc:'Control whoo can see your posts and content, as well as who can search for you'
    },
    {
      icon:'timeline',
      name: 'Timeline and tagging',
      desc:'Control whoo can see your posts and content, as well as who can search for you'
    },
    {
      icon:'public',
      name: 'Public Posts',
      desc:'Manage who can follow you, and who can comment on your public posts'
    },
    {
      icon:'block',
      name: 'Blocking',
      desc:'Review people who you  have perviously blocked'
    },
    {
      icon:'location_on',
      name: 'Location',
      desc:'Manage your location settings'
    }
  ];
  notifications = [
    {
      icon:'notifications_none',
      name: 'Notification settings',
      desc:'choose which notifications you want and where you receive them'
    },
    {
      icon:'textsms',
      name: 'Text messaging',
      desc:'Edit preferences for sending and receiving text messages'
    },
    {
      icon:'email',
      name: 'Email',
      desc:'Manage your email notifications'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
