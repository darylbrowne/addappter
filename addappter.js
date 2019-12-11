function addappter(jsonMicro){

	function table(jsonMicro) {
		var jsonInspector = JSON.stringify(jsonMicro, undefined, 4)
		var tblRow = ``, arrRowObj = jsonMicro['micro']['settings']['records'];		
		var objHeader = arrRowObj[0]['columns'];
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
			<table class="p-5 table table-striped table-bordered table-hover ">
				<caption></caption>
				<colgroup></colgroup>
				<thead><tr>${tblHeader}</tr></thead>
				<tbody>${tblRow}</tbody>
				<tfoot></tfoot>
			</table>
			<textarea class="mt-20 p-5 col-12" style="font-family: "Lucida Console", Monaco, monospace;">${jsonInspector}</textarea>`;

		var content = document.getElementsByTagName("body").item(0);
		content.insertAdjacentHTML("beforeend", htmlTable);
		
	};

	document.write('<h1 class="p-5">The Addappter <small>(v0.1)</small></h1>');
	table(jsonMicro);            
}
