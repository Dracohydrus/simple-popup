const content = document.querySelector("[data-content]")

const createPopup = (popup, message, actions=["Yes", "No"]) => {
    var promise = new Promise((resolve, reject) => {
        const popupFragment = popup.content.cloneNode(true).children[0]
        const closeButton = popupFragment.querySelector("[data-close-button]")
        closeButton.addEventListener("click",(e) => {
            reject("Popup closed");
            popupFragment.remove()
        })
    
        const messageComponent = popupFragment.querySelector("[data-message]")
        const actionsComponent = popupFragment.querySelector("[data-actions]")
        messageComponent.textContent = message;
        actions.forEach((action, index) => {
            actionsComponent.innerHTML += `<button class="popup-button-id-${index}">${action}</button>`
        })
        actions.forEach((action,index) => {
            const newButton = actionsComponent.querySelector(`.popup-button-id-${index}`)
            newButton.addEventListener("click", (e) => {
                resolve(e.target.innerHTML)
                popupFragment.remove()
            })
        })
        content.append(popupFragment)
    })
    return promise;
}

const updateOutputText = (message) => {
    const dataOuptut = document.querySelector("[data-popup-output]")
    dataOuptut.textContent = `You just clicked: ${message}`;
}

const clickMeButton = document.getElementById("button1")
clickMeButton.addEventListener("click", (e) => {
    const popup = document.querySelector("[data-popup]")
    createPopup(popup, "Are you sure you want to continue?", ["Yes", "No"])
    .then((resolve) => updateOutputText(resolve))
    .catch(reject => console.log(reject))
})

const addRecordButton = document.getElementById("button2")
addRecordButton.addEventListener("click", (e) => {
    const popup = document.querySelector("[data-popup]")
    createPopup(popup, "Which record would you like to add?", ["User", "Order", "Ticket", "Cancel"])
    .then((resolve) => updateOutputText(resolve))
    .catch(reject => console.log(reject))
})

const visitSiteButton = document.getElementById("button3")
visitSiteButton.addEventListener("click", (e) => {
    const popup = document.querySelector("[data-popup]")
    createPopup(popup, "You are trying to access a new website?", ["Proceed", "NO!"])
    .then((resolve) => updateOutputText(resolve))
    .catch(reject => console.log(reject))
})

const favouriteAnimalButton = document.getElementById("button4")
console.log(favouriteAnimalButton)
favouriteAnimalButton.addEventListener("click", (e) => {
    const popup = document.querySelector("[data-popup]")
    createPopup(popup, "Pick your favourite animal", ["Lion", "Elephant", "Giraffe", "Blue Whale", "Eagle", "Monkey", "Shark", "Zebra", "Kangaroo"])
    .then((resolve) => updateOutputText(resolve))
    .catch(reject => console.log(reject))
})

const howAwesomeButton = document.getElementById("button5")
howAwesomeButton.addEventListener("click", (e) => {
    const popup = document.querySelector("[data-popup]")
    createPopup(popup, "Pick your favourite animal", [1,2,3,4,5,6,7,8,9,10])
    .then((resolve) => updateOutputText(resolve))
    .catch(reject => console.log(reject))
})