package com.team3.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.team3.app.entities.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

}
