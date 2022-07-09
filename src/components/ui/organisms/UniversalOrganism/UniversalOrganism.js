import styles from './UniversalOrganism.module.sass';

const UniversalOrganism = ({children, secondClass=null, ...rest}) => 
{
    return ( 
        <div className={`${styles.universalOrganism} ${secondClass}`}  {...rest}>
            {children}
        </div>  
     );
}
 
export default UniversalOrganism;