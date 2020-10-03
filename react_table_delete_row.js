import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
* OBJECTIF
* Afficher un tableau via React
* Pouvoir supprimer chaque ligne indépendament grâce à un bouton
*/

// Définir une liste d'utilisateurs 
let users = [
    { firstName: "John", lastName: "Connor", age: 20 },
    { firstName: "Geralt", lastName: "Rivia", age: 45 },
    { firstName: "Nathan", lastName: "Drake", age: 36 }
]


class Exercice extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users: users
        }
    }

    // 1er méthode 
        // Fonction qui permet la suppression d'une ligne du tableau 
            // De cette manière, la liste de base n'est pas modifiée  
     onClickDeleteRow = (index) => {
        // On utilise un filter pour récupérer tout les éléments qui ne correspondent pas à l'index à supprimé
        // On ajoute ces éléments dans une nouvelle variable
        const updatedUsers = this.state.users.filter((user, idx) => idx !== index);
        // On affiche cette nouvelle variable dans le state
        this.setState({ users: updatedUsers });
     };
    
    //  2eme méthode 
        // Problème de cette méthode est que l'on modifie l'array original users 
    // onClickDeleteRow = index => {
    //     // splice retourne un array qui contient les éléments supprimés
    //     // users = users.splice(index,1)   ==> Incorrect, la variable contiendrait les éléments supprimés et l'affichage serait faussé
    //     users.splice(index,1)  // Correct, l'array retourné avec les éléments supprimés n'est pas à associé à la variable users
    //     this.setState({users: users})
    // }

    render() {
        let usersName = this.state.users.map((user, index) => (
            <tr key={index}>
                <td>{user.firstName} </td>
                <td>{user.lastName} </td>
                <td><button onClick={() => this.onClickDeleteRow(index)}>Delete</button></td>
            </tr>
        ))

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
}

//////////////////////////////////////////////////////////////////////////////////////////////
// De multiples composants dans un ReactDOM.render doivent être dans un container pour fonctionner 
ReactDOM.render(
    <div className="firstContainer">
        <Exercice />
    </div>,
    document.getElementById('root')

)


