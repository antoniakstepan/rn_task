import { NavigationActions } from 'react-navigation';
import { screens } from '../navigation/component/screens';

class NavigationService {
	constructor() {
		this.navigation = null;
	}

	init(ref) {
		if( this.navigation) return;
		this.navigation = ref
	}

	navigate(route) {
		this.navigation.dispatch(NavigationActions.navigate(route))
	}

	navigateToHome() {
		this.navigate({ routeName: screens.Home})
	}

	navigateToMain() {
		this.navigate({ routeName: screens.Main})
	}

	navigateToRagister() {
		this.navigate({ routeName: screens.Registration})
	}

	navigationToProfile() {
		this.navigate({ routeName: screens.Profile})
	}
}

export default new NavigationService()