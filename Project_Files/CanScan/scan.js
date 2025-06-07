document.getElementById("checkButton").addEventListener("click", () => {
    const barcode = document.getElementById("barcodeInput").value.trim();
    if (!barcode || !/^\d+$/.test(barcode)) {
        alert("Please enter a valid numeric barcode.");
        return;
    }

    fetchProductData(barcode);
});

function fetchProductData(barcode) {
    const url = `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.status === 1) {
                displayProductInfo(data.product);
            } else {
                alert("❌ Product not found in OpenFoodFacts.");
            }
        })
        .catch(err => {
            console.error("Fetch error:", err);
            alert("❌ Could not retrieve product information.");
        });
}

function displayProductInfo(product) {
    document.getElementById("productName").textContent = product.product_name || "-";
    document.getElementById("productBrand").textContent = product.brands || "-";
    document.getElementById("productCategory").textContent = product.categories || "-";
    document.getElementById("productDescription").textContent = product.generic_name || "-";
    document.getElementById("productCountry").textContent = product.countries || "-";
    document.getElementById("productImage").src = product.image_url || "";

    document.getElementById("productInfo").style.display = "block";
}
