import { useParams} from "react-router-dom";
 
function User(){
    const Params =useParams();
    const {name}= Params;
    console.log(name);
    return(
        <div>
            <h1>This is {name}'s Details Page</h1>
        </div>
    )
}

export default User