window.addEventListener("load", function(){
	var canvas = document.createElement('canvas');
	if(canvas.getContext){
		var ctx = canvas.getContext('2d');
		var images = document.images;
		for(var i=0; i<images.length; i++){
			if(images[i].getAttribute('mask')){
				var mask = new Image();
				mask.onload = function(img){
					return function(){
						canvas.width = img.width;
						canvas.height = img.height;
						var layers = [img, this];
						for(var l=0; l<2; l++){
							ctx.drawImage(layers[l], 0, 0, img.width , img.height);
							layers[l] = ctx.getImageData(0, 0, canvas.width, canvas.height);
						}
						for(var p=0; p<layers[0].data.length; p+=4)layers[0].data[p+3] = layers[1].data[p];
						ctx.putImageData(layers[0], 0, 0);
						img.src = canvas.toDataURL();
					}
				}(images[i])
				mask.src = images[i].getAttribute('mask');
			}
		}
	}
}, false);
