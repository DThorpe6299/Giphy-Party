$gifArea = $("#gif-area");
$searchInput = $("#search");

function addGif(res) {
    let numResults = res.data.images.original.length;
    if(numResults) {
        let randomGif = Math.floor(Math.random() * numResults);
        let $newCol = $('<div>', {class: "col-md-4 col-12 mb-4"});
        let $newGif = $("<img>", {
            scr: res.data.images.original[randomGif].url,
            class: "w-100"
        });
        $newCol.append($newGif);
        $gifArea.append($newCol);
    }
}


$("#search-btn").on("submit", async function(evt) {
    evt.preventDefault();
    let searchTerm = $searchInput.val();

    const response = await axios.get("https://api.giphy.com/v1/gifs/search?api_key=VmrAea42c0MbVP3POL0XdrE5YXkhpZIn&q=&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips", { params: {
        q: searchTerm,
        api_key: "VmrAea42c0MbVP3POL0XdrE5YXkhpZIn"
    }
    });
    addGif(response.data);
    console.log("Added Gif!");
    $searchInput.val("");
    
});

$('#remove-btn').on("click", function(){
    $gifArea.empty();
})