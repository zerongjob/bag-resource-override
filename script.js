

let targetArray = [
"Picotin lock 18 bag",
"Picotin lock 22 bag",
"Lindy 26 bag",
"Lindy 30 bag",
"Garden party 30 bag",
"Garden party 36 bag",
"Lindy mini bag"
]

const nameCheckingTime = 10000;
const loadNexgPageTime = 1924;
const refreshTime = 13456;
const doRefresh = true;
const to = ''
const apiEndpoint = ''
const body = window.location.href

let intervalId;
if (window.location.host === "www.hermes.com") {
    console.log('script started');
    console.log('www.hermes.com found');
    setTimeout (startChecking, nameCheckingTime)
    intervalId = setInterval (loadNextPage, loadNexgPageTime) 
    setTimeout (reload, refreshTime)
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function startChecking() {
    console.log('start checking')
    let elements = document.getElementsByClassName('product-item-name');
    let sourceArray = []
    for (const element in elements) {
        //console.log(elements[element].textContent);
        sourceArray.push(elements[element].textContent);
    }
    console.log(`found ${sourceArray.length} of items`)
    sourceArray.forEach(
        (value) => {
            if(targetArray.indexOf(value) >=0 ) {
                console.error('target found',value)
                let resp = axios.post(apiEndpoint, {
                to: to,
                subject: '[hermes] ' + value +' found',
                body: body
              });
            }
        }
    )
    console.log('checking end')
}

function loadNextPage() {
    let button = document.getElementsByClassName('load-more-button');
    if(button.length>=1){
        console.log('load next page')
        button[0].click()
    }else{
        console.log('no more next page')
        clearInterval(intervalId)
    }
}


function reload() {
  if(doRefresh) window.location.reload()
}