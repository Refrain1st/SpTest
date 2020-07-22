package com.itheima.mapper.activity;

import java.util.List;

import com.itheima.po.Activity;

public interface ActivityMapper {
	
	Activity findActivity(String activityName);
	List<Activity> findActivitys();
	
	void startActivity(Activity activity);
	//活动结束
	void overActivity(Activity activity);
	//学分增加
	void upCredit(Activity activity);
	
}
