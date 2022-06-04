const form = document.querySelector('.signup-form')
 const username = document.querySelector('.username')
 const firstname = document.querySelector('.firstname')
 const middlename = document.querySelector('.middlename')
 const lastname = document.querySelector('.last')
 const email = document.querySelector('.email')
 const dob = document.querySelector('.dob')
 const password = document.querySelector('.password')

 const form1 = document.querySelector('.loginform')
 const user1 = document.querySelector('.loginuser')
const password1 = document.querySelector('.loinpassword')




document.querySelector('.btn').addEventListener('click', async (e)=>{
    e.preventDefault()
    const pass = password1.value;
    const use = user1.value;
    console.log(`${pass} and ${use}`)
    const result1 = await fetch('/signup',{
        method:'POST',
        headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify({
            username:user1.value,
            password:password1.value
        })
    }).then((res)=>{
        console.log(res)
    }).catch(err=>console.log(err))
})






//  form.addEventListener('submit', async (event)=>{
//      event.preventDefault()
//     const result=  await  fetch('/api/register1',{
//             method:'POST',
//             headers:{ 
//                 'content-Type':'application/json'
//             },
//             body:JSON.stringify({
//                  username,
//                  firstname,
//                  middlename,
//                  email,
//                  dob,
//                  password
//             })
//         }).then(res =>{
//             res.json()
//         } )
//         console.log(result)
//  })






 