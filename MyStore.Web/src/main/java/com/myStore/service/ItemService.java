package com.myStore.service;

import com.myStore.entity.Item;
import com.myStore.model.ItemViewModel;

import java.util.List;

public interface ItemService {

    ItemViewModel BuyItem(ItemViewModel itemToAdd);

    List<ItemViewModel> GetItems();

    ItemViewModel GetItemById(int id);

}
