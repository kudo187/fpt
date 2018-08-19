package com.team3.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.team3.app.entities.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {

}
