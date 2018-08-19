package com.team3.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.team3.app.entities.Product;
import com.team3.app.services.ProductService;

@RestController
@RequestMapping("/pages/product")
@CrossOrigin("http://localhost:4200")
public class ProductController {
	@Autowired
	private ProductService productService;

	@GetMapping(value = {"","/"})
	Object viewAll() {
		return productService.getAll();
	}

	@PostMapping(value = "/insert")
	Object addOne(Product product) {
		return productService.insertOne(product);
	}

	@DeleteMapping(value = "/delete/{id}")
	Object deleteOne(@PathVariable int id) {
		return productService.deleteOne(id);
	}

	@PutMapping(value = "/edit")
	Object editOne(Product product) {
		return productService.editOne(product);
	}

	@GetMapping("/edit/{id}")
	Object getOne(@PathVariable("id") int id){
		return productService.getOne(id);
	}
}
