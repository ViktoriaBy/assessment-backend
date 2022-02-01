const dogsContainer = document.querySelector('#dogs-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/dogs`

const dogsCallback = ({ data: dogs }) => displayDogs(dogs)
const errCallback = err => console.log(err.response.data)

const getAllDogs = () => axios.get(baseURL).then(dogsCallback).catch(errCallback)
const createDog = body => axios.post(baseURL, body).then(dogsCallback).catch(errCallback)
const updateDog = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(dogsCallback).catch(errCallback)
const deleteDog = id => axios.delete(`${baseURL}/${id}`).then(dogsCallback).catch(errCallback)

document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data)
        });
      }

function submitHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#title')
    let imgURL = document.querySelector('#img')
    let rating = document.querySelector('input[name="ratings"]:checked')

    let bodyObj = {
        title: title.value, 
        imgURL: imgURL.value,
        rating: rating.value
    } 

    createDog(bodyObj)

    title.value = ''
    imgURL.value = ''
    rating.checked = false
}

function createDogCard(dog) {
    const dogCard = document.createElement('div')
    dogCard.classList.add('dog-card')

    dogCard.innerHTML = `<img alt='dog cover' src=${dog.imgURL} class="dog-cover"/>
    <p class="dog-title">${dog.title}</p>
    <div class="btns-container">
        <p class="dog-rating">${dog.rating} years old</p>
      <i class="far fa-plus-square" id="ageBtn" onclick="updateDog(${dog.id}, 'plus')"></i>
    <i class="far fa-minus-square" id="ageBtn" onclick="updateDog(${dog.id}, 'minus')"></i>
    </div>
    <i class="fas fa-trash" id="deleteDogBtn" onclick="deleteDog(${dog.id})"></i>
    `
    dogsContainer.appendChild(dogCard)
}

function displayDogs(arr) {
    dogsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createDogCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllDogs()