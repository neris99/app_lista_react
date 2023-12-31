import { Card } from "../../components/Card/Card";
import { useAppContext } from "../../store/AppContext";
import { openModalSavePin } from "../../store/actions";

export const CardContainer = (props) => {
    const {state, dispatch} = useAppContext()

    const handleClick = (pinId) => {
        console.log('Clicou', pinId)
        dispatch(openModalSavePin())
    }
    return(
        <Card {...props} onClick={handleClick}/>
    )
}