const toggleButton = document.querySelector('input')
const basicPrice = document.querySelector('.basic')
const professionalPrice = document.querySelector('.professional')
const masterPrice = document.querySelector('.master')

toggleButton.addEventListener('change', () => {
    if (toggleButton.checked) {
        basicPrice.innerHTML = '<span>&dollar;</span>19.99'
        professionalPrice.innerHTML = '<span>&dollar;</span>24.99'
        masterPrice.innerHTML = '<span>&dollar;</span>39.99'
    } else {
        basicPrice.innerHTML = '<span>&dollar;</span>199.99'
        professionalPrice.innerHTML = '<span>&dollar;</span>249.99'
        masterPrice.innerHTML = '<span>&dollar;</span>399.99'
    }
})