package com.myStore.service;

import com.myStore.model.UserViewModel;

public interface UserService {
    UserViewModel CreateUser(UserViewModel user);

    UserViewModel GetUserByUserName(String userName);

}
