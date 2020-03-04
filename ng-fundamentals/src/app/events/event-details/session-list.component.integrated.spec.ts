import { ComponentFixture, async, TestBed } from "@angular/core/testing"
import { SessionListComponent } from './session-list.component'
import { DebugElement } from '@angular/core'
import { AuthService } from 'src/app/user/auth.service'
import { VoterService } from '.'


describe('SessionListComponent', () => {
    let fixture: ComponentFixture<SessionListComponent>,
        component: SessionListComponent,
        element: HTMLElement,
        debugEl: DebugElement

    beforeEach(async(() => {
        let mockAuthService = {};
        let mockVoterService = {};

        TestBed.configureTestingModule({
           imports: [],
           declarations: [
               SessionListComponent
           ],
           providers: [
               { provide: AuthService, useValue: mockAuthService },
               { provide: VoterService, useValue: mockVoterService }
           ],
           schemas: []
        })


    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;

    })
})

