
function play() {	
//Эффект перетаскивания
$('img[id*=img_play]').draggable({
		revert : 'invalid',
		helper: 'clone',
		cursor : 'move',
		start: function () {			
			var cell_id = $(this).parent().attr('id');			
			var cell_id_arr1 = cell_id.split("_");
			var cell_id_top = cell_id_arr1[0]+"_"+(parseInt(cell_id_arr1[1])+1)+"_"+cell_id_arr1[2];
			var cell_id_bottom = cell_id_arr1[0]+"_"+(parseInt(cell_id_arr1[1])-1)+"_"+cell_id_arr1[2];
			var cell_id_right = cell_id_arr1[0]+"_"+ cell_id_arr1[1] +"_"+(parseInt(cell_id_arr1[2])+1);
			var cell_id_left = cell_id_arr1[0]+"_"+ cell_id_arr1[1] +"_"+(parseInt(cell_id_arr1[2])-1);
			console.log(cell_id_bottom, cell_id_top);			
			//Ячейки
			$("#" + cell_id_top + ", #" + cell_id_bottom + ", #" + cell_id_right+ ", #" + cell_id_left).droppable({				
					accept: function(cell_id_top, cell_id_bottom, cell_id_right, cell_id_left) {
						//console.log(cell_id_top, cell_id_bottom);
					    if($(this).has('img').length) {
					        return false;
					    }
						return true;
					},
					activeClass: 'highlight',		
					drop: function(event, ui) {						
						
						var chip = $(ui.draggable);
						var cell = $(this).attr('id');
						var chip_id = $(chip).parent().attr('id');
							chip.fadeOut(200, function(){
							$(this).appendTo('#' + cell).fadeIn();	
							//$("#" + cell).attr("id", cell +"f");							
							$("#" + cell_id_top + ", #" + cell_id_bottom + ", #" + cell_id_right+ ", #" + cell_id_left).removeClass( 'ui-droppable' );
							$("#" + cell_id_top + ", #" + cell_id_bottom + ", #" + cell_id_right+ ", #" + cell_id_left).droppable('destroy');							
							}); 
							chip.draggable('destroy');
							chip.addClass('disabled').fadeTo(0, 0.5);
					}				
			});		
		}
	});	
}
