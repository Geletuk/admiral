//The cells around the ship, where Torpeda and Aircraft are possible to be placed into
function cellsAroundShip (cell_id)
{
	//var cell_id = $(id_var).parent().attr('id');			
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

// Checking that all the chips are placed and it is possible to play
function checkStart() 
{
	var flag = true;
	$('.p_text').each(function(index){					 				 
		if ( $( this ).text() != '0' )
		{ 				  
			flag = false;
		}			   
	});  		
	if(flag)
	{		
		$('#play_but').removeClass('disabled'); 
	}	 
}

//chip counter
function chipCounter(chip)
{
	var a = $('#' + chip + '+ div > p').text();			
	var a1 = parseInt(a)-1;
	if (a1 >= 0)
	{
		$('#' + chip + '+ div > p').text(a1);
	}				
	checkStart();	
}
// Checking that a cell has no chips (a cell can accept only one chip)
function cellHasChip(cell, chip, img_id, chip_id)
{
	if($("#" + cell).has('.ui-draggable').length)
	{
		$("#" + cell).droppable('disable');
	} else {
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

function activatePlacesForTorpeda(cell)
{
	var f_cell_arr = cellsAroundShip(cell);
	$.each(f_cell_arr, function(index){
		$(f_cell_arr[index]).droppable({
			accept: 'img[id*=chip_img],img[id*=img_Torpeda]',
			activeClass: 'highlight',		
			drop: function(event, ui) {
				var chip = $(ui.draggable);
				var cell = $(this).attr('id');
				var parent_id = $(chip).parent().attr('id');
				var img_id = chip.attr('id');
				chip.fadeOut(200, function(){
					$("#" + img_id).appendTo('#' + cell).fadeIn();
					if(parent_id.includes("chip_div"))
					{
						var a = $('#' + parent_id + '+ div > p').text();			
						var a1 = parseInt(a)-1;
						$('#' + parent_id + '+ div > p').text(a1);
						checkStart();					
					}
				});
			    $("#" + cell).droppable('disable');
			    $("#" + parent_id).droppable('enable');
			}			
		});
	});
}

function activatePlacesForAircraft(cell)
{
	var f_cell_arr = cellsAroundShip(cell);
	$.each(f_cell_arr, function(index){
		$(f_cell_arr[index]).droppable({
			accept: 'img[id*=chip_img],img[id*=img_Aircraft]',
			activeClass: 'highlight',		
			drop: function(event, ui) {
				var chip = $(ui.draggable);
				var cell = $(this).attr('id');
				var parent_id = $(chip).parent().attr('id');
				var img_id = chip.attr('id');
				chip.fadeOut(200, function(){
					$("#" + img_id).appendTo('#' + cell).fadeIn();
					if(parent_id.includes("chip_div"))
					{
						var a = $('#' + parent_id + '+ div > p').text();			
						var a1 = parseInt(a)-1;
						$('#' + parent_id + '+ div > p').text(a1);
						checkStart();					
					}
				});
			    $("#" + cell).droppable('disable');
			    $("#" + parent_id).droppable('enable');
			}			
		});
	});
}


//permission to put Torpeda and Aircraft
function activateTorpedaAndAircraft(img_id, cell)
{
	if ( $('#' + img_id).attr('name') == 'Tk' )
	{				
		$('img[id*=img_Torpeda]').removeClass('disabled').fadeTo(0, 1);
		/*$('img[id*=img_Torpeda]').each(function(index, element){
			alert(index+" "+this+" "+$('img[id*=img_Torpeda]'));
			element.removeClass('disabled');
		});
		alert(img_id);*/
		draggableEffect('img[id*=img_Torpeda]');
		//Rules to place Torpeda
		activatePlacesForTorpeda(cell);
	}else if ( $('#' + img_id).attr('name') == 'Avia' )
	{				
		$('img[id*=img_Aircraft]').removeClass('disabled').fadeTo(0, 1);
		draggableEffect('img[id*=img_Aircraft]');
		//Rules to place Aircraft
		activatePlacesForAircraft(cell);
	};
}

function disactivateTorpedaAndAircraft(img_id)
{
	//
}

//Chips draggable effect
function draggableEffect (elem_id){
	$(elem_id).draggable({
		revert : 'invalid',
		helper: 'clone',
		cursor : 'move'
	});
}