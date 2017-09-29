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
		var cell_arr = ["#" + cell_id_top + "_start", "#" + cell_id_bottom + "_start", "#" + cell_id_right + "_start", "#" + cell_id_left + "_start", "#" + cell_id_top_l + "_start", "#" + cell_id_bottom_l + "_start", "#" + cell_id_top_r + "_start", "#" + cell_id_bottom_r + "_start"];
		return cell_arr;					
	}
	
//Chips draggable effect
	function draggableEffect (elem_id){
		$(elem_id).draggable({
			revert : 'invalid',
			helper: 'clone',
			cursor : 'move'
		});
	}
	//permission to put Torpeda and Aircraft
	function putTorpeda (img_id) {
		if ( $('#' + img_id).attr('src') == 'resources/images/Tk.jpg' ) {				
			$('img[id*=img_Torpeda]').removeClass('disabled').fadeTo(0, 1);
			draggableEffect('img[id*=img_Torpeda]');					
		};
		if ( $('#' + img_id).attr('src') == 'resources/images/Avia.jpg' ) {				
			$('img[id*=img_Aircraft]').removeClass('disabled').fadeTo(0, 1);
			draggableEffect('img[id*=img_Aircraft]');
		};
	}
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
	
	//chip counter
	function chipCounter (chip){
		var a = $('#' + chip + '+ div > p').text();			
		var a1 = parseInt(a)-1;
		if (a1 >= 0){
			$('#' + chip + '+ div > p').text(a1);
		}				
		checkStart();	
	}
	// Checking that a cell has no chips (a cell can accept only one chip)
	function cellHasChip (cell, chip, img_id, chip_id) {
	  if ($("#" + cell).has('.ui-draggable').length) {
		  alert($("#" + cell).has('.ui-draggable').length);
	    	$("#" + cell).droppable('disable');
	    }
	    else {
			chip.fadeOut(200, function(){
				$("#" + img_id).appendTo('#' + cell).fadeIn();				
				chipCounter(chip_id);
			});
	    }
	}
	//Rules to place Torpeda and Aircraft
	function torpedaPlacement(torpeda_id, ship_id){
		$(torpeda_id).draggable({
			revert : 'invalid',
			helper: 'clone',
			cursor : 'move',
			start: function () {	
			//draggableEffect (torpeda_id);		
				var f_cell_arr = cellsAroundShip (ship_id);		
				//Ячейки
				$.each(f_cell_arr, function(index){					
				/*if ($(f_cell_arr[index]).has('.ui-draggable').length) {
			        $(f_cell_arr[index]).droppable('disable');
			    }*/
				//else {					
					$(f_cell_arr[index]).droppable({				
							accept: torpeda_id,
							activeClass: 'highlight',		
							drop: function(event, ui) {												
								var chip = $(ui.draggable);
								var cell = $(this).attr('id');
								var chip_id = $(chip).parent().attr('id');
								var img_id = chip.attr('id');
								// Checking that a cell has no chips (a cell can accept only one chip)
								cellHasChip (cell, chip, img_id, chip_id);

							}			
					});		
					

					
				});	 //each 
			},
			drop: function(){
				var f_cell_arr = cellsAroundShip (ship_id);	
				$.each(f_cell_arr, function(index){	
					console.log($(f_cell_arr[index]).attr('id'));
					$(f_cell_arr[index]).droppable('enable');					
				});
			}
		
		});	
	}
	
	draggableEffect('img[id*=chip_img]');
		
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
			putTorpeda (img_id);
			// Checking that a cell has no chips (a cell can accept only one chip)
			cellHasChip (cell, chip, img_id, chip_id);
		    $("#" + cell).droppable('enable');		    
		}
	});
// Chip container droppable
$.each(chip_names,function(index,value){
  $('#chip_div_' + value).droppable({	  
		accept: 'img[id*=img_' + value+ ']',
		activeClass: 'highlight',
		drop: function(event, ui) {			
		var chip_back = $(ui.draggable);
		var cell = $(this).attr('id');
		var chip_id = $(chip_back).parent().attr('id');
		var img_id = chip_back.attr('id');
		if(chip_back==$(this)){alert("!11!")}else{alert("!22!")};////////////////////////////////////////////////////////////	
		cellHasChip (cell, chip_back, img_id, chip_id);
		$("#" + cell).droppable('enable');	

		chip_back.fadeOut(200, function(){
			$(this).appendTo('#chip_div_' + value).fadeIn();
			var a = $('#chip_div_' + value + '+ div > p').text(); 		
			var a1 = parseInt(a)+1;
				$('#chip_div_' + value + '+ div > p').text(a1);
			});		

			var chip_back = $(ui.draggable);
			var cell = $(this).attr('id');
			var chip_id = $(chip_back).parent().attr('id');
			
			var img_id = chip_back.attr('id');
			cellHasChip (cell, chip_back, img_id, chip_id);
			$("#" + cell).droppable('enable');
			
			if(chip_id != 'chip_div_' + value){
				console.log(chip_id);
				console.log('chip_div_' + value);
				chip_back.fadeOut(200, function(){
					$(this).appendTo('#chip_div_' + value).fadeIn();
					var elem1= $(this).attr('id');
					
					var a = $('#chip_div_' + value + '+ div > p').text(); 		
					var a1 = parseInt(a)+1;
					$('#chip_div_' + value + '+ div > p').text(a1);
				});
			}

		}	
  	});
});
//Rules to place Torpeda
torpedaPlacement('img[id*=pihc_img_Torpeda]', 'img[id*=chip_img_Tk]');
//Rules to place Aircraft
torpedaPlacement('img[id*=pihc_img_Aircraft]', 'img[id*=chip_img_Avia]');

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


