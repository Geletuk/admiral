function Ship(shipName, ship_num, div_container)
{
	this.shipName = shipName;
	this.num = ship_num;
	this.original_parent_div = div_container;
	this.src = "resources/images/" + shipName + ".jpg";
	this.id = createShipId(this.shipName, this.num);
	this.div = createShipDiv(this.original_parent_div, this.id, this.src, this.num);
	this.toString = function()
	{
		return this.shipName+this.num+this.original_parent_div+this.src+this.id+this.div;
	}
}

function createShipId(shipName, num)
{
	if (shipName == "Torpeda" || shipName == "Aircraft")
	{
		chip_img_id = "pihc_img_" + shipName;
	} else {
		chip_img_id = "chip_img_" + shipName;
	}
	return chip_img_id + num;
}

function createShipDiv(div_container, id, src, num)
{
	var div_elem_img = div_container.appendChild(document.createElement('img'));		
	div_elem_img.setAttribute("id", id);
	div_elem_img.setAttribute("src", src);	
	div_elem_img.style.zIndex = num;
	return div_elem_img;
}