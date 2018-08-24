import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

function configureEnzymeAdapter() {
	Enzyme.configure({ adapter: new Adapter() });
}

function config() {
	configureEnzymeAdapter()
}

export default config
