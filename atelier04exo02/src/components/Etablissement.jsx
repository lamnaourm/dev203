import { Component } from "react";
import Stagiaire from './Stagiaire' 

export default class Etablissement extends Component {

    constructor(props){
        super(props);

        this.state = {
            stgs : this.props.stagiaires,
        }
    }

    render(){
        return (
            <div className="etablissement">
                <h1>Le nombre de stagiaire : {this.state.stgs.length}</h1>
                {this.state.stgs.map(
                    item => (
                        <Stagiaire key={item.id
                        } nom={item.nom} age={item.age} filiere={item.filiere} url={item.image} /> 
                    ) )}

                    <div className="buttons">
                        <button onClick={() => this.setState({stgs:[]})}>Clear ALL</button>
                        <button onClick={() => this.setState({stgs:this.props.stagiaires})}>ALL</button>
                        <button onClick={() => this.setState({stgs:this.props.stagiaires.filter(item => item.filiere==='TDI')})}>Filiere TDI</button>
                        <button onClick={() => this.setState({stgs:this.props.stagiaires.filter(item => item.filiere==='TRI')})}>Filiere TRI</button>
                    </div>
            </div>
        );
    }
}