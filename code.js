frequencies = [589, 1293, 453, 1050, 455, 744];
kju = 2;
tip = "notch";
gaining = 2;

context = new AudioContext();
source = context.createMediaElementSource(document.getElementsByTagName('video')[0]);

lastFilter = source;
for(f of frequencies) {
	let filter = context.createBiquadFilter();
		
	filter.type = tip;
	filter.frequency.value = f;
	filter.Q.value = kju;
	
	lastFilter.connect(filter);
	
	lastFilter = filter;
}

// gainamo, da bo dovolj glasno
var gainNode = context.createGain();
gainNode.gain.value = gaining;

lastFilter.connect(gainNode);

lastFilter = gainNode;

lastFilter.connect(context.destination);
