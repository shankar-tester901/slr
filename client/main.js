// Define a machine learning model for linear regression
const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
// Specify loss and optimizer for model
model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });
// Prepare training data

const xs = tf.tensor2d([0, 2, 4, 5, 6, 9, 10], [7, 1]);
const ys = tf.tensor2d([0, 4, 8, 10, 12, 18, 20], [7, 1]);


// Train the model and set predict button to active
model.fit(xs, ys, { epochs: 500 }).then(() => {
    // Use model to predict values
    document.getElementById('predictButton').disabled = false;
    document.getElementById('predictButton').innerText = "Predict";
});
// Register click event handler for predict button
document.getElementById('predictButton').addEventListener('click', (el, ev) => {
    var val = document.getElementById('inputValue').value;
    console.log(val);
    val = parseInt(val);
    document.getElementById('output').innerText = model.predict(tf.tensor2d([val], [1, 1]));
});