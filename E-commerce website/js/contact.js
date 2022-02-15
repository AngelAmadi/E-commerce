document.getElementById('formID').addEventListener('submit',(e)=> {
    e.preventDefault();

    alert("Hi "+ name.value + ", we have received your enquires, please allow 1 working day for a reponse. Thank you ");
    location.reload();
})

let name = document.getElementById('name')