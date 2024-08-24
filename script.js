document.getElementById('price-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Fetch input values
    const propertyType = document.getElementById('property-type').value;
    const squareFeet = document.getElementById('square-feet').value;

    // Normally, you would send these to your backend model and get the predicted price.
    // For now, let's assume a dummy price calculation.

    const estimatedPrice = calculatePrice(propertyType, squareFeet);

    // Display the estimated price
    document.getElementById('price').innerText = `$${estimatedPrice.toLocaleString()}`;
});

function calculatePrice(propertyType, squareFeet) {
    // Dummy calculation, replace with your model's prediction
    let basePrice = 150; // Assume $150 per square foot
    if (propertyType === 'Villa' || propertyType === 'Farm house') {
        basePrice = 200; // Higher base price for luxury properties
    }
    return squareFeet * basePrice;
}

