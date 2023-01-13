// STEP 1 SELECT CONTAINER
let container = document.getElementsByClassName("cover")[0];
console.log(container)


// STEP 2 FETCH DATA
fetch("/api/data")
  .then((response) => response.json())
  .then((data) => render(data));




//
const createCard = ({id, description, title}) => {
    return `
        <div class="box">
            <div class="title">
                ${title}
            </div>
            <div class="description">
                ${description}
            </div>
        </div>
    `
}
// STEP 3 RENDER
const render = (data) => {
    let child = ''
    for(let item of data){
        let card = createCard(item)
        child += card
    }
    container.innerHTML = child
}