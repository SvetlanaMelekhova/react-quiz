import './QuizList.scss'
import {NavLink} from "react-router-dom";

function renderQuizzes() {
    return [1,2,3].map((quiz, index) => {
        return (
            <li key={index}>
                <NavLink to={'/quiz/'+ quiz}>
                    Test {quiz}
                </NavLink>
            </li>
        )
    })
}

const QuizList = () => {

    return (<div className="QuizList">
        <div>
            <h1>Quiz List</h1>
            <ul>
                {renderQuizzes()}
            </ul>
        </div>
    </div>)
}


export default QuizList