import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// On a besoin de configurer enzyme pour utiliser l'adapter de react-16 (fiber)
configure({ adapter: new Adapter() });