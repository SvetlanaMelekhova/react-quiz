import React from "react";
import './FinishedQuiz.scss'
import Button from "../UI/Button/Button";
import {Link} from "react-router-dom";

const FinishedQuiz = props => {

    const successCount = Object.keys(props.results).reduce((total, key) => {
        console.log("successCount total " + total)
        if (props.results[key] === 'success') {
            total++
        }
        return total
    }, 0)

    return (<div className="FinishedQuiz">
        <ul>
            {
                props.quiz.map((quizItem, index) => {
                    console.log("FinishedQuiz" + props.results[quizItem.id])
                    const cls = [
                        "fa",
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        props.results[quizItem.id]
                    ]

                    return (
                        <li key={index}>
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')}/>
                        </li>
                    )
                })
            }
        </ul>

        <p>Right answers {successCount} from {props.quiz.length}</p>

        <div>
            <Button onClick={props.onRetry} type="primary">Repeat</Button>
            <Link to='/' >
                <Button onClick={props.onRetry} type="success">Go to the test list</Button>
            </Link>
        </div>
    </div>)
}

export default FinishedQuiz