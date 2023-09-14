//your code here

// Define the array of band names
const bandNames = [
  'The Rolling Stones',
  'Led Zeppelin',
  'Aerosmith',
  'The Beatles',
];

// Function to remove articles from band names
function removeArticles(name) {
  return name.replace(/^(?:the|an|a)\s+/i, '');
}

// Sort the band names after removing articles
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Get the <ul> element by its id
const bandList = document.querySelector('#bands');

// Iterate through the sorted band names and create <li> elements
bandNames.forEach((bandName) => {
  const listItem = document.createElement('li');
  listItem.textContent = bandName;
  bandList.appendChild(listItem);
});