package com.itheima.service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;

import com.itheima.mapper.user.UserMapper;
import com.itheima.po.User;

public class UserService {
	@Autowired
	private UserMapper userMapper;
	public User findCustomerByUserName(User user) throws IOException {
		User existUser = userMapper.findUserByUserName(user);
		System.out.println(existUser.toString());
		return existUser;
	}
	public User checkHolder(User user) throws IOException {
		User existUser = userMapper.checkHolder(user);
		System.out.println(existUser.toString());
		return existUser;
	}
	public void insertUser(User user) throws IOException {
		userMapper.insertUser(user);
		System.out.println("注册了一个客户");
	}
	public void join(User user) throws IOException {
		userMapper.join(user);
		System.out.println("加入活动");
	}
}
