//Aqui está um exemplo de código JS que salva dados do input em JSON e depois pode ser exibido em um HTML:

function saveData() {
  // Get the data from the input field.
  var data = document.getElementById("input").value;

  // Convert the data to JSON.
  var jsonData = JSON.stringify(data);

  // Save the data to a file.
  var file = new File([jsonData], "data.json");
  file.saveAs("data.json");
}

function displayData() {
  // Get the data from the file.
  var file = new File("data.json");
  var data = file.readAsText();

  // Convert the data to JSON.
  var jsonData = JSON.parse(data);

  // Display the data in the HTML.
  document.getElementById("output").innerHTML = jsonData;
}

//Você pode copiar e colar este código em seu próprio projeto. Se você tiver alguma dúvida, não hesite em perguntar.