 function answerJson(){
	 var answer_result=[];
		var id_list="json_9!1!Asmin_10!2!St"		
		var id_list_arr1 = id_list.split("_");
		for (i = 0; i < id_list_arr1.length; i++) {
			id_list_arr2= id_list_arr1[i].split("!");
			answer_result.push(id_list_arr2);
		}
		alert(answer_result[1]);
		return answer_result;
	}
 function displayRulesBlock(){
	 document.getElementById("chip-container").style.display = "none";	
	 document.getElementById("play_but").style.display = "none";
	 
	 var elem = document.getElementById("row_container");
		var	div_col = elem.appendChild(document.createElement('div'));
		div_col.setAttribute( "id", "rules_block" );
		div_col.setAttribute( "class", "col-md-3" );
		var div_row=div_col.appendChild(document.createElement('div'));
		div_row.setAttribute( "class", "row" );
		div_row.innerHTML = "<ul id='rules_list' style='list-style-type:none'><li>2Л</li><li>3Кр</li><li>А</li><li>2Эр+С</li><li>2Кр=Р+2Эс</li><li>Л</li><li>2Р</li><li>3Эс</li><li>2эС=3Ст</li><li>Кр</li><li>2Ст+Крпл</li><li>Р</li><li>2Ст</li><li>Эс</li><li>Ст+Крпл</li><li>3Тк</li><li>Ст</li><li>Крпл</li><li>2Тк</li><li>3Тр</li><li>3Пл</li><li>Тк</li><li>2Тр</li><li>2Пл</li><li>Тр</li><li>Пл</li></ul>";
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
				displayRulesBlock();
			}
		});	
    }
 