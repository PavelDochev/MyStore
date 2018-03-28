package com.myStore.service;

import com.myStore.model.UserViewModel;

public interface AuthenticationService {

    UserViewModel authenticate(UserViewModel user);
}
