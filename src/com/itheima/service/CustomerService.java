package com.itheima.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itheima.mapper.CustomerMapper;
import com.itheima.po.Customer;
@Service
public class CustomerService {
	@Autowired
	private CustomerMapper customerMapper;
	
	public  void findCustomerById() throws IOException {
		Customer customer = customerMapper.findCustomerById(1);
		System.out.println(customer.toString());
	}

	public  List<Customer> findCustomer() throws IOException {
		List<Customer> customers = customerMapper.findCustomer();
		System.out.println(customers.toString());
		return customers;
	}

	// 插入客户
	public  void insertCustomer(Customer customer) throws IOException {
		int count= customerMapper.insertCustomer(customer);
		System.out.println("成功插入了" + count + "个客户");

	}
	

	// 删除客户
	public  void delCustomerById(Integer id) throws IOException {
		customerMapper.delCustomerById(id);
		System.out.println("删除了一个客户");

	}

	public  void updateCustomer(Customer customer) {
		customerMapper.updateCustomerById(customer);
		System.out.println("修改了一个客户");
	}
	
	public  void updateY(Customer customer) {
		customerMapper.updateY(customer);
		System.out.println("给与了一位用户权限");
	}
	
	public  void updateN(Customer customer) {
		customerMapper.updateN(customer);
		System.out.println("收回了一位用户权限");
	}

}
