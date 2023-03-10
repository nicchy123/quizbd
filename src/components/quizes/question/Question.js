import React from 'react';
import { } from 'react-router-dom'
import { Result } from '../../result/Result';

const Question = ({ quesion }) => {
    return (

        <div>
            <div className='lg:px-80 px-2'>

                <div className='shadow-lg lg:p-10 p-2 rounded py-10 mb-5 bg-white'>
                    <ol className='text-xl text-slate-600 text-center font-semibold pt-5 flex'>
                        Quiz: <li className='text-start mb-2'>{quesion.question}</li>
                    </ol>
                    <ol className='grid grid-cols-2'>
                        {quesion.options.map(option =>
                            <div key={option}  className='lg:p-5 p-1 border-2 lg:m-2 m-1  hover:bg-gray-100  rounded'>
                                <label  className="inline-flex items-center ">
                                    <input onClick={() => Result(quesion, option)} type="radio" className="form-radio cursor-pointer" name="accountType" value="personal" />
                                    <span className="lg:ml-2 ml-1 text-sm cursor-pointer">{option}</span>
                                </label>
                            </div>)}
                    </ol>
                </div>
            </div >

        </div>



    );
};

export default Question;