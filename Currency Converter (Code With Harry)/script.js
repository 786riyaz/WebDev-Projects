// import currencyapi from '@everapi/currencyapi-js'
// const client = new currencyapi('YOUR-API-KEY')
// await client.latest()

console.clear();
console.log("Application Started");
let safeMode, liveMode;

//For Safe Mode Uncomment these block
liveMode = false, safeMode = true;

// For Live Mode Uncomment these block
// safeMode = false, liveMode = true;

let tableHTMLstring = ``;
let CurrencyData = "";
let outputDiv = document.getElementsByClassName("output");

// Setting testing data in table
const tableBody = document.getElementsByTagName("tbody");
tableBody[0].innerHTML = `<tr><td>Data</td><td>Data</td><td>Data</td></tr>`;

// setting all options in DropDown
let selectComponent = document.getElementsByTagName("select")[0];
let totalCurrencies = ["INR","USD","ADA", "AED", "AFN", "ALL", "CAD","CLP", "EUR", "IQD"];

for (let k = 0; k < totalCurrencies.length; k++) {
    let option = document.createElement("option");
    option.text = totalCurrencies[k];
    option.value = totalCurrencies[k];
    selectComponent.add(option);
}

// Call a function to populate data in table When user click on sumit button 
const btn = document.getElementById("submit");
btn.addEventListener("click", (e) => {
    e.preventDefault(addEventListener);
    var baseCurrency = document.getElementById("baseCurrency").value;
    var amount = document.getElementById("amount").value;

    if (baseCurrency == "" || amount == "") {
        alert("Please Enter Value in fields")
        return;
    }
    populateData(baseCurrency, amount);
})

// Call a function to populate data in table When user click on sumit button 
const mode = document.getElementById("Mode");
mode.addEventListener("click",()=>{
    if(mode.checked){   liveMode = false, safeMode = true;  }
    else {  liveMode = true, safeMode = false;  }
})

