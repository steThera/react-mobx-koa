import { observable, action, computed,autorun } from 'mobx';

class CategoryStore {
	@observable categories = [];
	@observable isLoading = false;
	@observable failure;
	
	constructor() {
	}

	@action setCategories = (categories) => {
		this.categories = categories;
	}	
	@action setIsLoading = (isLoading) => {
		this.isLoading = isLoading;
	}	
	@action setFailure = (failure) => {
		this.failure = failure;
	}


};

const categoryStore = new CategoryStore();
export default categoryStore;
export { CategoryStore };