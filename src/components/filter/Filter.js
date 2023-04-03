import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

const Filter = ({ setFilteredArr }) => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onFilter = e => {
    dispatch(addFilter(e.target.value));
    setFilteredArr();
  };

  return <input type="text" value={filter} onChange={onFilter} />;
};

Filter.propTypes = {
  setFilteredArr: PropTypes.func,
};

export default Filter;
