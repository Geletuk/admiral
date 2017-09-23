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
import com.admiral.fiska;


 
 
@Controller
//@Scope("session")
//@RequestMapping({"/"})
public class admController {
	fiska[][] pol=new fiska[14][14];
	User Igrok=new User();
    /*First method on start application*/
    /*�������� ���� �� ������ ���������� */
    @RequestMapping(value = "/")
    public ModelAndView login() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("userJSP", Igrok);
        modelAndView.setViewName("NewJsp");
    
        return modelAndView;
    }
 
    /*��� ������ �� index.jsp ������������ �����
    <spring:form method="post"  modelAttribute="userJSP" action="check-user">,
    �� ������� ��� ����
     */
    @RequestMapping(value = "/check-user")
    public ModelAndView checkUser(@ModelAttribute("userJSP") User user) {
        ModelAndView modelAndView = new ModelAndView();
        Igrok=user;
        //��� �������������, ���� ����� ����� �������
        modelAndView.setViewName("secondPage");
 
        //���������� � ������� userJSP (������������ �� �������� *.jsp ������ user
        modelAndView.addObject("userJSP", user);
 
        return modelAndView; //����� ����� �� �������������, ��������� ���� ����, ���� ��� ����� �������.
    }
	@RequestMapping(value = "newJson", method = RequestMethod.GET)
	public @ResponseBody String newJson(@RequestParam(value = "json", required = false) String json){
		String JSON="9!1!Asmin_10!2!St";
		System.out.println("������� json"+json);
		parseJson(json);
		System.out.println("������ json   "+respons(pol));
	//	System.out.println("������ json"+JSON);
		printArray(pol);
	return respons(pol);
	}
	
	private String respons(fiska[][] pol2) {
		String respon = "json"; 
		for (int i=0;i<pol2.length;i++){
			for(int j=0;j<pol2[i].length;j++){
				if (pol[i][j]!=null)respon=respon+"_"+i+"!"+j+"!"+pol[i][j].getShip();
			}
		}

		return respon;
	}

	private void parseJson(String json) {
		String[]token=json.split("/");
		for (String buf:token){
			buf=buf.replaceAll("cell_","");
			buf=buf.replaceAll("_start","");
		//	buf=buf.substring(0, buf.length()-1);
			String[]t=buf.split("_");
			pol[(Math.abs((Integer.parseInt(t[0]))-13))][Math.abs(((Integer.parseInt(t[1]))-13))]=new fiska(t[2],Igrok.getName(),Integer.parseInt(t[2]),false);
			
		}
		
	}

	private static void printArray(fiska[][] mport) {
		for (int i = 0; i < mport.length; i++) {
			for (int j = 0; j < mport[i].length; j++) {
				System.out.print(mport[i][j] + "\t");
			}
			System.out.println();
		}
	}
}



