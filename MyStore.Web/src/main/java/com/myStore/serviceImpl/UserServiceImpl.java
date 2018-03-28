package com.myStore.serviceImpl;

import com.myStore.entity.Item;
import com.myStore.entity.User;
import com.myStore.model.ItemViewModel;
import com.myStore.model.UserViewModel;
import com.myStore.repository.UserRepository;
import com.myStore.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl implements UserService {
    private ModelMapper modelMapper;
    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository,ModelMapper modelMapper) {
        this.userRepository= userRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public UserViewModel create(UserViewModel user) {
        User userToAdd = this.modelMapper.map(user,User.class);
        this.userRepository.saveAndFlush(userToAdd);

        return this.modelMapper.map(userToAdd,UserViewModel.class);

    }

    @Override
    public UserViewModel getByUserName(String userName) {
        User user = this.userRepository.findByUserName(userName);
        if(user!=null){
            return this.modelMapper.map(user,UserViewModel.class);
        }
        return null;
    }

    @Override
    public void addItem(String userName,ItemViewModel itemToAdd) {
        User userToUpdate = this.userRepository.findByUserName(userName);

        if(userToUpdate!=null){
            userToUpdate.addItem(this.modelMapper.map(itemToAdd,Item.class));
            this.userRepository.saveAndFlush(userToUpdate);
        }
    }
}
