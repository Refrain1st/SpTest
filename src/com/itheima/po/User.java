package com.itheima.po;

public class User {
	private Integer userId;
	private Integer userStuId;
	private String userName;
	private String userClub;
	private Double userCredit;
	private String userPassword;
	private String userAdm;
	private String userActivity;
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public Integer getUserStuId() {
		return userStuId;
	}
	public void setUserStuId(Integer userStuId) {
		this.userStuId = userStuId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserClub() {
		return userClub;
	}
	public void setUserClub(String userClub) {
		this.userClub = userClub;
	}
	public Double getUserCredit() {
		return userCredit;
	}
	public void setUserCredit(Double userCredit) {
		this.userCredit = userCredit;
	}
	public String getUserPassword() {
		return userPassword;
	}
	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}
	public String getUserAdm() {
		return userAdm;
	}
	public void setUserAdm(String userAdm) {
		this.userAdm = userAdm;
	}
	public String getUserActivity() {
		return userActivity;
	}
	public void setUserActivity(String userActivity) {
		this.userActivity = userActivity;
	}
	@Override
	public String toString() {
		return "User [userId=" + userId + ", userStuId=" + userStuId + ", userName=" + userName + ", userClub="
				+ userClub + ", userCredit=" + userCredit + ", userPassword=" + userPassword + ", userAdm=" + userAdm
				+ ", userActivity=" + userActivity + "]";
	}
	
}
