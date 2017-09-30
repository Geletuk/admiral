// Cell table creating
function createTable() 
{
	var cell_id = '';
    var tbl = document.createElement("Table");
    tbl.setAttribute( "id", "tbl" );
	var elem = document.getElementById("main_tbl");	
	elem.appendChild(tbl);	
	for(j = 0; j < 14; j++)
	{
		trow = tbl.appendChild(document.createElement('tr'));
		for (i = 0; i < 14; i++)
		{
			if (j>8) 
			{
				cell_id = "cell_" + j + "_" + i + "_start";
			} else {
				cell_id = "cell_" + j + "_" + i;
			}
			
			tcell =	trow.appendChild(document.createElement('td'));		
			tcell.setAttribute( "id", cell_id );
			if(j!=9)
			{
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
 function removeTable()
{
	 var element = document.getElementById("tbl");
	 element.parentNode.removeChild(element);
}

//Chip container creating
function createChipContainer() {
	var chip_img_id = '';
	var chip_div_id = '';
	var div_chips_container = document.getElementById("chip-container");
	for (i = 0; i < chip_amount.length; i++) 
	{
		if(chip_amount[i] != 0)
		{
			createShipRow(chip_names[i], chip_amount[i], div_chips_container);
		}
	}	
	$('img[id*=img_Torpeda], img[id*=img_Aircraft]').addClass('disabled').fadeTo(0, 0.5);
}

var shipsMap = new Map();

function createShipRow(shipName, amount, div_chips_container)
{
	chip_div_id = "chip_div_" + shipName;
	var	div_row = div_chips_container.appendChild(document.createElement('div'));
	div_row.setAttribute( "class", "row" );		
	var div_col4 = div_row.appendChild(document.createElement('div'));
	div_col4.setAttribute("class", "col-md-4");
	div_col4.setAttribute("id", chip_div_id);  
		
	for (ship_num = 0; ship_num < amount; ship_num++)
	{
		var ship = new Ship(shipName, ship_num, div_col4);
		shipsMap.set(ship.id, ship);
	}	
	var div_col3 = div_row.appendChild(document.createElement('div'));
	div_col3.setAttribute("class", "col-md-3");
	
	var elem_amount = div_col3.appendChild(document.createElement('p'));
	elem_amount.innerHTML = amount;
	elem_amount.setAttribute( "class", "p_text" );
	
	var div_col5 = div_row.appendChild(document.createElement('div'));
	div_col5.setAttribute("class", "col-md-5");
	
	var elem_name = div_col5.appendChild(document.createElement('p'));
	elem_name.innerHTML = shipName;	
}
