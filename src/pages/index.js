import React from "react"
import Layout from "../Components/Layout";
import Home from "../Components/Home";
import {getGameOfThronesData} from "../utils/getDataFunctions";
const {add3} = require("../utils/getData");


const Index = ()=> {
 getGameOfThronesData()
 console.log(add3(345))

 return  <Layout><Home/></Layout>
}

export default Index