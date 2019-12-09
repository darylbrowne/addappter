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
            document.write('<h1>Coming soon...The Addappter');
            console.dir(jsonMicro);
                
		let a_table = document.getElementById("a__table");
		let arrCell = [], arrRow = salesforce['table']['rows'];		
		arrRow.forEach(function(row, rowIndex){
			arrCell = row;
			thisRow = a_table.insertRow(rowIndex);
			arrCell.forEach(function(cell, cellIndex){ 
				thisCell = thisRow.insertCell(cellIndex);
				thisCell.innerHTML = cell;
			});
		});
			var temp = document.getElementById(template);
			var clone = temp.content.cloneNode(true);
			$('body').append(clone);
        
        }
