import { combineReducers } from 'redux';
import auth from './auth';
import modals from './modals';
import loader from "./loader";
import customer from './customer';
import designer from './designer';
import advertisement from './advertisement';
import category from './category';
import product from './product';
import collection from './collection';
import orderlist from './orderlist';
import transaction from './transaction';
import dashboard from './dashboard';

const appReducer = combineReducers({
        auth,
        modals,
        loader,
        customer,
        designer,
        advertisement,
        category,
        product,
        collection,
        orderlist,
        transaction,
        dashboard
});

const rootReducer = (state, action) => {
    return appReducer(state, action)
  }
  
  export default rootReducer;