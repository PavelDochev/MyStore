package com.myStore.config;

import com.myStore.entity.Item;
import com.myStore.fakeDB.StoreDB;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

    @Bean
    public Item GenerateItems(){
        Item itemToAdd = new Item();
        itemToAdd.setId(0);
        itemToAdd.setName("Крик");
        itemToAdd.setDescription("За повдигане на колата");
        itemToAdd.setPrice(10.2);

        Item anotherItemToAdd = new Item();
        anotherItemToAdd.setId(1);
        anotherItemToAdd.setName("Чистачка");
        anotherItemToAdd.setDescription("Чисти стъклото");
        anotherItemToAdd.setPrice(3.2);

        StoreDB.Items.add(itemToAdd);
        StoreDB.Items.add(anotherItemToAdd);
        return anotherItemToAdd;
    }
}
