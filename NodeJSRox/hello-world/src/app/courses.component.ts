import {Component} from '@angular/core';
import { CoursesService } from './courses.service';


@Component({
    selector: 'courses',
    template: `
    <h2>{{ title }}<h2>
    <ul>
        <li *ngFor="let course of courses">
            {{course}}
        </li>
    </ul>
    
    <table>
        <tr>
            <td [attr.colspan]="colSpan" ></td>
        </tr>
    </table>
    
    <img [src]="imageUrl" alt="W3Schools.com">
    <div (click)="onDivClicked()">
        <button (click)="onSave($event)"  [style.backgroundColor]="isActive ? 'red' : 'blue'" class="btn btn-primary" [class.active]="isActive">Save</button>
    </div>  
    
    <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" />
    
    `
})
export class CoursesComponent{
    email='entr email hear';
    onKeyUp(){
        console.log("ENTER was Pressed", this.email);        
    }

    onDivClicked(){
        
        console.log("Div was clicked");
    }

    onSave($e){
        $e.stopPropagation();
        console.log("button was clicked",$e);
    }
    isActive = true;
    title = "List of courses";
    courses;
    colSpan = 2;
    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }


    
    imageUrl = "https://www.w3schools.com/images/w3schools_green.jpg";



}