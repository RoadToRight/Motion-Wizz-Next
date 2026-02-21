"use client"
import React, { useState } from 'react'
import css from "../CSS/HomePage/FaqsWrapper.module.css"

const FaqsWrapper = ({ FaqsData }) => {

    const [faqsState, setfaqsState] = useState(FaqsData.map(() => false));


    const handleFaqs = (faqIndex) => {
        setfaqsState((prev, i) => {
            let updatedArr = [...prev];
            updatedArr[faqIndex] = !updatedArr[faqIndex];
            return updatedArr
        })
    }

    return (
        <>
            <div className={css.accordian_wrapper}>
                {FaqsData?.map(({ question, answer }, i) => {

                    return (
                        <div className={`${css.accordian} ${faqsState[i] ? 'active' : ''}`} key={question + i}>
                            <h4 className={css.ques} onClick={() => handleFaqs(i)}>
                                <span>{question}</span>
                                <div className={css.icon}>+</div>
                            </h4>
                            {faqsState[i] && <p className={css.ans}>{answer}</p>}
                        </div>
                    )

                })}

            </div>
        </>
    )
}

export default FaqsWrapper
