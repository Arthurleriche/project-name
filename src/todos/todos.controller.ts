import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo-dto';
import { Todo } from './interfaces/todo.interface';
import { TodosService } from './todos.service';


// ecoute URL /todos
@Controller('todos')
export class TodosController {

    constructor(private readonly todosService: TodosService){}
    // decorateur
    @Get()
    findAll(): Todo[] {
        // return la methode dans todos.service 
        return this.todosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.todosService.findOne(id)
    }

    @Post()
    createTodo(@Body() newTodo: CreateTodoDto ){
       return this.todosService.create(newTodo);
    }

    @Patch(':id')
    updateTodo(@Param('id') id: string, @Body() todo: CreateTodoDto ){
       return this.todosService.update(id, todo)
    }

    @Delete(':id')
    deleteTodo(@Param('id') id: string){
        return this.todosService.delete(id)
    }
}
