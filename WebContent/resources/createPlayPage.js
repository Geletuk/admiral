// Cell table creating
 function createTable() {
	var cell_id = '';
    var tbl = document.createElement("Table");
    tbl.setAttribute( "id", "tbl" );
	var elem = document.getElementById("main_tbl");	
	elem.appendChild(tbl);	
	for(j = 0; j < 14; j++){
		trow = tbl.appendChild(document.createElement('tr'));
		for (i = 0; i < 14; i++) {
			if (j>8) {
			cell_id = "cell_" + j + "_" + i + "_start";
			} else {
				cell_id = "cell_" + j + "_" + i;
			}
			
		tcell =	trow.appendChild(document.createElement('td'));		
		tcell.setAttribute( "id", cell_id );
		if(j!=9){
			tcell.style.border = "1px solid black";			
		} else {
			tcell.style.borderTop = "2px solid red";
			tcell.style.borderLeft = "1px solid black";
			tcell.style.borderRight = "1px solid black";
			}
		}
	}
}
 
//Cell table removing
 function removeTable () {
	 var element = document.getElementById("tbl");
	 element.parentNode.removeChild(element);
 }

//Chip container creating
 function createChipContainer() {
		var chip_img_id = '';
		var chip_div_id = '';
		for (i = 0; i < chip_pictures.length; i++) {
			chip_div_id = "chip_div_" + chip_names[i];
			if (chip_pictures[i] == "resources/images/Torpeda.jpg"){
				chip_img_id = "pihc_img_" + chip_names[i];
			}
			else if (chip_pictures[i] == "resources/images/Aircraft.jpg"){
				chip_img_id = "pihc_img_" + chip_names[i];
			}
			else {
			chip_img_id = "chip_img_" + chip_names[i];
			}
			var elem = document.getElementById("chip-container");
			var	div_row = elem.appendChild(document.createElement('div'));
			div_row.setAttribute( "class", "row" );		
			var div_col4 = div_row.appendChild(document.createElement('div'));
			div_col4.setAttribute("class", "col-md-4");
			div_col4.setAttribute("id", chip_div_id);  
			
			for (j = 0; j < chip_amount[i]; j++) {
				var div_elem_img = div_col4.appendChild(document.createElement('img'));		
				div_elem_img.setAttribute("id", chip_img_id + j);
				div_elem_img.setAttribute("src", chip_pictures[i]);	
				div_elem_img.setAttribute("height", "20");
				div_elem_img.setAttribute("width", "40");
				div_elem_img.style.zIndex = j;
			}		
			var div_col3 = div_row.appendChild(document.createElement('div'));
			div_col3.setAttribute("class", "col-md-3");
		
			var elem_amount = div_col3.appendChild(document.createElement('p'));
			elem_amount.innerHTML = chip_amount[i];
			elem_amount.setAttribute( "class", "p_text" );
		
			var div_col5 = div_row.appendChild(document.createElement('div'));
			div_col5.setAttribute("class", "col-md-5");
		
			var elem_name = div_col5.appendChild(document.createElement('p'));
			elem_name.innerHTML = chip_names[i];	
		}	
		$('img[id*=img_Torpeda], img[id*=img_Aircraft]').addClass('disabled').fadeTo(0, 0.5);
	}
