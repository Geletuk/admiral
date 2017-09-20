 function mjson(json){

		var data ="json="+json;
		$.ajax({
			url : "newJson",
			data : data,
			type : "GET",
			success : function(JSON) {
				alert("!!!"+JSON);
			}
		});	

    }