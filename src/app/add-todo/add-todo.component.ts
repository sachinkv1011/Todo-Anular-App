import { Component } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  userId=""
  id=""
  title=""
  completed=""

  todo=()=>
  {
    let product:any={
      "userId":this.userId,
      "id":this.id,
      "title":this.title,
      "completed":this.completed
    }
    console.log(product)
  }


}
