const {GraphQLObjectType, GraphQLInt, GraphQLString ,GraphQLBoolean, GraphQLList, GraphQLSchema} = require("graphql")
const axios = require("axios")
// Launch Type

const LaunchType = new GraphQLObjectType({
    name:"Launch",
    fields: ()=>({
        flight_number:{type: GraphQLInt },
        mission_name: {type: GraphQLString },
        launch_year:{type: GraphQLString },
        launch_date_local:{type: GraphQLString},
        launch_success:{type: GraphQLBoolean },
        Rocket:{type: RocketType },
    })
})

// Rocket Type
const RocketType = new GraphQLObjectType({
    name:"Rocket",
    fields: ()=>({
        rocket_id:{type: GraphQLString },
        rocket_name: {type: GraphQLString },
        rocket_type:{type: GraphQLString },
    })  
})


// RootQuery
const RootQuery = new GraphQLObjectType({
     name:"RootQueryType",
     fields:{
        launches:{
            type: new GraphQLList(LaunchType),
            resolve(parent,args){
                return axios.get("https://api.spacexdata.com/v5/launches").then(res => res.data)
            },
            launch:{
                type:LaunchType,
                args:{
                    flight_number : {GraphQLInt}
                },
                resolve(parent,args){
                    return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
                    .then(res=>res.data)
                }
            },
            Rocket:{
                type:new GraphQLList(RocketType),
                args:{
                   
                },
                resolve(parent,args){
                    return axios.get(`https://api.spacexdata.com/v3/rockets`)
                    .then(res=>res.data)
                }
            },
            rocket:{
                type: RocketType,
                args:{
                    rocketid: {GraphQLInt}
                },
                resolve(parent,args){
                    return axios.get(`https://api.spacexdata.com/v3/${args.rocketid}`)
                    .then(res=>res.data)
                }
            }
        }
     }
})


module.exports = new GraphQLSchema({
    query:RootQuery

})