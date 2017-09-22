<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Second Page</title>
     <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> 
  <link rel="stylesheet" href="resources/style.css"> 
	<script type="text/javascript" src="resources/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="resources/jquery-ui.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="resources/main.js"></script>
  <script type="text/javascript" src="resources/ajaxJson.js"></script>
</head>
<body>
Введенное имя: ${userJSP.name};
<br/>
Введенный пароль: ${userJSP.password};
<br/>
Массив: ${userJSP.chip_amount};
<br/>
test regina
<div class="container">
  <div class="row">
    <div class="col-md-1"></div>
          
    <div class="col-md-8">
		<div id="main_tbl"></div>
    </div>
	
    <div id="chip-container" class="col-md-3" >			
	</div> <!-- col-md-3 -->
	<div align="center">
		<button type="button" id="play_but" class="btn btn-success disabled mt-50">P l a y</button>
	</div>
	</div><!-- row -->
</div> <!--container -->

</body>
<script>
createTable();
createChipContainer();
</script>
</html>