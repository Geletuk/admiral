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
    /*Попадаем сюда на старте приложения */
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
 
    /*как только на index.jsp подтвердится форма
    <spring:form method="post"  modelAttribute="userJSP" action="check-user">,
    то попадем вот сюда
     */
    @RequestMapping(value = "/check-user")
    public ModelAndView checkUser(@ModelAttribute("userJSP") User user) {
        ModelAndView modelAndView = new ModelAndView();
 
        //имя представления, куда нужно будет перейти
        modelAndView.setViewName("secondPage");
 
        //записываем в атрибут userJSP (используется на странице *.jsp объект user
        modelAndView.addObject("userJSP", user);
 
        return modelAndView; //после уйдем на представление, указанное чуть выше, если оно будет найдено.
    }
	@RequestMapping(value = "newJson", method = RequestMethod.GET)
	public @ResponseBody String newJson(@RequestParam(value = "json", required = false) String json){
		String JSON=null;
		System.out.println("получил json"+json);
	
		System.out.println("отдалл json"+JSON);
		System.out.println();
	return JSON;
	}
}



