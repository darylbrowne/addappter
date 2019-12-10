	var salesforce = {
		'image': 'https://loremflickr.com/400/400/dog',
		'form': {'field': 'SSN', 'value': '001-23-4567'},
		'table': {'rows': 
			[
				['one','two','three','four'],
				['four','one','two','three'],
				['six','two','nine','one'],
				['192','122','222','333']
			]
		}
	};  

function addappter(jsonMicro){
	function table() {
		var temp = document.getElementById("a__table");
		var arrCell = [], arrRow = salesforce['table']['rows'];		
		arrRow.forEach(function(row, rowIndex){
			arrCell = row;
			thisRow = temp.insertRow(rowIndex);
			arrCell.forEach(function(cell, cellIndex){ 
				thisCell = thisRow.insertCell(cellIndex);
				thisCell.innerHTML = cell;
			});
		});
		var range = document.createRange();
		range.selectNode(document.getElementsByTagName("body").item(0));
		var documentFragment = range.createContextualFragment(temp);
		document.body.appendChild(documentFragment);
	};
	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://darylbrowne.github.io/addappter/addappter.html');
	xhr.send(null);	
	xhr.onreadystatechange = function () {
	  var DONE = 4; // readyState 4 means the request is done.
	  var OK = 200; // status 200 is a successful return.
	  if (xhr.readyState === DONE) {
	    if (xhr.status === OK) {
	      console.log(xhr.responseText); // 'This is the returned text.'
		var tagString = xhr.responseText;
		var range = document.createRange();
		range.selectNode(document.getElementsByTagName("body").item(0));
		var documentFragment = range.createContextualFragment(tagString);
		document.body.appendChild(documentFragment);
		table();
	    } else {
	      console.log('Error: ' + xhr.status); // An error occurred during the request.
	    }
	  }
	};
            
	document.write('<h1>Coming soon...The Addappter</h1>');
        console.dir(jsonMicro);
}
