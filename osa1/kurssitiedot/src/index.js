import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = 'Half Stack application development'
    /*
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    */
    //const num = [1,2,3];
    //const numParts = num.map(n => '{'+n+'}');

    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }
// sfdsfd
    return (
        <div>
            <Header course={course} /> 
            <Content part1={part1} part2={part2} part3={part3}/>
            <Total part1={part1} part2={part2} part3={part3}/>
            
        </div>
        
    )

}

const Header = (props) => {
    return(
        <div>
            <h1>
                {props.course}
            </h1>
        </div>
    )
}

const Content = (props) => {    
    return(
        <div>
            <p>
                {props.part1.name} {props.part1.exercises}
            </p>
            <p>
                {props.part2.name} {props.part2.exercises}
            </p>
            <p>
                {props.part3.name} {props.part3.exercises}
            </p>

        </div>
    )
}

const Total = (props) => {
    //const part1Name={props.part1.name}
    return(
        <div>
            <p>
                Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}
                
            </p>
        </div>        
    )
}
/*
const Part = (props) => {
    return(
        <div>
            <p>
                {props.part1.name} {props.part1.exercises}
            </p>
            <p>
                {props.part2.name} {props.part2.exercises}
            </p>
            <p>
                {props.part3.name} {props.part3.exercises}
            </p>
        </div>
    )
}
*/

/*
            <Content
                
                part1={part1} part2={part2} part3={part3}
                exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}
            />


            <Part part1={props.part1}/>
            <Part part2={props.part2}/>
            <Part part3={props.part3}/>
*/
ReactDOM.render(<App />, document.getElementById('root'))