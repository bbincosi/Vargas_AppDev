import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ComponentPage } from './component.page';

describe('ComponentPage', () => {
  let component: ComponentPage;
  let fixture: ComponentFixture<ComponentPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(ComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
