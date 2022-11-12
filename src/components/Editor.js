import { useDispatch, useSelector } from "react-redux";
import { editorActions } from "../store/editorSlice";
import styles from "./Editor.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinimize } from "@fortawesome/free-solid-svg-icons";
import { faMaximize} from "@fortawesome/free-solid-svg-icons";

const Editor = () => {
    const dispatch = useDispatch();
    const input = useSelector(state => state.editorReducer);
    const isOpen = useSelector(state => state.editorReducer.isOpen);

    const handleChange = (event) =>{
        dispatch(editorActions.changeInput(event.target.value));
    };

    const handleClick = () =>{
        dispatch(editorActions.changeIsOpen());
    };
    if(isOpen){
        return (<div id={styles.editor} className={styles.fullHeight}>
            <div className={styles.flex}>
                <p>Editor</p>
                <FontAwesomeIcon className={styles.icon} onClick={handleClick} icon={faMinimize}/>
            </div>

            <textarea id="editor" className={styles.textarea} value={input.input} onChange={handleChange}></textarea>
        </div>
        )
    }
    else{
        return (<div id={styles.editor}>
            <div className={styles.flex}>
                <p>Editor</p>
                <FontAwesomeIcon className={styles.icon} onClick={handleClick} icon={faMaximize}/>
            </div>

            <textarea id="editor" className={styles.textarea} value={input.input} onChange={handleChange}></textarea>
        </div>
        )
    }

}
export default Editor;
