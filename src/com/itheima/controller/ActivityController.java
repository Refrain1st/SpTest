package com.itheima.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.itheima.po.Activity;
import com.itheima.po.Customer;
import com.itheima.service.ActivityService;

@Controller
public class ActivityController {
	
	@Autowired
	ActivityService activityService;
	
	@RequestMapping(value="/Activity",method=RequestMethod.GET)
    @ResponseBody
	public List<Activity> findActivitys() throws IOException{
    	List<Activity> activityList = this.activityService.findActivitys();
		return activityList;
	}
	
	@RequestMapping(value="/startA",method=RequestMethod.PUT)
    @ResponseBody
	private void startActivity(Activity activity) throws IOException {
		this.activityService.startActivity(activity);
	}
	
	@RequestMapping(value="/overA",method=RequestMethod.PUT)
    @ResponseBody
	private void overActivity(Activity activity) throws IOException {
		this.activityService.overActivity(activity);
	}
	
	@RequestMapping(value="/upC",method=RequestMethod.PUT)
    @ResponseBody
	private void upCredit(Activity activity) throws IOException {
		this.activityService.upCredit(activity);
	}
}
