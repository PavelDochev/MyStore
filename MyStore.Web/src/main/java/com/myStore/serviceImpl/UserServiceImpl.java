package com.myStore.serviceImpl;

import com.myStore.entity.User;
import com.myStore.fakeDB.StoreDB;
import com.myStore.model.UserViewModel;
import com.myStore.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl implements UserService {
    private ModelMapper modelMapper;

    @Autowired
    public UserServiceImpl(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    @Override
    public UserViewModel CreateUser(UserViewModel user) {
        User userToAdd = this.modelMapper.map(user,User.class);
        if (StoreDB.Users == null) {
            userToAdd.setId(0);
        } else {
            userToAdd.setId(StoreDB.Users.size());
        }
        StoreDB.Users.add(userToAdd);

        return this.modelMapper.map(userToAdd,UserViewModel.class);

    }

    @Override
    public UserViewModel GetUserByUserName(String userName) {
        if (StoreDB.Users != null) {
            for (User x : StoreDB.Users) {
                if (x.getUserName().equals(userName)) {
                    return this.modelMapper.map(x,UserViewModel.class);
                }
            }
        }
        return null;
    }
}
