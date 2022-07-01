package com.example.mymusicapp.controller;

import com.example.mymusicapp.model.Category;
import com.example.mymusicapp.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @PostMapping("/add")
    public String add(@RequestBody Category category){
        categoryService.saveCategory(category);
        return "New category added!";
    }
    @GetMapping("/getAll")
    public List<Category> getAllCategories(){
        return categoryService.getAllCategories();
    }

    @PutMapping("/update")
    public String update(@RequestBody Category category){
        categoryService.updateCategory(category);
        return "Category updated";
    }
    @DeleteMapping("/delete/{category_id}")
    public void deleteCategory(@PathVariable("category_id") int category_id){
        categoryService.deleteCategory(category_id);
    }

}
