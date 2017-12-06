import {
	REQUEST_CATEGORIES,
	RECEIVE_CATEGORIES, SELECT_CATEGORY,
} from './CategoryAction';

export function selectedCategory(state = 'react', action) {
	switch (action.type) {
		case SELECT_CATEGORY:
			return action.subreddit;
		default:
			return state
	}
}

export function allCategories(state = {}, action){
	switch (action.type) {
		case REQUEST_CATEGORIES:
		case RECEIVE_CATEGORIES:
			return Object.assign({}, state, categories(state, action)
			);
		default:
			return state;
	}
}

function categories(state = {didInvalidate: false, items: []}, action) {
	switch (action.type) {
		case REQUEST_CATEGORIES:
			return Object.assign({}, state, {
				didInvalidate: false
			});
		case RECEIVE_CATEGORIES:
			return Object.assign({}, state, {
				didInvalidate: false,
				items: action.categories.categories
			});
		default:
			return state;
	}
}