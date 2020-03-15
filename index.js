const  OpenALPR  =  require('@alicilin/openalpr');
const  path  =  require('path');
const  alpr  =  new  OpenALPR(4);
async function  main(){
	let promises = [];
	for(let i = 0; i < 1; i++){
		promises.push(alpr.recognize(path.join(__dirname, 'images/nsw3.jpg'), { c:  'au' }));
	}
	
	setInterval(() => console.log(alpr.getQueueLength(), alpr.getProcessingLength()), 200);
	let res = await Promise.all(promises);
	console.log(res);
}

main().catch(x  =>  console.log(x.message));