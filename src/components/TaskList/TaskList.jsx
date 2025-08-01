import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    return (
        <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl'>
            <div className='mb-6'>
                <h2 className='text-2xl font-bold text-white mb-2'>Your Tasks</h2>
                <p className='text-gray-400'>Manage and track your assigned tasks</p>
            </div>
            
            <div className='overflow-x-auto'>
                <div className='flex space-x-6 pb-4 min-w-max'>
                    {data.tasks.map((elem, idx) => {
                        if (elem.active) {
                            return <AcceptTask key={idx} data={elem} />
                        }
                        if (elem.newTask) {
                            return <NewTask key={idx} data={elem} />
                        }
                        if (elem.completed) {
                            return <CompleteTask key={idx} data={elem} />
                        }
                        if (elem.failed) {
                            return <FailedTask key={idx} data={elem} />
                        }
                        return null;
                    })}
                </div>
            </div>
            
            {data.tasks.length === 0 && (
                <div className='text-center py-12'>
                    <div className='w-16 h-16 bg-gray-500/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                    </div>
                    <h3 className='text-lg font-medium text-gray-300 mb-2'>No tasks assigned</h3>
                    <p className='text-gray-400'>You don't have any tasks at the moment.</p>
                </div>
            )}
        </div>
    )
}

export default TaskList