import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RoutesModule } from '../../routes.module'
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RoutesModule],
      declarations: [  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it( 'validate name init null', () => {
    expect ( component.frmPersonalData.get('name').value ).toBeNull;
  })

  fit ( 'name no spaces validation', () => {
     component.frmPersonalData.get('name').setValue('sadkfjhask sdh');
    expect ( component.frmPersonalData.get('name').errors )
      .toEqual({ 
        'message': 'este campo no acepta espacios.', 
        'value' : true,
        'error': 403
    });
    }
  )
  
});

