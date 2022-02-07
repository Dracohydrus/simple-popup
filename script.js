const clickMeButton = document.getElementById("button1")
const content = document.querySelector("[data-content]")

const createPopup = (message, actions=["Yes", "No"]) => {
    const popup = document.querySelector("[data-popup]")
    const popupFragment = popup.content.cloneNode(true).children[0]

    const closeButton = popupFragment.querySelector("[data-close-button]")
    closeButton.addEventListener("click",(e) => {
        popupFragment.remove()
    })

    const messageComponent = popupFragment.querySelector("[data-message]")
    const actionsComponent = popupFragment.querySelector("[data-actions]")
    messageComponent.textContent = message;
    actions.forEach((action) => {
        actionsComponent.innerHTML += `<button data-button-${action}>${action}</button>`
    })
    actions.forEach((action) => {
        const newButton = actionsComponent.querySelector(`[data-button-${action}]`)
        newButton.addEventListener("click", (e) => {
            console.log(e.target.innerHTML)
            popupFragment.remove()
        })
    })
    
    content.append(popupFragment)
}


clickMeButton.addEventListener("click", (e) => {
    createPopup("Test message new", ["proceed", "cancel", "other"])
})

