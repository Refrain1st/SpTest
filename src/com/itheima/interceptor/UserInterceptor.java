package com.itheima.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.itheima.po.User;

public class UserInterceptor implements HandlerInterceptor {

	@Override
	public void afterCompletion(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, Exception arg3)
			throws Exception {
		// TODO Auto-generated method stub
		System.out.println("afterCompletion");
	}

	@Override
	public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, ModelAndView arg3)
			throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public boolean preHandle(HttpServletRequest arg0, HttpServletResponse response, Object arg2) throws Exception {
		// TODO Auto-generated method stub
		String url=arg0.getRequestURI();

		if(url.indexOf("/log") >0) {
			return true;
		}
		//同一个浏览器 登陆系统 
		HttpSession session=arg0.getSession();
		User user=(User)session.getAttribute("USER_SESSION");
		if(user!=null) {
			return true;
		}
		response.setCharacterEncoding("UTF-8");
        response.setContentType("application/json;charset=UTF-8");
        response.setStatus(500);
        response.getWriter().print("请登陆");
		return false;
	}

}
