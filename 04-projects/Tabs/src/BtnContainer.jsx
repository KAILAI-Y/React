import React from 'react'

const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-contianer">
      {jobs.map((item, index) => {
        return (
          <button
            key={item.id}
            onClick={() => setCurrentItem()}
            className={index === currentItem ? 'job-btn active-btn' : 'job-btn'}
          >
            {item.company}
          </button>
        )
      })}
    </div>
  )
}

export default BtnContainer
