package com.example.mymusicapp.service;

import com.example.mymusicapp.model.Category;

import java.util.List;

public interface CategoryService {
    public Category saveCategory(Category category);
    public Category updateCategory(Category category);
    public List<Category> getAllCategories();
    public void deleteCategory(int category_id);
}
