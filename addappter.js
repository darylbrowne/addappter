function addappter(jsonMicro){

	function table(jsonMicro) {
		var htmlTable = `
			<table>
				<caption></caption>
				<colgroup></colgroup>
				<thead></thead>
				<tbody>${tbody}</tbody>
				<tfoot></tfoot>
			</table>`;
		var arrCell = [], arrRowObj = jsonMicro['micro']['settings']['records'];		
		var html = ''
		for (row in arrRowObj) {
			console.log(row);
		/*html += `
		<tr>
		    <td> ${row.columns.value} </td>
		    <td> ${dc[key]} </td>
		</tr>            
		`*/
		}
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
		table(jsonMicro);
	    } else {
	      console.log('Error: ' + xhr.status); // An error occurred during the request.
	    }
	  }
	};
            
	document.write('<h1>Coming soon...The Addappter</h1>');
        console.dir(jsonMicro);
}
