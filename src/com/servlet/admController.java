package com.servlet;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.admiral.User;
import com.admiral.fiska;
import com.admiral.pole;

 
 
@Controller
//@Scope("session")
//@RequestMapping({"/"})
public class admController {
	pole pole1;
	Map<String, pole> hashMap1 = new HashMap<String, pole>();	
//	fiska[][] pol=new fiska[14][14];
	User Igrok=new User();
	String test;
    /*First method on start application*/
    /*Попадаем сюда на старте приложения */
    @RequestMapping(value = "/")
    public ModelAndView login() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("userJSP", Igrok);
        modelAndView.setViewName("loginPage");
        System.out.println("Start");
   //     hashMap1.put("11",new pole(1,"test1"));
   
        return modelAndView;
    }
    /*как только на index.jsp подтвердится форма
    <spring:form method="post"  modelAttribute="userJSP" action="check-user">,
    то попадем вот сюда
     */
    @RequestMapping(value = "/check-user")
    public ModelAndView checkUser(@ModelAttribute("userJSP") User user) {
        ModelAndView modelAndView = new ModelAndView();
        Igrok=user;
        //имя представления, куда нужно будет перейти
        modelAndView.setViewName("playPage");
        //записываем в атрибут userJSP (используется на странице *.jsp объект user
        modelAndView.addObject("userJSP", user);
      //  modelAndView.addObject("poleJSP", pole1);
        modelAndView.addObject("mapJSP", hashMap1);

        return modelAndView; //после уйдем на представление, указанное чуть выше, если оно будет найдено.
    }
	@RequestMapping(value = "newJson", method = RequestMethod.GET)
	public @ResponseBody String newJson(@RequestParam(value = "json", required = false) String json){
	//	String JSON="9!1!Asmin_10!2!St";
		pole1=new pole(Igrok.getName());
		System.out.println("получил json"+json);
		parseJson(json);
		test=pole1.getPlayer1()+pole1.getDate();
		hashMap1.put(test, pole1);
		System.out.println("отдалл json   "+respons(hashMap1.get(test).getPole()));
		//printArray(pol);
	//    hashMap1.put("3",new pole(3,"test1"));
	return respons(hashMap1.get(test).getPole());
	}
	@RequestMapping(value = "newJsonTest", method = RequestMethod.GET)
	public @ResponseBody String newJsonTest(@RequestParam(value = "json", required = false) String json){
	//	String JSON="9!1!Asmin_10!2!St";
		pole1=hashMap1.get(test);
		pole1.setPlayer2(Igrok.getName());
		System.out.println("получил json"+json);
		parseJsonTest(json);
	//	test=pole1.getPlayer1()+pole1.getDate();
		hashMap1.put(test, pole1);
		System.out.println("отдалл json   "+respons(hashMap1.get(test).getPole()));
		//printArray(pol);
	    hashMap1.get(test).Print();
	return respons(hashMap1.get(test).getPole());
	}
	private String respons(fiska[][] pol2) {
		String respon = "json"; 
		for (int i=0;i<pol2.length;i++){
			for(int j=0;j<pol2[i].length;j++){
				if (pol2[i][j]!=null)respon=respon+"_"+i+"!"+j+"!"+pol2[i][j].getShip();
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
	//		pol[(Math.abs((Integer.parseInt(t[0]))-13))][Math.abs(((Integer.parseInt(t[1]))-13))]=new fiska(t[2],Igrok.getName(),Integer.parseInt(t[2]),false);
			pole1.setPole(new fiska(t[2],Igrok.getName(),Integer.parseInt(t[2]),false), (Math.abs((Integer.parseInt(t[0])))), Math.abs(((Integer.parseInt(t[1])))));
		}
		
	}
	private void parseJsonTest(String json) {
		String[]token=json.split("/");
		for (String buf:token){
			buf=buf.replaceAll("cell_","");
			buf=buf.replaceAll("_start","");
		//	buf=buf.substring(0, buf.length()-1);
			String[]t=buf.split("_");
	//		pol[(Math.abs((Integer.parseInt(t[0]))-13))][Math.abs(((Integer.parseInt(t[1]))-13))]=new fiska(t[2],Igrok.getName(),Integer.parseInt(t[2]),false);
			pole1.setPole(new fiska(t[2],Igrok.getName(),Integer.parseInt(t[2]),false), (Math.abs((Integer.parseInt(t[0]))-13)), Math.abs(((Integer.parseInt(t[1]))-13)));
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



