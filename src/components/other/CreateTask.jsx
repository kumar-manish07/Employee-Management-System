import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [message, setMessage] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setMessage('')

        // Create the new task object
        const newTask = {
            id: Date.now(), // Generate unique ID
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false,
            createdAt: new Date().toISOString(),
            assignedBy: 'Admin'
        }

        // Find the employee and assign the task
        const updatedUserData = userData.map(employee => {
            if (employee.firstName.toLowerCase() === asignTo.toLowerCase()) {
                return {
                    ...employee,
                    tasks: [...employee.tasks, newTask],
                    taskCounts: {
                        ...employee.taskCounts,
                        newTask: employee.taskCounts.newTask + 1
                    }
                }
            }
            return employee
        })

        // Check if employee was found
        const employeeFound = updatedUserData.some(emp => 
            emp.firstName.toLowerCase() === asignTo.toLowerCase()
        )

        if (!employeeFound) {
            setMessage('Employee not found! Please check the employee name.')
            setIsSubmitting(false)
            return
        }

        // Update the state
        setUserData(updatedUserData)

        // Save to localStorage
        localStorage.setItem('employees', JSON.stringify(updatedUserData))

        // Show success message
        setMessage('Task created successfully!')

        // Reset form
        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')
        
        // Hide success message after 3 seconds
        setTimeout(() => {
            setMessage('')
            setIsSubmitting(false)
        }, 3000)
    }

    return (
        <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl'>
            <div className='mb-6'>
                <h2 className='text-2xl font-bold text-white mb-2'>Create New Task</h2>
                <p className='text-gray-400'>Assign tasks to your team members</p>
            </div>

            {/* Success/Error Message */}
            {message && (
                <div className={`mb-6 p-4 rounded-xl ${
                    message.includes('successfully') 
                        ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400' 
                        : 'bg-red-500/20 border border-red-500/30 text-red-400'
                }`}>
                    {message}
                </div>
            )}
            
            <form onSubmit={submitHandler} className='space-y-6'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    {/* Left Column */}
                    <div className='space-y-6'>
                        <div>
                            <label className='block text-sm font-medium text-gray-300 mb-2'>Task Title</label>
                            <input
                                value={taskTitle}
                                onChange={(e) => setTaskTitle(e.target.value)}
                                required
                                className='w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200' 
                                type="text" 
                                placeholder='Enter task title'
                            />
                        </div>
                        
                        <div>
                            <label className='block text-sm font-medium text-gray-300 mb-2'>Due Date</label>
                            <input
                                value={taskDate}
                                onChange={(e) => setTaskDate(e.target.value)}
                                required
                                className='w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200' 
                                type="date" 
                            />
                        </div>
                        
                        <div>
                            <label className='block text-sm font-medium text-gray-300 mb-2'>Assign To</label>
                            <select
                                value={asignTo}
                                onChange={(e) => setAsignTo(e.target.value)}
                                required
                                className='w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200'
                            >
                                <option value="">Select employee</option>
                                {userData && userData.map((employee, index) => (
                                    <option key={index} value={employee.firstName}>
                                        {employee.firstName} ({employee.email})
                                    </option>
                                ))}
                            </select>
                        </div>
                        
                        <div>
                            <label className='block text-sm font-medium text-gray-300 mb-2'>Category</label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                                className='w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200'
                            >
                                <option value="">Select category</option>
                                <option value="design">Design</option>
                                <option value="development">Development</option>
                                <option value="marketing">Marketing</option>
                                <option value="content">Content</option>
                                <option value="testing">Testing</option>
                                <option value="meeting">Meeting</option>
                                <option value="documentation">Documentation</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className='space-y-6'>
                        <div>
                            <label className='block text-sm font-medium text-gray-300 mb-2'>Description</label>
                            <textarea 
                                value={taskDescription}
                                onChange={(e) => setTaskDescription(e.target.value)}
                                required
                                rows={8}
                                className='w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none' 
                                placeholder='Describe the task details...'
                            />
                        </div>
                        
                        <button 
                            disabled={isSubmitting}
                            className='w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold py-4 px-6 rounded-xl hover:from-emerald-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2'
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Creating Task...</span>
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    <span>Create Task</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateTask