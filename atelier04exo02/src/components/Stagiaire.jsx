

export default function Stagiaire({nom, age, filiere, url}){

    return (
        <div className="stagiaire">
            <img src={url} alt={nom}/>
            <div className="infostag">
                <h2>{nom} - {filiere}</h2>
                <h4>age : {age}</h4>
            </div>
        </div>
    );
}