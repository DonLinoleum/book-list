import { TestBed } from '@angular/core/testing';
import { AuthorComponent } from './author.component';

import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

describe('AuthorComponent',()=>{
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AuthorComponent],
            imports :[MatDialogModule],
            providers:[MatDialog]  
        }).compileComponents()
    })

    it('should get author component',()=>{
        const fixture = TestBed.createComponent(AuthorComponent);
        const author = fixture.debugElement.componentInstance
        expect(author).toBeTruthy()
    })
})