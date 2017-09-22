 function answerJson(){
	 var answer_result=[];
		var id_list="json_9!1!Asmin_10!2!St"		
		var id_list_arr1 = id_list.split("_");
		alert(id_list_arr1);
		for (i = 0; i < id_list_arr1.length; i++) {
			id_list_arr2= id_list_arr1[i].split("!");
			answer_result.push(id_list_arr2);
		}
		alert(answer_result[1]);
	}
function mjson(json){

		var data ="json="+json;
		$.ajax({
			url : "newJson",
			data : data,
			type : "GET",
			success : function(JSON) {
				alert("!!!!");
				answerJson();
			}
		});	

    }
 