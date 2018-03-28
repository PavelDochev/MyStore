package com.myStore.serviceImpl;

import com.myStore.entity.Item;
import com.myStore.fakeDB.StoreDB;
import com.myStore.model.ItemViewModel;
import com.myStore.repository.ItemRepository;
import com.myStore.service.ItemService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ItemServiceImpl implements ItemService {
    private ModelMapper modelMapper;
    private ItemRepository itemRepository;

    @Autowired
    public ItemServiceImpl(ItemRepository itemRepository,ModelMapper modelMapper){
        this.itemRepository = itemRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public ItemViewModel BuyItem(ItemViewModel itemToAdd){
        Item itemToBeAdded = this.modelMapper.map(itemToAdd,Item.class);

        StoreDB.Items.add(itemToBeAdded);

        //return last added item
        return this.modelMapper.map(StoreDB.Items.get(StoreDB.Items.size()-1),ItemViewModel.class);
    }

    @Override
    public List<ItemViewModel> GetItems(){
        List<ItemViewModel> items = new ArrayList<>();

        StoreDB.Items.forEach(x->
                items.add(this.modelMapper.map(x,ItemViewModel.class))
        );

        return items;
    }

    @Override
    public ItemViewModel GetItemById(int id) {
        for (Item x : StoreDB.Items) {
            if (x.getId() == id) {
                return this.modelMapper.map(x, ItemViewModel.class);
            }
        }
        return null;
    }
}
