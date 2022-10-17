const btn = document.querySelector('.btn');
const fact = document.querySelector('.fact');




const catFact = () => {
    axios
    .get("https://meowfacts.herokuapp.com/")
    .then(res => {
        fact.textContent = res.data.data[0];
    })
    .catch(err => console.log(err))
}





btn.addEventListener('click', catFact);