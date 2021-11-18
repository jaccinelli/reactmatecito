import { useHistory } from "react-router-dom";

export function Navigate(url){
    let history = useHistory();
    history.push(url)
}