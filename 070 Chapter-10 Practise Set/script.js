let url = "https://www.googleapis.com/books/v1/volumes?q=romance";

(async () => {
  let bookArray;

  try {
    let response = await fetch(url);
    let jsn = await response.json();

    bookArray = jsn.items.slice(0, 10);
  } catch (error) {
    console.error("Failed to get the books data:", error);
  }

  console.log(bookArray[0]);

  for (const b of bookArray) {
    let book = document.createElement("div");
    book.innerHTML = `
        <div class="card m-2" style="width: 18rem;">
            <img src="${b.volumeInfo.imageLinks.smallThumbnail}" class="card-img-top" alt="Book Title" />
            <div class="card-body">
            <h5 class="card-title">${b.volumeInfo.title}</h5>
            <p class="card-text">
                ${b.volumeInfo.subtitle}
            </p>
            <a href="${b.volumeInfo.previewLink}" class="btn btn-secondary">Preview</a>
            <a href="${b.saleInfo.buyLink}" class="btn btn-warning">Buy</a>
            </div>
        </div>
        `;

    document.getElementsByClassName("container")[1].appendChild(book);
  }
})();



(()=>{
    alert(`The last value you stored was ${localStorage.getItem("key")}`);
    let value=prompt('Enter the value for the key: ');
    if(value)
    {
        localStorage.setItem("key",value);
    }
    
    let del=confirm('Do you want to delete the key?');
    if(del){
        localStorage.removeItem("key");
        alert("Your key has been deleted.");
    }

})();