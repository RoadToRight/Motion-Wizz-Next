"use client"
import React, { useState } from 'react'

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
            <div className="accordian_wrapper">
                {FaqsData?.map(({ question, answer }, i) => {

                    return (
                        <div className={`accordian ${faqsState[i] ? 'active' : ''}`} key={question + i}>
                            <h4 className='ques' onClick={() => handleFaqs(i)}>
                                <span>{question}</span>
                                <div className='icon'>+</div>
                            </h4>
                            {faqsState[i] && <p className='ans'>{answer}</p>}
                        </div>
                    )

                })}

            </div>
        </>
    )
}

export default FaqsWrapper
