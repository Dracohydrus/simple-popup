const clickMeButton = document.getElementById("button1")
const content = document.querySelector("[data-content]")

const createPopup = (popup, message, actions=["Yes", "No"]) => {
    var promise = new Promise((resolve, reject) => {
        const popupFragment = popup.content.cloneNode(true).children[0]
        const closeButton = popupFragment.querySelector("[data-close-button]")
        closeButton.addEventListener("click",(e) => {
            resolve(null);
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
                resolve(e.target.innerHTML)
                popupFragment.remove()
            })
        })
        content.append(popupFragment)
    })
    return promise;
}

clickMeButton.addEventListener("click", (e) => {
    const popup = document.querySelector("[data-popup]")
    createPopup(popup, "Test message new", ["proceed", "cancel", "other"])
    .then((resolve) => {
        console.log(resolve)
    })
})

