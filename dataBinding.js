const element = document.querySelector('.dataBinding').addEventListener('keyup', (e) => {
    console.log(e.target.value)
    document.querySelector('.result').innerHTML = `${e.target.value}`
})