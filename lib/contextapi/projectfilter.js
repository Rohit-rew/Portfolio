import React from "react"

const ProjectContext = React.createContext()

const {Provider} = ProjectContext;

export default function ProjectFilterContext(props) {

    const [filter , setFilter] = React.useState("all")


    console.log(filter);
    function clickhandler(filtervalue){
        setFilter(filtervalue.toLowerCase())
    }

  return (
    <Provider value={{clickhandler , filter}}>
        {props.children}
    </Provider>
  )
}

export {ProjectFilterContext , ProjectContext}
