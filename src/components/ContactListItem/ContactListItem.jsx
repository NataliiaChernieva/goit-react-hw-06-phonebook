import PropTypes from 'prop-types';
import { ContactItem} from './ContactListItem.styled';
import Button from '../Button/Button';
import { deleteContact } from '../../redux/actions/items';
import { useDispatch } from 'react-redux';

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