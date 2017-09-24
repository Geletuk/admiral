 function answerJson(id_list){
	 var answer_result=[];
		//var id_list="json_9!1!3_10!2!5_13!13!1"		
		var id_list_arr1 = id_list.split("_");
		for (i = 0; i < id_list_arr1.length; i++) {
			id_list_arr2= id_list_arr1[i].split("!");
			answer_result.push(id_list_arr2);
		}		
		return answer_result;
	}
 
 function chipArrange(answerJson){
	 for (i = 1; i < answerJson.length; i++) {
		 var trow = answerJson[i][0];
		 var ttd = answerJson[i][1];
		 var img_name = answerJson[i][2];		
		 var cell_id = document.getElementById('tbl').rows[trow].cells[ttd];	 
		 var div_elem_img = cell_id.appendChild(document.createElement('img'));
		 	if (chip_pictures[img_name]== "resources/VMB.jpg"){
			div_elem_img.setAttribute("id", "img_vmb_" + trow + "_" +ttd);
		 	}
		 	else if (chip_pictures[img_name]== "resources/Sm.jpg"){
				div_elem_img.setAttribute("id", "img_sm_" + trow + "_" +ttd);
			 	}
		 	else {
		 		div_elem_img.setAttribute("id", "img_play_" + trow + "_" +ttd);
		 	}
			div_elem_img.setAttribute("src", chip_pictures[img_name]);	
			div_elem_img.setAttribute("height", "20");
			div_elem_img.setAttribute("width", "40");
			div_elem_img.setAttribute("data-toggle", "tooltip");
			div_elem_img.setAttribute("title", chip_names[img_name]);	 
	 }
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
 function chipTooltip(){
		$('[data-toggle="tooltip"]').tooltip();   
	}
function mjson(json){
		var data ="json="+json;
		$.ajax({
			url : "newJson",
			data : data,
			type : "GET",
			success : function(JSON) {
				alert(JSON);
				removeTable ();
				createTable();	
				var aj=answerJson(JSON);
				chipArrange(aj);
				displayRulesBlock();
				chipTooltip();
				play();	
			}
		});	
    }
 