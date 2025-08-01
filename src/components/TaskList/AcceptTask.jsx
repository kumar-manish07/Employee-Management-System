import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AcceptTask = ({data, employeeData}) => {
    const [userData, setUserData] = useContext(AuthContext)

    const handleCompleteTask = () => {
        console.log('Complete task clicked for:', data)
        console.log('Employee data:', employeeData)
        
        // Find the employee who owns this task
        const updatedUserData = userData.map(employee => {
            if (employee.id === employeeData.id) {
                console.log('Found employee:', employee.firstName)
                const updatedTasks = employee.tasks.map(task => {
                    if (task.id === data.id) {
                        console.log('Completing task:', task.taskTitle)
                        return { 
                            ...task, 
                            active: false, 
                            completed: true 
                        }
                    }
                    return task
                })
                
                const updatedEmployee = {
                    ...employee,
                    tasks: updatedTasks,
                    taskCounts: {
                        ...employee.taskCounts,
                        active: employee.taskCounts.active - 1,
                        completed: employee.taskCounts.completed + 1
                    }
                }
                
                console.log('Updated employee:', updatedEmployee)
                return updatedEmployee
            }
            return employee
        })

        console.log('Updated userData:', updatedUserData)

        // Update state and localStorage
        setUserData(updatedUserData)
        localStorage.setItem('employees', JSON.stringify(updatedUserData))
        
        // Force a re-render by updating the context
        setTimeout(() => {
            window.location.reload()
        }, 500)
    }

    const handleFailTask = () => {
        console.log('Fail task clicked for:', data)
        console.log('Employee data:', employeeData)
        
        // Find the employee who owns this task
        const updatedUserData = userData.map(employee => {
            if (employee.id === employeeData.id) {
                console.log('Found employee:', employee.firstName)
                const updatedTasks = employee.tasks.map(task => {
                    if (task.id === data.id) {
                        console.log('Failing task:', task.taskTitle)
                        return { 
                            ...task, 
                            active: false, 
                            failed: true 
                        }
                    }
                    return task
                })
                
                const updatedEmployee = {
                    ...employee,
                    tasks: updatedTasks,
                    taskCounts: {
                        ...employee.taskCounts,
                        active: employee.taskCounts.active - 1,
                        failed: employee.taskCounts.failed + 1
                    }
                }
                
                console.log('Updated employee:', updatedEmployee)
                return updatedEmployee
            }
            return employee
        })

        console.log('Updated userData:', updatedUserData)

        // Update state and localStorage
        setUserData(updatedUserData)
        localStorage.setItem('employees', JSON.stringify(updatedUserData))
        
        // Force a re-render by updating the context
        setTimeout(() => {
            window.location.reload()
        }, 500)
    }

    return (
        <div className='flex-shrink-0 w-[320px] bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105'>
            <div className='flex justify-between items-start mb-4'>
                <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'>
                    {data.category}
                </span>
                <span className='text-xs text-gray-400 font-medium'>
                    {new Date(data.taskDate).toLocaleDateString()}
                </span>
            </div>
            
            <h3 className='text-xl font-bold text-white mb-3 line-clamp-2'>{data.taskTitle}</h3>
            
            <p className='text-sm text-gray-300 mb-6 line-clamp-3 leading-relaxed'>
                {data.taskDescription}
            </p>
            
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-2'>
                    <div className='w-2 h-2 bg-yellow-400 rounded-full animate-pulse'></div>
                    <span className='text-xs text-yellow-400 font-medium'>In Progress</span>
                </div>
            </div>
            
            <div className='flex space-x-3 mt-4'>
                <button 
                    onClick={handleCompleteTask}
                    className='flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-medium py-2 px-4 rounded-xl hover:from-emerald-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 transform hover:scale-105 text-sm flex items-center justify-center space-x-2'
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Complete</span>
                </button>
                
                <button 
                    onClick={handleFailTask}
                    className='flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium py-2 px-4 rounded-xl hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 transform hover:scale-105 text-sm flex items-center justify-center space-x-2'
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Failed</span>
                </button>
            </div>
        </div>
    )
}

export default AcceptTask