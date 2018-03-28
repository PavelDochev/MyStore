package com.myStore.service;

import com.myStore.entity.Item;
import com.myStore.model.ItemViewModel;

import java.util.List;

public interface ItemService {

    ItemViewModel create(ItemViewModel itemToAdd);

    List<ItemViewModel> getAll();

    ItemViewModel getById(long id);

}
