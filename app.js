const $gifBox = $("#gifBox");
const $searchInput = $("#search");

function addGif(res) {
  let numResults = res.data.length;
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
    let $newGif = $("<img>", {
      src: res.data[randomIdx].images.original.url,
      class: "w-100",
    });
    $newCol.append($newGif);
    $gifBox.append($newCol);
  }
}

$("form").on("submit", async function (e) {
  e.preventDefault();

  let searchTerm = $searchInput.val();
  $searchInput.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "XXktxW54VLRJVGipu60GzHUCfz3CUpDj",
    },
  });
  addGif(response.data);
});

//REMOVE GIF

$("#remove").on("click", function () {
  $gifBox.empty();
});
