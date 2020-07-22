package com.itheima.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itheima.mapper.activity.ActivityMapper;
import com.itheima.po.Activity;

@Service
public class ActivityService {
	
	@Autowired
	private ActivityMapper activityMapper;
	
	public  List<Activity> findActivitys() throws IOException {
		List<Activity> activitys = activityMapper.findActivitys();
		System.out.println(activitys.toString());
		return activitys;
	}
	
	public void startActivity(Activity activity) {
		activityMapper.startActivity(activity);
	}
	
	public void overActivity(Activity activity) {
		activityMapper.overActivity(activity);
	}

	public void upCredit(Activity activity) {
		activityMapper.upCredit(activity);
	}
	
	
}
