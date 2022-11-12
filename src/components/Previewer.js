import { useDispatch, useSelector } from "react-redux/es/exports";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import PropTypes from 'prop-types';
import styles from "./Previewer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinimize } from "@fortawesome/free-solid-svg-icons";
import { faMaximize} from "@fortawesome/free-solid-svg-icons";
import { previewerActions } from "../store/previewerSlice";


const Previewer = () =>{
    const dispatch = useDispatch();
    const text = useSelector(state=> state.editorReducer);
    const isOpen = useSelector(state=> state.previewerReducer.isOpen)
    const handleClick = () =>{
        dispatch(previewerActions.changeIsOpen());

    }
    if(isOpen){
        return (
            <div id={styles.preview} className={styles.fullHeight}>
                <div className={styles.flex}>
                    <p>Previewer</p>
                    <FontAwesomeIcon className={styles.icon} onClick={handleClick} icon={faMinimize} />
                </div>
                <div className={styles.content}>
                    <ReactMarkdown remarkPlugins={remarkGfm} children={text.input}></ReactMarkdown>
                </div>
            </div>
        )
    }
    else{
        return (
            <div id={styles.preview}>
                <div className={styles.flex}>
                    <p>Previewer</p>
                    <FontAwesomeIcon className={styles.icon} onClick={handleClick} icon={faMaximize} />
                </div>
                <div className={styles.content}>
                    <ReactMarkdown remarkPlugins={remarkGfm} children={text.input}></ReactMarkdown>
                </div>
            </div>
        )
    }
};
ReactMarkdown.propTypes = {
    children: PropTypes.string
};
export default Previewer;
