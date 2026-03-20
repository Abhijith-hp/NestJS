import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SkipThrottle } from '@nestjs/throttler';

@Controller('user')
@SkipThrottle()
export class UserController {

    constructor(private readonly userService: UserService){}

    @SkipThrottle({default: false})
    @Get()
    findAll(@Query('role') role?: 'INTERN' | 'EMPLOYEE', @Query('age') age?: number){
        if(age){
            return this.userService.findAll(role,+age);
        }
      return this.userService.findAll(role);
    }

    @Get(':id')
    findOne(@Param('id',ParseIntPipe)id: number){
        return this.userService.findOne(id);
    }

    @Post()
    create(@Body(ValidationPipe) createUserDto:CreateUserDto){
         return this.userService.create(createUserDto);   
    }

    @Patch(':id')
    update(@Param('id',ParseIntPipe) id:number,@Body(ValidationPipe) updateUserDto:UpdateUserDto){
        return this.userService.update(id,updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id',ParseIntPipe) id:number){
        return this.userService.remove(id)
    }
}