// Function to populate data in the table
const populateData = async (baseCurrency, amount) => {
    debugger;
    tableBody[0].innerHTML = "";
    tableHTMLstring = ``;
    outputDiv[0].style.display = "block";

    console.log("Entered amount ::: " + amount);
    console.log("Selected Currency ::: " + baseCurrency)

    if (safeMode && !liveMode) { // Safe Mode
        console.log("~~~~~~~~~~> Inside Safe Mode <~~~~~~~~~~");
        let data;

        // Static Data
        data = `{"ADA":{"code":"ADA","value":0.0472801597},"AED":{"code":"AED","value":0.0441902686},"AFN":{"code":"AFN","value":0.9390659222},"ALL":{"code":"ALL","value":1.2018265149},"AMD":{"code":"AMD","value":4.6438543985},"ANG":{"code":"ANG","value":0.0214787621},"AOA":{"code":"AOA","value":9.9486407568},"ARB":{"code":"ARB","value":0.0133367439},"ARS":{"code":"ARS","value":4.213092895},"AUD":{"code":"AUD","value":0.0188738131},"AVAX":{"code":"AVAX","value":0.0012119364},"AWG":{"code":"AWG","value":0.0215384408},"AZN":{"code":"AZN","value":0.0204555024},"BAM":{"code":"BAM","value":0.0220329862},"BBD":{"code":"BBD","value":0.024065297},"BDT":{"code":"BDT","value":1.3174911649},"BGN":{"code":"BGN","value":0.0219865405},"BHD":{"code":"BHD","value":0.0045242758},"BIF":{"code":"BIF","value":34.0480209105},"BMD":{"code":"BMD","value":0.0120326485},"BNB":{"code":"BNB","value":0.0000559731},"BND":{"code":"BND","value":0.0164175894},"BOB":{"code":"BOB","value":0.0831676298},"BRL":{"code":"BRL","value":0.059987093},"BSD":{"code":"BSD","value":0.0120326485},"BTC":{"code":"BTC","value":4.635e-7},"BTN":{"code":"BTN","value":1.0025775996},"BUSD":{"code":"BUSD","value":0.01202457},"BWP":{"code":"BWP","value":0.1647831714},"BYN":{"code":"BYN","value":0.0303189177},"BYR":{"code":"BYR","value":303.1893501759},"BZD":{"code":"BZD","value":0.024065297},"CAD":{"code":"CAD","value":0.016418913},"CDF":{"code":"CDF","value":29.8386840257},"CHF":{"code":"CHF","value":0.0107426294},"CLF":{"code":"CLF","value":0.000293356},"CLP":{"code":"CLP","value":10.7863186784},"CNY":{"code":"CNY","value":0.0882699624},"COP":{"code":"COP","value":48.2695218022},"CRC":{"code":"CRC","value":6.4474304069},"CUC":{"code":"CUC","value":0.0120326485},"CUP":{"code":"CUP","value":0.2887835639},"CVE":{"code":"CVE","value":1.2400950022},"CZK":{"code":"CZK","value":0.2742479235},"DAI":{"code":"DAI","value":0.0120248659},"DJF":{"code":"DJF","value":2.138454323},"DKK":{"code":"DKK","value":0.083894289},"DOP":{"code":"DOP","value":0.6829954585},"DOT":{"code":"DOT","value":0.0028299561},"DZD":{"code":"DZD","value":1.6559894045},"EGP":{"code":"EGP","value":0.3715207148},"ERN":{"code":"ERN","value":0.1804897274},"ETB":{"code":"ETB","value":0.6657292306},"ETH":{"code":"ETH","value":0.0000073399},"EUR":{"code":"EUR","value":0.0112428273},"FJD":{"code":"FJD","value":0.0273583954},"FKP":{"code":"FKP","value":0.0096524461},"GBP":{"code":"GBP","value":0.0096540357},"GEL":{"code":"GEL","value":0.03165706},"GGP":{"code":"GGP","value":0.0096524419},"GHS":{"code":"GHS","value":0.1380696139},"GIP":{"code":"GIP","value":0.0096524409},"GMD":{"code":"GMD","value":0.7151114456},"GNF":{"code":"GNF","value":102.5689295672},"GTQ":{"code":"GTQ","value":0.0945678493},"GYD":{"code":"GYD","value":2.5154369344},"HKD":{"code":"HKD","value":0.0943246648},"HNL":{"code":"HNL","value":0.2960602389},"HRK":{"code":"HRK","value":0.0847593147},"HTG":{"code":"HTG","value":1.6410547451},"HUF":{"code":"HUF","value":4.3313447149},"IDR":{"code":"IDR","value":183.998495546},"ILS":{"code":"ILS","value":0.0462975469},"IMP":{"code":"IMP","value":0.0096524398},"INR":{"code":"INR","value":1},"IQD":{"code":"IQD","value":15.7225058295},"IRR":{"code":"IRR","value":504.947697332},"ISK":{"code":"ISK","value":1.6097563605},"JEP":{"code":"JEP","value":0.009652438},"JMD":{"code":"JMD","value":1.8744883727},"JOD":{"code":"JOD","value":0.0085431804},"JPY":{"code":"JPY","value":1.7794641734},"KES":{"code":"KES","value":1.753977544},"KGS":{"code":"KGS","value":1.0642957162},"KHR":{"code":"KHR","value":49.6331508173},"KMF":{"code":"KMF","value":5.5270893052},"KPW":{"code":"KPW","value":10.8294892874},"KRW":{"code":"KRW","value":16.0508382616},"KWD":{"code":"KWD","value":0.0037079814},"KYD":{"code":"KYD","value":0.010027167},"KZT":{"code":"KZT","value":5.5725308108},"LAK":{"code":"LAK","value":237.124475481},"LBP":{"code":"LBP","value":180.4873427684},"LKR":{"code":"LKR","value":3.8665240862},"LRD":{"code":"LRD","value":2.2388980902},"LSL":{"code":"LSL","value":0.2309922253},"LTC":{"code":"LTC","value":0.0001919328},"LTL":{"code":"LTL","value":0.0388050109},"LVL":{"code":"LVL","value":0.0078985583},"LYD":{"code":"LYD","value":0.0583443935},"MAD":{"code":"MAD","value":0.1221569136},"MATIC":{"code":"MATIC","value":0.0221228487},"MDL":{"code":"MDL","value":0.2148371971},"MGA":{"code":"MGA","value":53.8643061975},"MKD":{"code":"MKD","value":0.6890244697},"MMK":{"code":"MMK","value":25.1835244052},"MNT":{"code":"MNT","value":41.785132687},"MOP":{"code":"MOP","value":0.0973075625},"MRO":{"code":"MRO","value":4.2956534428},"MUR":{"code":"MUR","value":0.5427441314},"MVR":{"code":"MVR","value":0.1857400809},"MWK":{"code":"MWK","value":13.1330137142},"MXN":{"code":"MXN","value":0.2108761681},"MYR":{"code":"MYR","value":0.0561990956},"MZN":{"code":"MZN","value":0.7655419726},"NAD":{"code":"NAD","value":0.2296300217},"NGN":{"code":"NGN","value":8.9978285345},"NIO":{"code":"NIO","value":0.4400871024},"NOK":{"code":"NOK","value":0.1286067669},"NPR":{"code":"NPR","value":1.598702583},"NZD":{"code":"NZD","value":0.0204544232},"OMR":{"code":"OMR","value":0.0046168075},"OP":{"code":"OP","value":0.0092685566},"PAB":{"code":"PAB","value":0.0120226634},"PEN":{"code":"PEN","value":0.0445492012},"PGK":{"code":"PGK","value":0.043477335},"PHP":{"code":"PHP","value":0.6812673374},"PKR":{"code":"PKR","value":3.6647939554},"PLN":{"code":"PLN","value":0.0519016342},"PYG":{"code":"PYG","value":87.6783094637},"QAR":{"code":"QAR","value":0.04376359},"RON":{"code":"RON","value":0.0558301745},"RSD":{"code":"RSD","value":1.3123455785},"RUB":{"code":"RUB","value":1.1786087149},"RWF":{"code":"RWF","value":14.3546310898},"SAR":{"code":"SAR","value":0.045078638},"SBD":{"code":"SBD","value":0.1017125549},"SCR":{"code":"SCR","value":0.170919233},"SDG":{"code":"SDG","value":7.2376380693},"SEK":{"code":"SEK","value":0.1338739489},"SGD":{"code":"SGD","value":0.0164286581},"SHP":{"code":"SHP","value":0.0096540357},"SLL":{"code":"SLL","value":265.0119891216},"SOL":{"code":"SOL","value":0.0006136045},"SOS":{"code":"SOS","value":6.8549872774},"SRD":{"code":"SRD","value":0.4613608325},"STD":{"code":"STD","value":276.6597302503},"SVC":{"code":"SVC","value":0.1052856743},"SYP":{"code":"SYP","value":156.4427424986},"SZL":{"code":"SZL","value":0.2297950981},"THB":{"code":"THB","value":0.4291492943},"TJS":{"code":"TJS","value":0.1321951482},"TMT":{"code":"TMT","value":0.0421142697},"TND":{"code":"TND","value":0.0375563079},"TOP":{"code":"TOP","value":0.0285495094},"TRY":{"code":"TRY","value":0.3231068529},"TTD":{"code":"TTD","value":0.0809236623},"TWD":{"code":"TWD","value":0.3868030165},"TZS":{"code":"TZS","value":30.0915207057},"UAH":{"code":"UAH","value":0.441172443},"UGX":{"code":"UGX","value":44.9417873265},"USD":{"code":"USD","value":0.0120326485},"USDC":{"code":"USDC","value":0.0120332575},"USDT":{"code":"USDT","value":0.0120318384},"UYU":{"code":"UYU","value":0.4576324792},"UZS":{"code":"UZS","value":146.4260895845},"VEF":{"code":"VEF","value":40217.7417069572},"VND":{"code":"VND","value":289.1315516806},"VUV":{"code":"VUV","value":1.4627616541},"WST":{"code":"WST","value":0.0330771458},"XAF":{"code":"XAF","value":7.3772690385},"XAG":{"code":"XAG","value":0.0005246614},"XAU":{"code":"XAU","value":0.0000062698},"XCD":{"code":"XCD","value":0.0324881509},"XDR":{"code":"XDR","value":0.0091136492},"XOF":{"code":"XOF","value":7.3772691714},"XPD":{"code":"XPD","value":0.0000098011},"XPF":{"code":"XPF","value":1.3409986355},"XPT":{"code":"XPT","value":0.0000132009},"XRP":{"code":"XRP","value":0.0237737757},"YER":{"code":"YER","value":3.0035721234},"ZAR":{"code":"ZAR","value":0.229272893},"ZMK":{"code":"ZMK","value":108.3082756263},"ZMW":{"code":"ZMW","value":0.249857149},"ZWL":{"code":"ZWL","value":55.9429132762}}`;

        data = JSON.parse(data);
        CurrencyData = data;
    }
    if (liveMode && !safeMode) { // Live Mode
        console.log("~~~~~~~~~~> Inside Live Mode <~~~~~~~~~~");
        url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_aXn4PmHLh2XrEMl0jCx4b8EkzkCtohocyZthujuQ&base_currency=" + baseCurrency
        console.log("URL to fetch ::: " + url);
        let response = await fetch(url);
        // console.log("Response of the service ")
        // console.log(response);
        let responseJSON = await response.json();
        CurrencyData = responseJSON.data;
    }

    console.log("Currenty Data (Global) ::: ")
    console.log(CurrencyData);

    let keys = Object.keys(CurrencyData);

    // for (let i = 0; i < keys.length; i++) {
    for (let i = 0; i < 10; i++) {      // To show only 10 records
        // Extracting values from json to populate in table
        let key = keys[i];
        let code = CurrencyData[keys[i]].code;
        let value = CurrencyData[keys[i]].value;
        // console.log("Key=" + key + ", Code=" + code + ", Value=" + value)
        tableHTMLstring += `<tr><td>${key}</td><td>${code}</td><td>${(value * amount).toFixed(2)}</td></tr>`;
    }

    // Setting Values in table
    tableBody[0].innerHTML = tableHTMLstring;
}