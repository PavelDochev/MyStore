package com.myStore.config;

import com.myStore.entity.Item;
import com.myStore.fakeDB.StoreDB;
import com.myStore.model.ItemViewModel;
import com.myStore.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
    private ItemService itemService;

    @Autowired
    public AppConfig(ItemService itemService){
        this.itemService = itemService;
    }

    @Bean
    public Item GenerateItems(){
        ItemViewModel itemToAdd = new ItemViewModel();
        itemToAdd.setId(0);
        itemToAdd.setName("Крик");
        itemToAdd.setDescription("За повдигане на колата");
        itemToAdd.setPrice(0.03);

        ItemViewModel anotherItemToAdd = new ItemViewModel();
        anotherItemToAdd.setId(1);
        anotherItemToAdd.setName("Чистачка");
        anotherItemToAdd.setDescription("Чисти стъклото");
        anotherItemToAdd.setPrice(0.2);


        ItemViewModel thirdItemToAdd = new ItemViewModel();
        thirdItemToAdd.setId(2);
        thirdItemToAdd.setName("Гума");
        thirdItemToAdd.setDescription("Търкаля се");
        thirdItemToAdd.setPrice(0.4);

        this.itemService.create(itemToAdd);
        this.itemService.create(anotherItemToAdd);
        this.itemService.create(thirdItemToAdd);

        return null;
    }
}
