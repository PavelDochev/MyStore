package com.myStore.serviceImpl;

import com.myStore.fakeDB.StoreDB;
import com.myStore.model.UserViewModel;
import com.myStore.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;


@Service
public class UserServiceImpl implements UserService {

    @Autowired
    public UserServiceImpl(){

    }

    @Override
    public UserViewModel CreateUser(UserViewModel user) {
        UserViewModel userToAdd = new UserViewModel();
        if(StoreDB.Users == null){
            userToAdd.setId(0);
        }
        else{
            userToAdd.setId(StoreDB.Users.size());
        }
        userToAdd.setUserName(user.getUserName());
        userToAdd.setLastName(user.getLastName());
        userToAdd.setFirstName(user.getFirstName());

        StoreDB.Users.add(userToAdd);

        return userToAdd;

    }

    @Override
    public UserViewModel GetUserByUserName(String userName) {
        if(StoreDB.Users != null){
            for (UserViewModel x : StoreDB.Users) {
                if (x.getUserName().equals(userName)) {
                    return x;
                }
            }
        }
        return null;
    }
}
