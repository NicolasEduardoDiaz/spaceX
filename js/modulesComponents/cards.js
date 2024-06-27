export const imageRockets = async(flickr_images)=> {
    let selection_image = document.querySelector("#section_image")
    let divs = [];
    flickr_images.forEach(val =>{
        let div = document.createElement("div");
        div.classList.add("carousel_item")
        let img = document.createElement("img");
        img.setAttribute("src", val)
        img.setAttribute("referrerpolicy", "no-referrer")
        div.append(img)
        divs.push(div);
    });
    selection_image.append(...divs)
    // <div class="carousel_item">
    //  <img src="https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg" referrerpolicy="no-referrer">
    // </div>
}