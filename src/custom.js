const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

// This is an array of html elements, since getElementsByClassName returns an array, since there can be more than one html element with that class.
const elements = document.getElementsByClassName("writer");

(async (typedElements) => {
    let texts = []

    for (let element of typedElements){
        // The property to access the text inside the elements .innerHTML, if its a user interactuable element such as <input> or <textarea> then its .value
        texts.push(element.innerText);
        console.log(element.innerText);
        console.log(element.innerHTML);
        element.innerText = "";
    }

    // texts and typedElements has the same length.
    for (let i = 0; i < texts.length; i++) {
        elements[i].classList.add("typing")
        for (let character of texts[i]) {
            typedElements[i].innerText += character;
            await sleep(15)
        }
        // Check if next element exists
        if(elements[i+1]) {
            elements[i].classList.remove("typing")
        }

    }

})(elements);
