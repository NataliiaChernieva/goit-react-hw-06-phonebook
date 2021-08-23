import { useDispatch, useSelector } from 'react-redux';
import Input from '../Input/Input';
import { filter } from '../../redux/slices/filter';

export default function Filter() {
    const dispatch = useDispatch();
    const filterValue = useSelector((state) => state.filter);
    // console.log(`filterValue`, filterValue)
    
    const changeFilter = e => {
    dispatch(filter(e.target.value.toLowerCase()));
    };
    
    return (
      <Input
          name="Find contacts by name"
          type="text"
          value={filterValue}
          onChange={changeFilter}
        />
 )
 }