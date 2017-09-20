package com.servlet;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.admiral.User;

 
 
@Controller
//@Scope("session")
//@RequestMapping({"/"})
public class admController {
 
    /*First method on start application*/
    /*�������� ���� �� ������ ���������� */
    @RequestMapping(value = "/")
    public ModelAndView login() {
    	System.out.println("test");
    	System.out.println(1);
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("userJSP", new User());
        modelAndView.setViewName("NewJsp");
    	//model.addAttribute("userJSP", new User());
        return modelAndView;
    }
 
    /*��� ������ �� index.jsp ������������ �����
    <spring:form method="post"  modelAttribute="userJSP" action="check-user">,
    �� ������� ��� ����
     */
    @RequestMapping(value = "/check-user")
    public ModelAndView checkUser(@ModelAttribute("userJSP") User user) {
        ModelAndView modelAndView = new ModelAndView();
 
        //��� �������������, ���� ����� ����� �������
        modelAndView.setViewName("secondPage");
 
        //���������� � ������� userJSP (������������ �� �������� *.jsp ������ user
        modelAndView.addObject("userJSP", user);
 
        return modelAndView; //����� ����� �� �������������, ��������� ���� ����, ���� ��� ����� �������.
    }
	@RequestMapping(value = "newJson", method = RequestMethod.GET)
	public @ResponseBody String newJson(@RequestParam(value = "json", required = false) String json){
		String JSON=null;
		System.out.println("������� json"+json);
	
		System.out.println("������ json"+JSON);
		System.out.println();
	return JSON;
	}
}



