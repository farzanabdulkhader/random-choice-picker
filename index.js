const textArea = document.getElementById('txt-area')
const choicesEl = document.getElementById('choices')

// textArea.focus()

textArea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter') {

        setTimeout( () => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

function createTags(choiceStr) {
    const choiceList = choiceStr.split(',')
    const tagsList = choiceList.filter(choice => choice.trim() !== '').map(choice => choice.trim())

    choicesEl.innerHTML = ''

    tagsList.forEach(tag => {
        const choiceEl = document.createElement('span')
        choiceEl.classList.add('tag')
        choiceEl.innerText = tag
        choicesEl.appendChild(choiceEl)
    });
}

function randomSelect() {
    const times = 30
    const interval = setInterval( () => {
        const randomTag = randomPicker()

        if (randomTag !== undefined) {
        highlightTag(randomTag)

        setTimeout( () => {
            unhighlightTag(randomTag)
        }, 100)
    }
    }, 100) 

    setTimeout( () => {
        clearInterval(interval)

        setTimeout( () => {
            const randomTag = randomPicker()
            highlightTag(randomTag)
        }, 100)
    }, times * 100)
}

function randomPicker() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unhighlightTag(tag) {
    tag.classList.remove('highlight')
}

