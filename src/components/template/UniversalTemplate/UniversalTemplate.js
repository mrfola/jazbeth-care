import styles from "./UniversalTemplate.module.sass";

const UniversalTemplate = ({ children, ...rest }) => 
{
    return ( 
        <div {...rest} className={styles.universalTemplate} >
            { children }
        </div>
     );
}
 
export default UniversalTemplate;