import {FiPlus, FiX} from 'react-icons/fi';
import PropTypes from 'prop-types';
import { Container } from './styles';

export function NoteItem ({isNew, value, onClick, ...rest}) {

  return (

    <Container>

      <input 
      type="text"
      value={value}
      readOnly={!isNew}
      {...rest}
      />
    <button
      type='button'
      className={isNew ? 'button-add' : 'button-delete'}  
      onClick={onClick}
    >
      { isNew ? <FiPlus  /> : <FiX/>}
    
    </button>
      

    </Container>
  )


}

NoteItem.propTypes = {
  isNew: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};