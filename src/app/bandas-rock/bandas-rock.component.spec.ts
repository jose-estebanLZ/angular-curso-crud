import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandasRockComponent } from './bandas-rock.component';

describe('BandasRockComponent', () => {
  let component: BandasRockComponent;
  let fixture: ComponentFixture<BandasRockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandasRockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandasRockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
