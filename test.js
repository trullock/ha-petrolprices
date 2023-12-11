let asdaFetch = fetch('https://storelocator.asda.com/fuel_prices_data.json')

let tescoFetch = fetch('https://www.tesco.com/fuel_prices/fuel_prices_data.json', {
	method: 'GET'
});

let [asdaResponse, tescoResponse] = await Promise.all([asdaFetch, tescoFetch]);

let tescoJson = await tescoResponse.json();
let asdaJson = await asdaResponse.json();

let tesco = tescoJson.stations.find(s => s.site_id == '')
let asda = asdaJson.stations.find(s => s.site_id == '')


let obj = {
	tesco: tesco.prices.B7,
	asda: (asda.prices.B7 / 100)
}

console.log(obj);