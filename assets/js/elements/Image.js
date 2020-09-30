import Alert from "./Alert"

export default class InputImage extends HTMLInputElement {

    connectedCallback () {
        const view = this.dataset.image
        this.insertAdjacentHTML('afterend', `<div class="input-image"><div class="input-image__view" style="background-image:url(${view})"></div></div>`)

        this.style.display = 'none'
        this.container = this.parentElement.querySelector('.input-image')
        this.container.addEventListener('dragenter', this.onDragEnter.bind(this))
        this.container.addEventListener('dragleave', this.onDragLeave.bind(this))
        this.container.addEventListener('dragover', this.onDragOver)
        this.container.addEventListener('drop', this.onDrop.bind(this))
        this.view = this.container.querySelector('.input-image__view')
    }

    disconnectedCallback () {
        
    }

    onDragEnter(e) {
        e.stopPropagation()
        e.preventDefault()
        this.container.classList.add('is-overflow')
    }

    onDragLeave(e) {
        e.stopPropagation()
        e.preventDefault()
        this.container.classList.remove('is-overflow')
    }

    onDragOver (e) {
        e.stopPropagation()
        e.preventDefault()
    }

    async onDrop(e) {
        e.stopPropagation()
        e.preventDefault()
        const files = e.dataTransfer.files
        if (files.length === 0) return false
        const data = new FormData
        data.append('file', files[0])
        let url = '/admin/image'
        if (this.imageId !== '') {
            url = `${url}/${this.imageId}`
        }
        const response = await fetch(url, {
            method: 'POST',
            body: data
        })
        const responseData = await response.json()
        if (response.status >= 200 && response.status < 300) {
            this.view.style.backgroundImage = `url(${responseData.url})`
            this.value = responseData.id
        } else {
            const alert = new Alert({message: responseData.error})
            document.querySelector('.form__product__container').prepend(alert)
        }
        this.container.classList.remove('is-overflow')
    }

    /**
     * @return {string}
     */
    get imageId() {
        return this.value
    }
}

global.customElements.define('input-image', InputImage, {
    extends: 'input'})