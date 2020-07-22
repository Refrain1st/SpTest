package com.itheima.mapper.user;

import java.util.List;

import com.itheima.po.User;

/**
/**
 * 四约定：1、接口的全路径 对应  CustomerMapper.xml的namespace
 * 2、方法名 对应  mapper里的某一个id
 * 3、入参类型  对应 parameterType 
 * 4、返回参数类型  对应 resultType
 * @author HP
 *
 */
public interface UserMapper {
	//登录用户检测
	User findUserByUserName(User user);
	//用户名单查询
	List<User> findUsers();
	//权限检测
	User checkHolder(User user);
	//删除用户
	void delUserByUserName(String userName);
	//更新用户
	void updateUser(User user);
	//插入用户
	void insertUser(User user);
	void join(User user);
	
}
