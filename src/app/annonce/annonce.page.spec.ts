import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnnoncePage } from './annonce.page';

describe('AnnoncePage', () => {
  let component: AnnoncePage;
  let fixture: ComponentFixture<AnnoncePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnoncePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnnoncePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
