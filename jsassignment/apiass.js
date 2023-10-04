fetch('https://fakestoreapi.com/products')
.then(response => {
    return response.json();
})
.then(data => {
    const productsDiv = document.getElementById('products');
    data.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        const productTitle = document.createElement('h3');
        productTitle.textContent = product.title;
        productDiv.appendChild(productTitle);

        const productImg = document.createElement('img');
        productImg.src = product.image;
        productDiv.appendChild(productImg);

        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: Rs.${product.price}`;
        productDiv.appendChild(productPrice);

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;
        productDiv.appendChild(productDescription);

        const productRating = document.createElement('p');
        productRating.textContent = `Rating: ${product.rating.rate} (${product.rating.count} reviews)`;
        productDiv.appendChild(productRating);

        productsDiv.appendChild(productDiv);
    });
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error.message);
});