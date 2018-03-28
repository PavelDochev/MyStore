package com.myStore.serviceImpl;

import com.myStore.model.UserViewModel;
import com.myStore.service.AuthenticationService;
import com.myStore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {
    private UserService userService;

    @Autowired
    public AuthenticationServiceImpl(UserService userService){
        this.userService=userService;
    }

    @Override
    public UserViewModel authenticate(String userName) {

        UserViewModel user = this.userService.getByUserName(userName);

        if(user != null){

            return user;
        }

        return null;
    }
}
