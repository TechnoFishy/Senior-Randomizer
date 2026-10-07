

let Students_Names = ["Taha", "Moises", "Cristian", "Jacob", "Akari", "James", "Cayden", "Maysem", "Justin", "Nels", "Kosta", "Adam", "Daemion"]

let working_students = []
let all_excluded_students = []
let random = Math.floor(Math.random() * Students_Names.length)


// -- Exclusion Form Results --
function exclusion()
{
    const form = document.getElementById("Exclude_Form");
    form.addEventListener('submit', (event)=> {
        all_excluded_students=[]
        event.preventDefault()

        const formData = new FormData(event.target)

        const excluded_students = formData.getAll("students")

        for(i = 0; i < excluded_students.length; i++)
        {
            all_excluded_students.push(excluded_students[i])
        }

        all_excluded_students = all_excluded_students.map(Number)
        name_Change()
        List_the_Excluded()
    })
}

function name_Change()
{
    // Resets the working students array for randomization
    working_students=[]

    for(let i = 1; i < 4; i++)
    {
        random = Math.floor(Math.random() * Students_Names.length)
        
        while(working_students.includes(random) || all_excluded_students.includes(random))
        {
            random = Math.floor(Math.random() * Students_Names.length)
        }

        working_students.push(random)

        document.getElementById(`student_${i}`).innerHTML = Students_Names[random]
    }
}

function List_the_Excluded()
{
    const list_div = document.getElementById('List_of_the_Damned')

    list_div.replaceChildren();

    for(i = 0; i < all_excluded_students.length; i++)
    {
        const name = Students_Names[all_excluded_students[i]]

        const template = `<h2 class="text-2xl">${name}</h2>`

        list_div.insertAdjacentHTML("beforeend", template)
    }
}