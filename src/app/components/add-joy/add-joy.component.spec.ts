import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddJoyComponent } from './add-joy.component';

describe('AddJoyComponent', () => {
  let component: AddJoyComponent;
  let fixture: ComponentFixture<AddJoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJoyComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddJoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
