package com.myStore.controller;

import com.myStore.model.ItemViewModel;
import com.myStore.model.UserViewModel;
import com.myStore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }

    @CrossOrigin
    @PostMapping("api/users/create")
    public ResponseEntity<UserViewModel> createUser(@RequestBody UserViewModel userToAdd){

        //should return correct msg for error

        //user name exists

        if(this.userService.getByUserName(userToAdd.getUserName()) != null){
            return new ResponseEntity<>(new UserViewModel(),HttpStatus.BAD_REQUEST);
        }

        UserViewModel addedUser = this.userService.create(userToAdd);
        //if some other problem occurs
        if(addedUser == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        //return added user
        return new ResponseEntity<>(addedUser, HttpStatus.ACCEPTED);
    }
    @CrossOrigin
    @GetMapping("api/users/{userName}")
    public ResponseEntity<UserViewModel> getUserByUserName(@PathVariable String userName){
        UserViewModel userViewModel = this.userService.getByUserName(userName);

        if(userViewModel == null){
            return  new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(userViewModel, HttpStatus.ACCEPTED);
    }

    @CrossOrigin
    @PostMapping("api/users/buyItem/{userName}")
    public ResponseEntity<String> buyItemForUser(@RequestBody ItemViewModel item,@PathVariable String userName){

        this.userService.addItem(userName,item);


        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
}
