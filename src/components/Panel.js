import React, { useState } from 'react'

const Panel = ({ items }) => {
    const [ activeIndex, setActiveIndex ] = useState(null)  // activeIndex: piece of state, setActiveIndex: function|setter| to change state, usestate(): initial value for piece of state

    const onQuestionClick = (index) => {
        setActiveIndex(index)
    }

    // render items as a list using map
    const renderedItems = items.map((item, index) => {

        const active = index === activeIndex ? 'active' : ''; // compare current index we are iterating over & compare to activeIndex 

        return (
            //every element inside of a list of jsx needs to have a key property. used 'question' of each item because its unique and consistent react.fragment matter of styling div was in place
            <React.Fragment key={ item.question }>
                <div 
                    className= {`title ${active}`}             // active classnames {semantic ui} control which element will be expanded
                    onClick= { () => onQuestionClick(index)} // wrapped onQuestionClick with arrow function so that we can pass to it index and prevent it being called when page re-renders
                >
                <i className="dropdown icon"></i>
                { item.question}
                </div>
                <div className= {`content ${active}`}>
                    <p>{ item.answer }</p>
                </div>
            </React.Fragment>
    )
    })

    return (
        <div className="ui styled accordion">
            { renderedItems }
        </div>
    )


}

export default Panel
