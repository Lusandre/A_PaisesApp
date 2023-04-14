import { Component, EventEmitter, Input, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent {
  @Output() OnEnter: EventEmitter<string> = new EventEmitter();
  @Output() OnDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  termino: string = '';
  ngOnInit() {
    this.debouncer.pipe(debounceTime(300)).subscribe((valor) => {
      this.OnDebounce.emit(valor);
    });
  }
  buscar() {
    this.OnEnter.emit(this.termino);
  }
  teclaPrecionada() {
    this.debouncer.next(this.termino);
  }
}
