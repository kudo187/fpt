package com.team3.app.services;

import com.team3.app.entities.Banner;

public interface BannerService {
	Object getAll();
	Object insertOne(Banner banner);
	Object deleteOne(int id);
	Object editOne(Banner banner);
}
