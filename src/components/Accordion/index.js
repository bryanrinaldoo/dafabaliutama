import React, { useState } from 'react'
import { AccordionContainer, AccordionH1, AccordionContent, AccordionWrap, MinusIcon, PlusIcon, Dropdown } from './AccordionElements'
import { Data } from './Data'

const Accordion = () => {
  const [open, setOpen] = useState(false)

  const toogle = index =>{
    if(open === index){
      return setOpen(null)
    }
    setOpen(index)
  }
  return (
    <>
      <AccordionContainer id='faq'>
        <AccordionH1>FAQ</AccordionH1>
          <AccordionContent>
            {Data.map((item, index) => {
              return(
                <>
                  <AccordionWrap onClick={()=> toogle(index)} >
                    <h1>{item.question}</h1>
                    <span>{open === index ? <MinusIcon /> : <PlusIcon />}</span>
                  </AccordionWrap>
                  {open === index ? (
                    <Dropdown>
                      <p>{item.answer}</p>
                    </Dropdown>
                  ) : null}
                </>
              )
            })}
          </AccordionContent>
      </AccordionContainer>
    </>
  )
}

export default Accordion