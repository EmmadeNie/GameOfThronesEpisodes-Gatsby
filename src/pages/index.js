import React from "react"
import Layout from "../Components/Layout";
import Home from "../Components/Home";
import {getAllEpisodes, getPrevEpisode} from "../utils/getDataFunctions";


const Index = ()=> {
 console.log(getAllEpisodes())
 return  <Layout><Home/></Layout>
}

export default Index