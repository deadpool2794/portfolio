
const DummyPage = () => {
    
    const details = {
        imageSource : "./resources/me_cropped.jpg",
        name : "Alim Khan Abdul",
        csuId : 2882808
    }

    const imageContainer = document.createElement("div")
    imageContainer.classList.add("image-container")
    
    const myImage = document.createElement("img")
    myImage.src = details.imageSource
    myImage.alt = details.name
    myImage.classList.add("my-image")

    imageContainer.appendChild(myImage)

    const nameHeading = document.createElement("h1")
    nameHeading.textContent = details.name
    nameHeading.classList.add("name-heading")

    const forId = document.createElement("p")
    forId.classList.add("csu-id")
    forId.textContent = `CSU_ID: ${details.csuId}`

    const dummyContainer = document.createElement("div")
    dummyContainer.classList.add("main-container")

    dummyContainer.appendChild(imageContainer)
    dummyContainer.appendChild(nameHeading)
    dummyContainer.appendChild(forId)

    return dummyContainer

}

export default DummyPage

