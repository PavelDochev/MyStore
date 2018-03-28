package com.myStore.serviceImpl;

import com.myStore.entity.Item;
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
    public ItemViewModel create(ItemViewModel itemToAdd) {
        Item item = this.modelMapper.map(itemToAdd,Item.class);

        this.itemRepository.saveAndFlush(item);

        return this.modelMapper.map(this.itemRepository.findFirstByOrderByIdDesc(),ItemViewModel.class);
    }

    @Override
    public List<ItemViewModel> getAll() {

        List<ItemViewModel> items = new ArrayList<>();
        this.itemRepository.findAll().forEach(x->
                items.add(this.modelMapper.map(x,ItemViewModel.class))
        );

        return items;
    }

    @Override
    public ItemViewModel getById(long id) {

        return this.modelMapper.map(this.itemRepository.findById(id),ItemViewModel.class);
    }
}
