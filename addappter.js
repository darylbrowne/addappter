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
	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://darylbrowne.github.io/addappter/addappter.html');
	xhr.send(null);	
	xhr.onreadystatechange = function () {
	  var DONE = 4; // readyState 4 means the request is done.
	  var OK = 200; // status 200 is a successful return.
	  if (xhr.readyState === DONE) {
	    if (xhr.status === OK) {
		var target = document.body.innerHTML += xhr.responseText;
	      console.log(xhr.responseText); // 'This is the returned text.'
	    } else {
	      console.log('Error: ' + xhr.status); // An error occurred during the request.
	    }
	  }
	};
            
	document.write('<h1>Coming soon...The Addappter');
        console.dir(jsonMicro);
}
