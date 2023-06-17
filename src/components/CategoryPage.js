import { useSelector } from 'react-redux';
import { selectCategories } from '../redux/store';

const CategoryPage = () => {
  const { status } = useSelector(selectCategories);
  return (
    <div className="container-center">
      <h4>{status}</h4>
    </div>
  );
};

export default CategoryPage;
