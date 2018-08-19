package com.team3.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team3.app.entities.Banner;
import com.team3.app.repositories.BannerRepository;
import com.team3.app.utils.HttpObject;

@Service
public class BannerServiceImp implements BannerService{

	@Autowired
	BannerRepository repository;
	
	@Override
	public HttpObject getAll() {
		return new HttpObject(true, repository.findAll());
	}

	@Override
	public HttpObject insertOne(Banner banner) {
		repository.save(banner);
		return new HttpObject(true, "Add banner successfully");
	}

	@Override
	public Object deleteOne(int id) {
		if(repository.existsById(id)) {
			repository.deleteById(id);
			return new HttpObject(true, "Delete banner successfully");
		}else {
			return new HttpObject(false, "Banner with id="+id+" do not exists");
		}
	}

	@Override
	public Object editOne(Banner banner) {
		if(repository.existsById(banner.getId())) {
			repository.save(banner);
			return new HttpObject(true, "Edit banner successfully");
		}else {
			return new HttpObject(false, "Banner with id="+banner.getId()+" do not exists");
		}
	}

	

}
