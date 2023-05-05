import React, { useState } from 'react'
import './calculator.scss'

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0')

  return (
    <div className='calculator__container'>
        <div className="calculator__block">
                <div className="row">
                    <input className='input__displayValue' type="text" value={
                        '0'
                    } />
                </div>

                <div className="row">
                    <input className='input__value' type="button" value='AC' />
                    <input className='input__value' type="button" value='DE' />
                    <input className='input__value' type="button" value='.' />
                    <input className='input__value' type="button" value='/' />
                </div>

                <div className="row">
                    <input className='input__value' type="button" value='7' />
                    <input className='input__value' type="button" value='8' />
                    <input className='input__value' type="button" value='9' />
                    <input className='input__value' type="button" value='x' />
                </div>

                <div className="row">
                    <input className='input__value' type="button" value='4' />
                    <input className='input__value' type="button" value='5' />
                    <input className='input__value' type="button" value='6' />
                    <input className='input__value' type="button" value='-' />
                </div>

                <div className="row">
                    <input className='input__value' type="button" value='1' />
                    <input className='input__value' type="button" value='2' />
                    <input className='input__value' type="button" value='3' />
                    <input className='input__value' type="button" value='+' />
                </div>

                <div className="row">
                    <input className='input__value' type="button" value='0' />
                    <input className='input__value' type="button" value='00' />
                    <input className='input__value' type="button" value='=' />
                    <input className='input__value' type="button" value='=' />
                </div>
        </div>
    </div>
  )
}

export default Calculator