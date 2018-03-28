package com.myStore.service;

import com.myStore.model.ItemViewModel;
import com.myStore.model.UserViewModel;

public interface UserService {
    UserViewModel create(UserViewModel user);

    UserViewModel getByUserName(String userName);

    void addItem(String userName,ItemViewModel item);

}
