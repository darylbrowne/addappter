function addappter(jsonMicro){

	function table(jsonMicro) {
		var tblRow = ``, arrRowObj = jsonMicro['micro']['settings']['records'];		
		var objHeader = arrRowObj[0]['columns'];
		console.log(arrRowObj);
		
		var tblHeader = objHeader.map(function (column) {return '<th>' + column + '</th>';}).join('');
		
		for (index in arrRowObj) {
			var tblCell = ``;
			var objRecord = (arrRowObj[index]);
			for (cursor in objRecord) {
				tblCell += `<td>${objRecord[cursor]['value']}</td>`;				
			}
			
			tblRow += `<tr>${tblCell}</tr>`;			
		}

		var htmlTable = `
			<table class="table table-striped table-bordered table-hover ">
				<caption></caption>
				<colgroup></colgroup>
				<thead><tr>${tblHeader}</tr></thead>
				<tbody>${tblRow}</tbody>
				<tfoot></tfoot>
			</table>`;

		var content = document.getElementsByTagName("body").item(0);
		content.insertAdjacentHTML("beforeend", htmlTable);
		
	};

	document.write('<h1>The Addappter <small>(v0.1)</small></h1>');
        console.dir(jsonMicro);
	table(jsonMicro);            
}
