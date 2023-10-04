// fetch('https://api.github.com/users')
// .then(data => {
//     return data.json();
// })
// .then(data => {
//     console.log(data)
//     let productDetails=document.getElementById("productDetails")
//     data.map(({login,avatar_url,type},index)=>
// {
//     productDetails.innerHTML+=`
//     <tr>
//         <td>${index+1}</td>
//         <td>${login}</td>
//         <td>${type}</td>
//         <td>
//         <img height="200px" width="200px" src=${avatar_url} alt=""> </td>
       
//   </tr>
//     `
// })

const user= fetch("https://api.github.com/users");  //& fetching the data from the url

// let body=document.body;  
const div_1=document.getElementById("div-1");
user.then((data)=>
{
    return data.json();
}).then((userdata)=>
{
    userdata.map(({login,id,node_id,avatar_url,url,html_url,followers_url,following_url,gists_url,starred_url,subscriptions_url,organizations_url })=>
    {
        div_1.innerHTML +=`
        <div id="div-2">
            <img height="200px" width="200px" src="${avatar_url}" alt="">
            <div id="div-3">
                <h4>id:${id}<br> Login : ${login}</h4>
                <h4>Node_id : ${node_id} <br> url : ${url} <br> html_url : ${html_url} <br> followers_url : ${followers_url} <br> following_url : ${following_url} <br> gists_url : ${gists_url} <br> starred_url : ${starred_url} <br> subscriptions_url : ${subscriptions_url} <br> organizations_url : ${organizations_url}</h4>
            </div>
        </div>
        
        `
    })
})
.catch((err)=>
{
    console.log('There was a problem with the fetch operation:');
})

// console.log(userArray);