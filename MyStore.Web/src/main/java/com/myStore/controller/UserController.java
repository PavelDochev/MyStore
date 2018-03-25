package com.myStore.controller;

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
    public ResponseEntity<UserViewModel> CreateUser(@RequestBody UserViewModel userToAdd){

        UserViewModel addedUser = this.userService.CreateUser(userToAdd);
        if(addedUser == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(userToAdd, HttpStatus.ACCEPTED);
    }

    @GetMapping("api/users/{userName}")
    public ResponseEntity<UserViewModel> GetUserByUserName(@PathVariable String userName){
        UserViewModel userViewModel = this.userService.GetUserByUserName(userName);

        if(userViewModel == null){
            return  new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(userViewModel, HttpStatus.ACCEPTED);

    }
}
