let goBackButton = document.getElementById('jsGoBack');
if (goBackButton) 
{
    goBackButton.addEventListener('click', goBack);
}

function goBack(event)
{
    window.history.back();
}

//---------- got to product ----------------
let productsImg = document.getElementsByClassName('jsProductImg');
for (let i = 0; i < productsImg.length; i++)
{
    productsImg[i].addEventListener('click', productDetails);
}

function productDetails(event)
{
    let product = event.target;
    window.location = 'product.html?productName=' + product.alt;
}