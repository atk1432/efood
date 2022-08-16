import styles from '../Asset/Css/Edit.module.css';


function EditText(props) {

    return ( 
        <div 
            className={styles.EditText}
            style={props.style}
        >
            Viết bình luận
        </div>
    );
}

export default EditText;