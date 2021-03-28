import React from "react"
import Layout from "../Components/Layout";
import Home from "../Components/Home";
import {getGameOfThronesData} from "../utils/getDataFunctions";


const Index = ()=> {
 getGameOfThronesData()

 return  <Layout><Home/></Layout>
}

export default Index