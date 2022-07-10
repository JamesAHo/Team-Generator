const generatePage = RosterArray => {
    let rosters = []
    // make a forloop for each roster array will be generate/
    for(let i = 0; i < RosterArray.length; i++) {
        // run if statement to indenfy each role user choose
        if(RosterArray[i].getRole() === 'Manager') {
            // Manager will be identify as Red color(bg-danger)
            rosters.push(` <div class="card" style="width: 18rem; display: inline-block">
            <div class="card-header bg-danger">
              <p class='text-light'>Name: ${RosterArray[i].name}</p>
              <p class='text-light'><i class="fas fa-mug-hot" style='margin-right: 0.5vw;'></i>Manager</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${RosterArray[i].id}</li>
              <li class="list-group-item">Email: <a href="mailto:${RosterArray[i].email}">${RosterArray[i].email}</a></li>
              <li class="list-group-item">Office Number: ${RosterArray[i].officeNumber}</li>
            </ul>
          </div>`)
          // Engineer will be idenfity as green color (bg-success)
        } else if (RosterArray[i].getRole() === 'Engineer') {
            rosters.push(`<div class="card" style="width: 18rem; display: inline-block">
            <div class="card-header bg-success">
              <p class='text-light'>Name: ${RosterArray[i].name}</p>
              <p class='text-light'><i class="fas fa-laptop-code " style='margin-right: 0.5vw;'></i>Engineer</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${RosterArray[i].id}</li>
              <li class="list-group-item">Email: <a href="mailto:${RosterArray[i].email}">${RosterArray[i].email}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${RosterArray[i].github}" target="_blank">${RosterArray[i].github}</a></li>
            </ul>
          </div>`)
        } else {
            rosters.push(`<div class="card" style="width: 18rem; display: inline-block">
            <div class="card-header bg-warning">
              <p class='text-dark'>Name: ${RosterArray[i].name}</p>
              <p class='text-dark'><i class="fas fa-graduation-cap" style='margin-right: 0.5vw;'></i>Intern</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${RosterArray[i].id}</li>
              <li class="list-group-item">Email: <a href="mailto:${RosterArray[i].email}">${RosterArray[i].email}</a></li>
              <li class="list-group-item">School: ${RosterArray[i].school}</li>
            </ul>
          </div>`)
        }
    }
    // html format
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link rel="stylesheet" href="style/sample.css">
        <title>Document</title>
    </head>
    <body>
        <header class="jumbotron sticky-top bg-primary py-3 text-center mb-2">
            <h1 class='text-light'>My Development Team</h1>
        </header>
        <main>
            <div class="card">
                ${rosters.join(' ')}
            </div>
               
        </main>
        
    </body>
    </html>`
    return html
}

module.exports = generatePage;