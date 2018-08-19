package com.team3.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team3.app.entities.Product;
import com.team3.app.repositories.ProductRepository;
import com.team3.app.utils.HttpObject;

@Service
public class ProductServiceImp implements ProductService {
	@Override
	public Object getOne(int id) {
		return new HttpObject(true, productRepository.getOne(id));
	}

	@Autowired
	private ProductRepository productRepository;
	
	@Override
	public HttpObject getAll() {
		return new HttpObject(true, productRepository.findAll());
	}

	@Override
	public HttpObject insertOne(Product product) {
		productRepository.save(product);
		return new HttpObject(true, "Add new successfully");
	}

	@Override
	public HttpObject deleteOne(int id) {
		if (productRepository.existsById(id)) {
			productRepository.deleteById(id);
			return new HttpObject(true, "Delete successfully");
		}else {
			return new HttpObject(false, "Product with id=\"+id+\" do not exists");
		}
	}

	@Override
	public HttpObject editOne(Product product) {
		if(productRepository.existsById(product.getId())) {
			productRepository.save(product);
			return new HttpObject(true, "Edit banner successfully");
		}else {
			return new HttpObject(false, "Product with id="+product.getId()+" do not exists");
		}
		
	}

}
