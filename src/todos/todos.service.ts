import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo-dto';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodosService {
    todos: Todo[] = [
        {
            id: 1,
            title: "Todos app ",
            description: "acheter nest",
            done: false,
        },
        {
            id: 2,
            title: "bread ",
            description: "acheter du pain",
            done: true,
        }
    ]

    findOne(id: string){
        return this.todos.find(todo => todo.id === Number(id))
    }


    findAll(): Todo[]{
        return this.todos
    }

    create(todo: CreateTodoDto){
        return this.todos = [...this.todos, todo];
    }

    update(id: string, todo: Todo){
        // recup todo
        const todoToUpdate = this.todos.find(todo => todo.id === +id)
        if(!todoToUpdate){
            return  new NotFoundException('Boooo pas d id dispo')
        }

        if(todo.hasOwnProperty('done')){
            todoToUpdate.done = todo.done
        }

        if(todo.title){
            todoToUpdate.title = todo.title
        }

        if(todo.description){
            todoToUpdate.description = todo.description
        }

        const updateTodos = this.todos.map(todo => todo.id !== +id ? todo : todoToUpdate)
        this.todos = [...updateTodos]

    }

    delete(id: string){
        const nb = this.todos.length
        this.todos = [...this.todos.filter(t => t.id !== +id)]
        if(this.todos.length < nb){
            console.log('je viens de supprimer')
        } else {
            console.log('motherfuck')
        }
        console.log(this.todos)
    }
}
