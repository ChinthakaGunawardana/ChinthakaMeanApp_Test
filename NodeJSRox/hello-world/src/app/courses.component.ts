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
    <h3>banana</h3>
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
   



    <h3>pipe</h3>
    {{course.title | uppercase | lowercase}}<br/>
    {{course.students|number}}<br/>
    {{course.rating | number:'1.1-1'}}<br/>
    {{course.price | currency:'USD':true}}<br/>
    {{course.releasDate | date:'shortDate'}}<br/>
    `
})
export class CoursesComponent{
    //data
    email='enter email hear';
    //logic
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

    course ={
        title:"The Complete Angular course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releasDate: new Date(2016, 3 ,1)
    }

}