
var cell_id = '';
var chip_div_id = '';
var chip_img_id = '';
var col = $('.p_text');
 function createTable() {	
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
 function removeTable () {
	 var element = document.getElementById("tbl");
	 element.parentNode.removeChild(element);
 }
var chip_names = ["VMB","Sugmarine","Tr","Tk","Krpl","Str","Asmin","R","Kraser","Lincor","Avia","Br","Torpeda","Mine","Sm","Aircraft","AtomBomb",]
var chip_pictures = new Array ();
chip_pictures[0] ="resources/VMB.jpg" ;
chip_pictures[1] ="resources/Sugmarine.jpg" ;
chip_pictures[2] ="resources/Tr.jpg" ;
chip_pictures[3] ="resources/Tk.jpg" ;
chip_pictures[4] ="resources/Krpl.jpg" ;
chip_pictures[5] ="resources/Str.jpg" ;
chip_pictures[6] ="resources/Asmin.jpg" ;
chip_pictures[7] ="resources/R.jpg" ;
chip_pictures[8] ="resources/Kraser.jpg" ;
chip_pictures[9] ="resources/Lincor.jpg" ;
chip_pictures[10] ="resources/Avia.jpg" ;
chip_pictures[11] ="resources/Br.jpg" ;
chip_pictures[12] ="resources/Torpeda.jpg" ;
chip_pictures[13] ="resources/Mine.jpg" ;
chip_pictures[14] ="resources/Sm.jpg" ;
chip_pictures[15] ="resources/Aircraft.jpg" ;
chip_pictures[16] ="resources/AtomBomb.jpg" ;

var chip_amount = [1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0];//тест

//var chip_amount = [2, 6, 6, 6, 1, 6, 6, 2, 6, 2, 1, 1, 6, 6, 1, 1, 1];//полный контеннт
function createChipContainer() {		
	for (i = 0; i < chip_pictures.length; i++) {
		chip_div_id = "chip_div_" + chip_names[i];
		if (chip_pictures[i] == "resources/Torpeda.jpg"){
			chip_img_id = "pihc_img_" + chip_names[i];
		}
		else if (chip_pictures[i] == "resources/Aircraft.jpg"){
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
	$('img[id*=img_Torpeda]').addClass('disabled').fadeTo(0, 0.5);
	$('img[id*=img_Aircraft]').addClass('disabled').fadeTo(0, 0.5);
}

$(document).ready(function() {
//The cells around the ship, where Torpeda and Aircraft are possible to be placed into
	function cellsAroundShip (id_var) {
		var cell_id = $(id_var).parent().attr('id');			
		var cell_id_arr1 = cell_id.split("_");		
		var cell_id_top = cell_id_arr1[0]+"_"+(parseInt(cell_id_arr1[1])+1)+"_"+cell_id_arr1[2];
		var cell_id_bottom = cell_id_arr1[0]+"_"+(parseInt(cell_id_arr1[1])-1)+"_"+cell_id_arr1[2];
		var cell_id_right = cell_id_arr1[0]+"_"+ cell_id_arr1[1] +"_"+(parseInt(cell_id_arr1[2])+1);
		var cell_id_left = cell_id_arr1[0]+"_"+ cell_id_arr1[1] +"_"+(parseInt(cell_id_arr1[2])-1);	
		var cell_id_top_l = cell_id_arr1[0]+"_"+(parseInt(cell_id_arr1[1])+1)+"_"+(parseInt(cell_id_arr1[2])-1);
		var cell_id_bottom_l = cell_id_arr1[0]+"_"+(parseInt(cell_id_arr1[1])-1)+"_"+(parseInt(cell_id_arr1[2])-1);
		var cell_id_top_r = cell_id_arr1[0]+"_"+ (parseInt(cell_id_arr1[1])+1) +"_"+(parseInt(cell_id_arr1[2])+1);
		var cell_id_bottom_r = cell_id_arr1[0]+"_"+ (parseInt(cell_id_arr1[1])-1) +"_"+(parseInt(cell_id_arr1[2])+1);
		var cell_arr = [cell_id_top, cell_id_bottom, cell_id_right, cell_id_left, cell_id_top_l, cell_id_bottom_l, cell_id_top_r, cell_id_bottom_r];
		return cell_arr;					
	}
//Chips draggable effect
$('img[id*=chip_img]').draggable({
		revert : 'invalid',
		helper: 'clone',
		cursor : 'move'
	});
	
// Cells droppable
$('td[id*=start]').droppable({
		accept: 'img[id*=chip_img]',
		activeClass: 'highlight',		
		drop: function(event, ui) {
			var chip = $(ui.draggable);
			var cell = $(this).attr('id');
			var chip_id = $(chip).parent().attr('id');
			var img_id = chip.attr('id');
			
			//permission to put Torpeda and Aircraft
			if ( $('#' + img_id).attr('src') == 'resources/Tk.jpg' ) {				
				$('img[id*=img_Torpeda]').removeClass('disabled').fadeTo(0, 1).draggable({
					revert : 'invalid',
					helper: 'clone',
					cursor : 'move'
				});				
			};
			if ( $('#' + img_id).attr('src') == 'resources/Avia.jpg' ) {				
				$('img[id*=img_Aircraft]').removeClass('disabled').fadeTo(0, 1).draggable({
					revert : 'invalid',
					helper: 'clone',
					cursor : 'move'
				});				
			};
			// Checking that a cell has no chips (a cell can accept only one chip)
		    if($(this).has('.ui-draggable').length) {
		        $(this).droppable('disable');
		    }
		    else {
				chip.fadeOut(200, function(){
				$(this).appendTo('#' + cell).fadeIn();	
				//chip counter
				var a = $('#' + chip_id + '+ div > p').text();			
				var a1 = parseInt(a)-1;
				if (a1 >= 0){
					$('#' + chip_id + '+ div > p').text(a1);
				}				
				checkStart();			
				});
		    }
		    $(this).droppable('enable');
		}
	});

// Rules to place Torpeda
$('img[id*=pihc_img_Torpeda]').draggable({
	revert : 'invalid',
	helper: 'clone',
	cursor : 'move',
	start: function () {			
		var f_cell_arr = cellsAroundShip ('img[id*=chip_img_Tk]');		
		//Ячейки
		$("#" + f_cell_arr[0]  + "_start, #" + f_cell_arr[1] + "_start, #" + f_cell_arr[2]+ "_start, #" + f_cell_arr[3] + "_start, #" + f_cell_arr[4] + "_start, #" + f_cell_arr[5] + "_start, #" + f_cell_arr[6] + "_start, #" + f_cell_arr[7] + "_start").droppable({				
				accept: 'img[id*=pihc_img_Torpeda]',
				activeClass: 'highlight',		
				drop: function(event, ui) {												
					var chip = $(ui.draggable);
					var cell = $(this).attr('id');
					var chip_id = $(chip).parent().attr('id');
					if($(this).has('.ui-draggable').length) {
				        $(this).droppable('disable');
				    }
				    else {
					chip.fadeOut(200, function(){
						$(this).appendTo('#' + cell).fadeIn();																			
					//chip counter
						var a = $('#' + chip_id + '+ div > p').text();			
						var a1 = parseInt(a)-1;
						if (a1 >= 0){
							$('#' + chip_id + '+ div > p').text(a1);
						}				
						checkStart();			
					}); 	
				}	
				$(this).droppable('enable');
			}			
		});	
	}		
});	
//Rules to place Aircraft
$('img[id*=pihc_img_Aircraft]').draggable({
	revert : 'invalid',
	helper: 'clone',
	cursor : 'move',
	start: function () {			
		var f_cell_arr = cellsAroundShip ('img[id*=chip_img_Avia]');		
		//Ячейки
		$("#" + f_cell_arr[0]  + "_start, #" + f_cell_arr[1] + "_start, #" + f_cell_arr[2]+ "_start, #" + f_cell_arr[3] + "_start, #" + f_cell_arr[4] + "_start, #" + f_cell_arr[5] + "_start, #" + f_cell_arr[6] + "_start, #" + f_cell_arr[7] + "_start").droppable({				
				accept: 'img[id*=pihc_img_Aircraft]',
				activeClass: 'highlight',		
				drop: function(event, ui) {												
					var chip = $(ui.draggable);
					var cell = $(this).attr('id');
					var chip_id = $(chip).parent().attr('id');
					if($(this).has('.ui-draggable').length) {
				        $(this).droppable('disable');
				    }
				    else {
					chip.fadeOut(200, function(){
						$(this).appendTo('#' + cell).fadeIn();																			
					//chip counter
						var a = $('#' + chip_id + '+ div > p').text();			
						var a1 = parseInt(a)-1;
						if (a1 >= 0){
							$('#' + chip_id + '+ div > p').text(a1);
						}				
						checkStart();			
					}); 	
				}	
				$(this).droppable('enable');
			}			
		});	
	}		
});
// Chip container droppable
$.each(chip_names,function(index,value){
  $('#chip_div_' + value).droppable({	  
		accept: 'img[id*=img_' + value+ ']',
		drop: function(event, ui) {			
		var chip_back = $(ui.draggable);
		chip_back.fadeOut(200, function(){
			$(this).appendTo('#chip_div_' + value).fadeIn();
			var a = $('#chip_div_' + value + '+ div > p').text(); 		
			var a1 = parseInt(a)+1;
				$('#chip_div_' + value + '+ div > p').text(a1);
			});		
		}	
  	});
});
// Checking that all the chips are placed and it is possible to play
function checkStart() {
    var flag = true;
		$('.p_text').each(function(index){					 				 
			if ( $( this ).text() != '0' ) { 				  
				flag = false;
			}			   
	    });  		
		if(flag){		
			$('#play_but').removeClass('disabled'); 
		}	 
	}
//Creating json
	$('#play_but').click(function (){
		 var json='';
		$('td').each(function(index){			
			if ( $( this ).is(':parent') ) { 	
				var cell_id_obj = $(this).attr('id');
				var img_id_obj = $(this).children().attr('id');					
				var b = img_id_obj.length-1;				
				var a = img_id_obj.substring(9, b);	
				var img_n = chip_names.indexOf(a);
			json=json +cell_id_obj + '_' + img_n + '/';	
			console.log(cell_id_obj+'=cell_id_obj, ' + img_id_obj + '=img_id_obj, ' + a + '=a, ' + img_n + '=img_n');
			}						
	    });  
		alert(json);
		mjson (json);
	});
	
}); //Ready finish


