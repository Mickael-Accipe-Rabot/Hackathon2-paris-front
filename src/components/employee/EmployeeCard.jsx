import React from 'react'

const EmployeeCard = ({employee}) => {
  return (
    <div className='EmployeeCard'>
<h1>{employee.firstName}</h1>
<h1>{employee.lastName}</h1>
    </div>
  )
}

export default EmployeeCard