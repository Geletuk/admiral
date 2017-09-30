$(document).ready(function()
{
	draggableEffect('img[id*=chip_img]');
		
	// Cells droppable
	$('td[id*=start]').droppable({
		accept: 'img[id*=chip_img]',
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
			activateTorpedaAndAircraft(img_id);
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
				var parent_id = $(chip_back).parent().attr('id');
				var img_id = chip_back.attr('id');
				if(cell != parent_id)
				{
					chip_back.fadeOut(200, function(){
						$(this).appendTo('#chip_div_' + value).fadeIn();
						var a = $('#chip_div_' + value + '+ div > p').text(); 		
						var a1 = parseInt(a)+1;
						$('#chip_div_' + value + '+ div > p').text(a1);					
					});		
				}
			    $("#" + parent_id).droppable('enable');
				disactivateTorpedaAndAircraft(img_id);
			}	
		});
	});

}); //Ready finish

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
