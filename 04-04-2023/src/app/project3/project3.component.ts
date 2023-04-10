import { Component} from '@angular/core';

@Component({
  selector: 'app-project3',
  templateUrl: './project3.component.html',
  styleUrls: ['./project3.component.css']
})
export class Project3Component {

  select:string="";
  onselect(option:string){
    this.select = option;
  }
  Lists : string[] =['NAME','SUBJECT','MARKS'];
list1 : string[] = ['Priyanka C S','Blockchain','96%'];
list2 : string[] = ['Rachana Hegde','Cloud Computing','89%'];
list3 : string[] = ['Priyanka T','Biology','93%'];
list4 : string[] = ['Rachana Purohith','Computer Networks','100%'];
list5 : string[] = ['Prathibha','Database','100%'];

  public str=" ";
  setvalue(value:any){
    this.str = value.target.value;
  }
  

}
