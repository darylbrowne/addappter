function addappter(jsonMicro){

	function table(jsonMicro) {
		var arrCell = [], arrRowObj = jsonMicro['micro']['settings']['records'];		
		var html = ''
		var tblRow = ``;
		
		for (index in arrRowObj) {
			var tblCell = ``;
			var objRecord = (arrRowObj[index]);
			var tblHeader = arrRowObj[index]['columns'];
			
			tblHeader.map(function (column) {
				return '<th>' + column + '</th>';
			}).join('');
			
			tblRow += `<tr>${tblHeader}</tr>`;						
			for (cursor in objRecord) {
				tblCell += cursor === 'column' ? `<th>${objRecord[cursor]['value']}</th>` : `<td>${objRecord[cursor]['value']}</td>`;				
			}
			
			tblRow += `<tr>${tblCell}</tr>`;			
		}

		var htmlTable = `
			<table class="table table-striped table-bordered table-hover ">
				<caption></caption>
				<colgroup></colgroup>
				<thead></thead>
				<tbody>${tblRow}</tbody>
				<tfoot></tfoot>
			</table>`;

		var content = document.getElementsByTagName("body").item(0);
		content.insertAdjacentHTML("beforeend", htmlTable);
		
	};

	document.write('<h1>The Addappter (v0.1)</h1>');
        console.dir(jsonMicro);
	table(jsonMicro);            
}
