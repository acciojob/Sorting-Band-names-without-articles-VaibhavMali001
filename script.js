// Array of band names
  let bandNames = [
    'The Beatles',
    'Led Zeppelin',
    'The Rolling Stones',
    'Pink Floyd',
    'The Doors'
  ];

  // Function to sort band names without articles
  function sortBandNames(bandNames) {
    return bandNames.sort((a, b) => {
      // Function to remove articles from band names
      const removeArticles = name => name.replace(/^(a |an |the )/i, '');
      // Compare band names without articles
      return removeArticles(a).localeCompare(removeArticles(b));
    });
  }

  // Sort band names
  let sortedBandNames = sortBandNames(bandNames);

  // Get ul element by id
  let ulElement = document.getElementById('bands');

  // Clear any existing content inside ul
  ulElement.innerHTML = '';

  // Iterate over sorted band names and add them to ul as list items
  sortedBandNames.forEach(bandName => {
    let liElement = document.createElement('li');
    liElement.textContent = bandName;
    ulElement.appendChild(liElement);
  });