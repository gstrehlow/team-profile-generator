function generateMembers(memberList){
    return `
    <section id="employees">
        ${memberList.filter(({officeNumber}) => officeNumber !== undefined) //managers
            .map((obj) =>{
                return `
                <h3>${obj.getName()} ${obj.getRole()} ${obj.getID()} ${obj.getEmail()} ${obj.getOfficeNumber()}</h3>
                `;
            })
        .join('')}
        ${memberList.filter(({github}) => github !== undefined) //engineers
            .map((obj) =>{
                return `
                <h3>${obj.getName()} ${obj.getRole()} ${obj.getID()} ${obj.getEmail()} ${obj.getGitHub()}</h3>
                `;
            })
        .join('')}
        ${memberList.filter(({school}) => school !== undefined) //interns
            .map((obj) =>{
                return `
                <h3>${obj.getName()} ${obj.getRole()} ${obj.getID()} ${obj.getEmail()} ${obj.getSchool()}</h3>
                `;
            })
        .join('')}
    </section>
  `;
}

module.exports = memberList =>{
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Team Profile Generator</title>
   <link rel="stylesheet" href="../src/style.css">
   <link href="https://fonts.googleapis.com/css?family=Bungee+Inline|Bungee+Shade&display=swap" rel="stylesheet">
   <style>
       body {
           background: url(https://cdn.stocksnap.io/img-thumbs/960w/computer-laptop_NLBN1GQQET.jpg) center;
           background-size: 100% 100%;
           background-repeat: no-repeat;
           margin: 0%;
           height: 100vh;
       }
       .header {
           background-color: rgb(245, 247, 155);
           border: solid black;
           text-align: center;
           font-size: 30px;
           font-family: 'Bungee Shade', cursive;  
       }
       .container-body {
           display: flex;
           justify-content: space-evenly;
       }
       .card {
           background-color:rgb(255, 255, 255);
           margin-top: 4%;
           border: solid black;
           font-size: x-large;
       }
       .card-header{
           margin: 10%;
       }
       .card-body{
           margin: 5%;
       }
   </style>
   
</head>
    
    <body>
   <div class=header>
       <h1>My Team</h1>
   </div>
   <div class="container-body">
   ${generateMembers(memberList)}
         </div>
    <script src="https://kit.fontawesome.com/257de25400.js" crossorigin="anonymous"></script>         
    </body>
    
    </html>`
}