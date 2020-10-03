function ShowUserTable() {
    let users = [
        { firstName: "John", lastName: "Connor", age: 20 },
        { firstName: "Geralt", lastName: "Rivia", age: 45 },
        { firstName: "Nathan", lastName: "Drake", age: 36 }
    ]

    // La fonction map permet de créer un nouvel array en passant par une itération sur un élément initial 
    // Dans ce contexte, il y a itération sur users et un nouvel array est créé dans usersName  
    // la clé permet d'identifier l'élement, on aurait pu ajouter une colonne id et l'utiliser en clé aussi 
    let usersName = users.map((user, index) => (
        <tr key={index}>
            <td>{user.firstName} </td>
            <td>{user.lastName} </td>
        </tr>
    ))

    console.log(usersName)

    return (
        <table>
            <thead>
                <tr>
                    <th> firstName </th>
                    <th> lastName</th>
                </tr>
            </thead>
            <tbody>
                {usersName}
            </tbody>
        </table>
    )
}