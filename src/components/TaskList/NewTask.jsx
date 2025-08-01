import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const NewTask = ({data, employeeData}) => {
    const [userData, setUserData] = useContext(AuthContext)

    const handleAcceptTask = () => {
        console.log('Accept task clicked for:', data)
        
        // Find the employee who owns this task
        const updatedUserData = userData.map(employee => {
            if (employee.id === employeeData.id) {
                console.log('Found employee:', employee.firstName)
                const updatedTasks = employee.tasks.map(task => {
                    if (task.id === data.id) {
                        console.log('Updating task:', task.taskTitle)
                        return { 
                            ...task, 
                            newTask: false, 
                            active: true 
                        }
                    }
                    return task
                })
                
                return {
                    ...employee,
                    tasks: updatedTasks,
                    taskCounts: {
                        ...employee.taskCounts,
                        newTask: employee.taskCounts.newTask - 1,
                        active: employee.taskCounts.active + 1
                    }
                }
            }
            return employee
        })

        console.log('Updated userData:', updatedUserData)

        // Update state and localStorage
        setUserData(updatedUserData)
        localStorage.setItem('employees', JSON.stringify(updatedUserData))
        
        // Force a page refresh to see the changes
        window.location.reload()
    }

    return (
        <div className='flex-shrink-0 w-[320px] bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105'>
            <div className='flex justify-between items-start mb-4'>
                <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30'>
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
                    <div className='w-2 h-2 bg-blue-400 rounded-full animate-pulse'></div>
                    <span className='text-xs text-blue-400 font-medium'>New Task</span>
                </div>
                
                <button 
                    onClick={handleAcceptTask}
                    className='bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium py-2 px-4 rounded-xl hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 transform hover:scale-105 text-sm flex items-center space-x-2'
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Accept Task</span>
                </button>
            </div>
        </div>
    )
}

export default NewTask