import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MvDetailPage } from './mv-detail.page';

describe('MvDetailPage', () => {
  let component: MvDetailPage;
  let fixture: ComponentFixture<MvDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MvDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
