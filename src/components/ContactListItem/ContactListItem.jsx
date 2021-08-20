import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ContactItem} from './ContactListItem.styled';
import Button from '../Button/Button';
// import { deleteContact } from '../../redux/actions/items'; //без Toolkit i Slice
import { deleteContact } from '../../redux/slices/items.js'; //c Slice

export default function ContactListItem({ name, number, id}) {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(deleteContact(id));
  }
  
  return (
    <ContactItem>
      {name} : {number}
      <Button type="button" text="delete" onClick={deleteItem} />
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
}