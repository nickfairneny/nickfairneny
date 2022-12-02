layout: page
title: "fancifymytext"
permalink: /fancifymytext

<!DOCTYPE html>
<html>
	<head>
		<title>Fancify Shamcify</title>

		<script src="fancifymytext.js"></script>
		
	</head>

	<body>
		<h1>Fancify my Text</h1>
		
	<div class="container">
        <fieldset>
            <legend>Text</legend>
            <textarea name="" id="textarea" cols="30" rows="4"></textarea>
        </fieldset>
        
        <fieldset>
            <legend>fancify</legend>
            <button id = "biggerButton" onclick="makeBig()">Bigger!</button>
            <input type="radio" id="fancy" onchange="fancify()"> <label for="fancy">FancyShmancy</label>
            <input type="radio" id="boring" onchange = "boring()"><label for="boring">BoringBetty</label>
            <button id = "mooButton" onclick="makeMoo()">Moo</button>
        </fieldset>
    </div>
		
	</body>
</html>
