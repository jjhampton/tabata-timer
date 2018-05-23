import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor() { }

  playWhistle() {
    const audio = new Audio();
    audio.src = '../assets/whistle.mp3';
    audio.load();
    audio.play();
  }

  playAlarm() {
    const audio = new Audio();
    audio.src = '../assets/alarm.mp3';
    audio.load();
    audio.play();
  }
}
