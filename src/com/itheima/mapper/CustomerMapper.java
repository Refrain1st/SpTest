package com.itheima.mapper;

import java.util.List;

import com.itheima.po.Customer;

/**
/**
 * 四约定：1、接口的全路径 对应  CustomerMapper.xml的namespace
 * 2、方法名 对应  mapper里的某一个id
 * 3、入参类型  对应 parameterType 
 * 4、返回参数类型  对应 resultType
 * @author HP
 *
 */
public interface CustomerMapper {
	Customer findCustomerById(Integer id);
	List<Customer> findCustomer();
	void delCustomerById(Integer id);
	void updateCustomerById(Customer customer);
	Integer insertCustomer(Customer customer);
	void updateY(Customer customer);
	void updateN(Customer customer);
	
	
}
