package com.itheima.po;

public class Activity {
	private Integer activityId;
	private String activityName;
	private Double activityCredits;
	private String activityClub;
	private String activityFile;
	private String activityStatus;
	public Integer getActivityId() {
		return activityId;
	}
	public void setActivityId(Integer activityId) {
		this.activityId = activityId;
	}
	public String getActivityName() {
		return activityName;
	}
	public void setActivityName(String activityName) {
		this.activityName = activityName;
	}
	public Double getactivityCredits() {
		return activityCredits;
	}
	public void setactivityCredits(Double activityCredits) {
		this.activityCredits = activityCredits;
	}
	public String getActivityClub() {
		return activityClub;
	}
	public void setActivityClub(String activityClub) {
		this.activityClub = activityClub;
	}
	public String getActivityFile() {
		return activityFile;
	}
	public void setActivityFile(String activityFile) {
		this.activityFile = activityFile;
	}
	public String getActivityStatus() {
		return activityStatus;
	}
	public void setActivityStatus(String activityStatus) {
		this.activityStatus = activityStatus;
	}
	@Override
	public String toString() {
		return "Activity [activityId=" + activityId + ", activityName=" + activityName + ", activityCredits="
				+ activityCredits + ", activityClub=" + activityClub + ", activityFile=" + activityFile
				+ ", activityStatus=" + activityStatus + "]";
	}
	
}
