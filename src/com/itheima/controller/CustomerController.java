package com.itheima.controller;

import java.io.IOException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.itheima.po.Customer;
import com.itheima.service.CustomerService;

@Controller
public class CustomerController {
	
	@Autowired
	CustomerService  customerService;
	
    @RequestMapping(value="/customer",method=RequestMethod.GET)
    @ResponseBody
	public List<Customer> getCustomer() throws IOException{
    	List<Customer> customerList = this.customerService.findCustomer();
		return customerList;
	}
    
    @RequestMapping(value="/customer",method=RequestMethod.POST)
    @ResponseBody
	public void addCustomer(@RequestBody Customer customer) throws IOException{
    	this.customerService.insertCustomer(customer);
		
	}
    @RequestMapping(value="/customer/{id}",method=RequestMethod.DELETE)
    @ResponseBody
	public void deleteCustomer(@PathVariable("id") Integer  id) throws IOException{
    	this.customerService.delCustomerById(id);
		
	}
    @RequestMapping(value="/customer",method=RequestMethod.PUT)
    @ResponseBody
	public void updateCustomer(@RequestBody Customer customer) throws IOException{
    	this.customerService.updateCustomer(customer);
		
	}
    @RequestMapping(value="/customerY",method=RequestMethod.PUT)
    @ResponseBody
	public void updateY(@RequestBody Customer customer) throws IOException{
    	this.customerService.updateY(customer);
		
	}
    @RequestMapping(value="/customerN",method=RequestMethod.PUT)
    @ResponseBody
	public void updateN(@RequestBody Customer customer) throws IOException{
    	this.customerService.updateN(customer);
		
	}
}
