import './ToggleButton.css'
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { useContext } from 'react';

const ToggleButton = ()=> {

    const theme = useContext(ThemeContext); 

    return(
        <> 
            <input 
                type="checkbox" 
                id="toggle_checkbox"
                onClick={()=>theme.changeTheme(theme.theme)}
            />
            
            <label htmlFor="toggle_checkbox">
                <div id="star">
                    <div className="star" id="star-1">★</div>
                    <div className="star" id="star-2">★</div>
                </div>
                <div id="moon"></div>
            </label>
        </>
    )    
}

export default ToggleButton

