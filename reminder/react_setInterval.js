// Display a random number every second using setInterval 
// Using arrow function

function ChangeNumber(props) {
    console.log("function ChangeNumber is called")
    return (
        <p>{props.number}</p>
    )
}

class Extrait extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1
        }
    }

    // Chaque seconde, handleChangeNumber est appellé via componentDidMount dans un setInterval, ce qui modifie this.state.number avec un nombre entre 0 et 100
    handleChangeNumber = () => this.setState({ number: (Math.floor(Math.random() * 100)) })

    // this.timerID is un numérique, une valeur qui n'est pas zéro et qui identifie le timer créé par l'appel de setInterval(), cette valeur est ensuite passé à clearInterval pour nettoyer le timer
    componentDidMount() {
        this.timerID = setInterval(() => this.handleChangeNumber(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <ChangeNumber number={this.state.number} />
            </div>
        )
    }
}

ReactDOM.render(
    <div className="firstContainer">
        <Extrait />,
    </div>,
    document.getElementById('root')

)