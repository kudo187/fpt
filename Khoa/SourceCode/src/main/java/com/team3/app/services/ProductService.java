package com.team3.app.services;

import com.team3.app.entities.Product;

public interface ProductService {
	Object getAll();
	Object getOne(int id);
	Object insertOne(Product product);
	Object deleteOne(int id);
	Object editOne(Product product);
}
