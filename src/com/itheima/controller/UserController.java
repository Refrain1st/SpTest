package com.itheima.controller;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.Date;

import javax.annotation.Resource;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.itheima.mapper.user.UserMapper;
import com.itheima.po.User;

@Controller
public class UserController {

	@Resource
	UserMapper userMapper;
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<String> login(@RequestBody User loginUser, HttpServletRequest request,HttpServletResponse response)
			throws UnsupportedEncodingException {
		HttpSession session=request.getSession();
		
		//查找用户
		User existUser = userMapper.findUserByUserName(loginUser);
		String testUser = (String)session.getAttribute("existUser");
		
		//说明有这个用户
		if (existUser != null) {
			session.setAttribute("USER_SESSION", loginUser);
			//设置会话 有效期   30秒之内未收到任何请求那就过期
			session.setMaxInactiveInterval(300);
			Cookie[] cookies=request.getCookies();
			String lastLoginTime = "";
			if(cookies!= null){
		           for (Cookie c :cookies) {
		               System.out.println(c.getName()+c.getValue());
//		            获取上次登录时间
		               if("lastLoginTime".equals(c.getName())){
		                   lastLoginTime = new Date(Long.parseLong(c.getValue())).toString();
//		                   更新Cookie
		                   c.setValue(System.currentTimeMillis()+"");
//		                   设置存储时长
		                   c.setMaxAge(3600*24);
		                   response.addCookie(c);
		                   break;
		               }
		           }
		           //如果是第一次访问
		           Cookie cookie = new Cookie("lastLoginTime",System.currentTimeMillis()+"");
		           cookie.setMaxAge(3600*24);
		           response.addCookie(cookie);
		       }

		} else {
			//告诉前端两个信息：一个就是字符串   状态码 500
			return new ResponseEntity<String>("用户不存在请注册", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<String>(testUser,HttpStatus.OK);
	}

	@RequestMapping(value = "/logout", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<String> logout(HttpSession session) throws UnsupportedEncodingException {
		session.removeAttribute("USER_SESSION");
		session.invalidate();
		return new ResponseEntity<String>(HttpStatus.OK);
	}
	
	@RequestMapping(value = "/session", method = RequestMethod.GET)
	@ResponseBody
	public void seession() throws UnsupportedEncodingException {
		
	}
	
	@RequestMapping(value = "/logsign", method = RequestMethod.POST)
	@ResponseBody
	public void insertUser(@RequestBody User signUser) throws IOException {
		this.userMapper.insertUser(signUser);
		
	}
	
	@RequestMapping(value = "/logholder", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<String> holder(@RequestBody User holder, HttpServletRequest request,HttpServletResponse response)
			throws UnsupportedEncodingException {
		HttpSession session=request.getSession();
		
		//查找用户
		User existUser = userMapper.checkHolder(holder);
		
		
		//说明有这个用户
		if (existUser != null) {
			session.setAttribute("USER_SESSION", holder);
			//设置会话 有效期   10秒之内未收到任何请求那就过期
			session.setMaxInactiveInterval(100);
			Cookie[] cookies=request.getCookies();
			String lastLoginTime = "";
			if(cookies!= null){
		           for (Cookie c :cookies) {
		               System.out.println(c.getName()+c.getValue());
//		            获取上次登录时间
		               if("lastLoginTime".equals(c.getName())){
		                   lastLoginTime = new Date(Long.parseLong(c.getValue())).toString();
//		                   更新Cookie
		                   c.setValue(System.currentTimeMillis()+"");
//		                   设置存储时长
		                   c.setMaxAge(3600*24);
		                   response.addCookie(c);
		                   break;
		               }
		           }
		           //如果是第一次访问
		           Cookie cookie = new Cookie("lastLoginTime",System.currentTimeMillis()+"");
		           cookie.setMaxAge(3600*24);
		           response.addCookie(cookie);
		       }


		} else {
			
			//告诉前端两个信息：一个就是字符串   状态码 500
			return new ResponseEntity<String>("用户不存在请注册", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<String>(HttpStatus.OK);
	}

	@RequestMapping(value="/join",method=RequestMethod.PUT)
    @ResponseBody
	public void join(@RequestBody User user) throws IOException{
    	this.userMapper.join(user);
	}
	
}
