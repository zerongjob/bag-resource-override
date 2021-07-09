function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let targetArray = ['Verrou 21 strap bag', `Sangle Zigzag 25 mm bag strap`]


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
            if(targetArray.indexOf(value) >=0 )
                console.error('target found',value)
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
    window.location.reload()
}

let intervalId;
if (window.location.host === "www.hermes.com") {
    console.log('script started');
    console.log('www.hermes.com found');
    setTimeout (startChecking,10000)
    intervalId = setInterval (loadNextPage,1942) 
    setTimeout (reload,13456)
}
