import { TestBed } from '@angular/core/testing';
import { BookComponent } from './book.component';

import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

describe("BookComponent",()=>{
    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[BookComponent],
            imports:[MatDialogModule],
            providers:[MatDialog]
        }).compileComponents()
    })
    it("shpuld get book component",()=>{
        const fixture = TestBed.createComponent(BookComponent)
        const book = fixture.debugElement.componentInstance
        expect(book).toBeTruthy()
    })
})