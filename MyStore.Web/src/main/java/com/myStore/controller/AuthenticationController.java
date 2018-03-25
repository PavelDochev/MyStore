package com.myStore.controller;

import com.myStore.fakeDB.StoreDB;
import com.myStore.model.UserViewModel;
import com.myStore.service.AuthenticationService;
import com.myStore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {
    private AuthenticationService authenticationService;
    private UserService userService;

    @Autowired
    public AuthenticationController(AuthenticationService authenticationService,
                                    UserService userService){
        this.userService = userService;
        this.authenticationService = authenticationService;
    }

    @PostMapping("api/authenticate")
    @CrossOrigin
    public ResponseEntity<UserViewModel> Authenticate(@RequestBody String userName) {

        //check if userExists in db
        UserViewModel foundUser = this.userService.GetUserByUserName(userName);

        if(foundUser == null){
            return new ResponseEntity<>(foundUser,HttpStatus.BAD_REQUEST);
        }

        foundUser.setToken("fake-jwt-token");
        //if userName == userName from DB
        return new ResponseEntity<>(foundUser,HttpStatus.ACCEPTED);
    }

    @PostMapping("api/createUser")
    public ResponseEntity<UserViewModel> createUser(@RequestBody UserViewModel user){
        //check if user exists
        return new ResponseEntity<>(user,HttpStatus.ACCEPTED);
    }
}
