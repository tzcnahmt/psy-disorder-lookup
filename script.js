import { disorders } from "./disorders-data.js"

const ulListItemsEl = document.getElementById("tag-list-items")
const tagSectionEl = document.querySelector(".tag__section")
const disorderContentEl = document.getElementById("disorder__content")
const closeIconEl = document.querySelector(".close__icon")
const inputEl = document.getElementById("search")
const closeSvg = `<?xml version="1.0"?><svg fill="red" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/></svg>`

function Disorder(data, index) {
    this.disorderData = data
    this.disorderIndex = index

    this.getDisorder = function () {
        const orderedData = this.disorderData[this.disorderIndex]
        return `<h1 style="color: blue">${orderedData.title}</h1><p>${orderedData.desc}</p>`
    }
}

function tagListRenderer() {
    const tagNames = disorders
        .map((item) => `<li id="tag">${item.title.toLowerCase()}</li>`)
        .join("")

    ulListItemsEl.innerHTML = tagNames
}

function contentRendererOnTagClick() {
    const tags = document.querySelectorAll("#tag")
    const listOfTags = [...tags]

    listOfTags.forEach((itemTag) => {
        itemTag.addEventListener("click", function () {
            tagSectionEl.style.opacity = 0
            disorderContentEl.style.opacity = 0

            const itemIndex = listOfTags.indexOf(itemTag)
            const retrieveDisorder = new Disorder(disorders, itemIndex)

            setTimeout(function () {
                inputEl.value = itemTag.textContent
                closeIconEl.innerHTML = closeSvg
                closeIconEl.addEventListener("click", clickOnCloseIcon)
                disorderContentEl.classList.remove("hidden")
                tagSectionEl.classList.add("hidden")
                tagSectionEl.style.opacity = 0
            }, 500)

            setTimeout(function () {
                disorderContentEl.innerHTML = retrieveDisorder.getDisorder()
                disorderContentEl.style.opacity = 1
            }, 1000)
        })
    })
}

function clickOnCloseIcon() {
    tagListRenderer()
    contentRendererOnTagClick()

    disorderContentEl.style.opacity = 0

    setTimeout(function () {
        inputEl.value = ""
        closeIconEl.innerHTML = ""
        disorderContentEl.classList.add("hidden")
        // headingSectionEl.classList.remove("hidden");
        tagSectionEl.classList.remove("hidden")
    }, 500)

    setTimeout(function () {
        tagSectionEl.style.opacity = 1
    }, 1000)
}

function searchDisorder() {
    inputEl.addEventListener("keyup", function () {
        let filter = inputEl.value
        let allLi = ulListItemsEl.getElementsByTagName("li")
        let listLen = ulListItemsEl.getElementsByTagName("li").length

        for (let i = 0; i < listLen; i++) {
            let textValue = allLi[i].innerText
            if (textValue.indexOf(filter) > -1) {
                allLi[i].style.display = ""
            } else {
                allLi[i].style.display = "none"
            }
        }
    })
}

tagListRenderer()
searchDisorder()
contentRendererOnTagClick()
