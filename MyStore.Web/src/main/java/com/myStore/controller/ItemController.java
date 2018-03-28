package com.myStore.controller;

import com.myStore.model.ItemViewModel;
import com.myStore.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ItemController {
    private ItemService itemService;

    @Autowired
    public ItemController(ItemService itemService){
        this.itemService = itemService;
    }

    @CrossOrigin
    @GetMapping("api/items")
    public List<ItemViewModel> GetItems(){
        return this.itemService.getAll();
    }
}
