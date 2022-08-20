let fetch=require("node-fetch")
fetch("https://jsonplaceholder.typicode.com/products")
   
    // Converting received data to JSON
    .then(response => response.json())
    .then(json => {
        let list = `<tr><th>Name</th><th>Image</th></tr>`;
        json.forEach(products => {
            li += `<tr>
                <td>${product.name} </td>
                <td>${product.image}</td>        
            </tr>`;
        });
        document.getElementById("products").innerHTML = li;
});
       
