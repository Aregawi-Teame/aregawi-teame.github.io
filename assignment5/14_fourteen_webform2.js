function showPopUp(){
    alert("Product Number = "+ document.getElementById("producNumber").value + "\n" + ("Name = "+ document.getElementById("name").value)
    + "\n" + ("Unit Price = "+ document.getElementById("unitPrice").value) + "\n" + ("Quantity In Stock = "+ document.getElementById("quantityInStock").value)
    + "\n" + ("Supplier = "+ document.getElementById("supplier").value) + "\n" + ("Suppy Date = "+ document.getElementById("dateSupplied").value) );
}

document.getElementById("addBtn").onclick = showPopUp;