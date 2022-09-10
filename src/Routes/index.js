import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import{ 
    Login,
    Dashboard,
    Forget,
    Otp,
    Resetpassword,
    Admin,
    Designer,
    Customer,
    placeOrder,
    Advertisement,
    category,
    viewprofile,
    DesingerDeatils,
    ProductView,
    viewCollection,
    ColourView,
    SizeView,
    Orderlistviwe,
    Orderdetail,
    TransactionView,
    Designerorder,
    DesignerorderDetails,
    DesignerTransaction,
    EditDesigner,
    CustomerEdit,
    AddCollection

 } from "../Screens"


const Routes = () =>{
    return(
        <Router>
            <Switch>
                <Route exact={true} path="/" component = {Login} />
                <Route exact={true} path="/login" component = {Login} />
                <Route exact={true} path="/forget" component = {Forget} />
                <Route exact={true} path="/otp" component = {Otp} />
                <Route exact={true} path="/resetpassword" component = {Resetpassword} />
                <Route exact={true} path="/dashboard" component = {Dashboard}/>
                <Route exact={true} path="/admin" component = {Admin}/>
                <Route exact={true} path="/designer" component = {Designer}/>
                <Route exact={true} path="/desingerDeatils" component = {DesingerDeatils}/>
                <Route exact={true} path="/customer" component = {Customer}/>
                <Route exact={true} path="/viewprofile" component = {viewprofile}/>
                <Route exact={true} path="/placeorder" component = {placeOrder}/>
                <Route exact={true} path="/advertisement" component = {Advertisement}/>
                <Route exact={true} path="/category" component = {category}/>
                <Route exact={true} path="/productView/:_id" component = {ProductView}/>
                <Route exact={true} path="/viewCollection/:_id" component = {viewCollection}/>
                <Route exact={true} path="/ColourView/:_id" component = {ColourView}/>
                <Route exact={true} path="/SizeView/:_id" component = {SizeView}/>
                <Route exact={true} path="/Orderlistviwe/:_id" component = {Orderlistviwe}/>
                <Route exact={true} path="/Orderdetail/:_id" component = {Orderdetail}/>
                <Route exact={true} path="/TransactionView/:_id" component = {TransactionView}/>
                <Route exact={true} path="/Designerorder/:_id" component = {Designerorder}/>
                <Route exact={true} path="/DesignerorderDetails/:_id" component = {DesignerorderDetails}/>
                <Route exact={true} path="/DesignerTransaction/:_id" component = {DesignerTransaction}/>
                <Route exact={true} path="/EditDesigner/:_id" component = {EditDesigner}/>
                <Route exact={true} path="/CustomerEdit/:_id" component = {CustomerEdit}/>
                <Route exact={true} path="/AddCollection/:_id" component = {AddCollection}/> 
            </Switch>
        </Router>
    )

}

export default Routes