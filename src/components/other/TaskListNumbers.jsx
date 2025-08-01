import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
        <div className='bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 backdrop-blur-lg'>
            <div className='flex items-center justify-between mb-4'>
                <div className='w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center'>
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </div>
                <span className='text-3xl font-bold text-blue-400'>{data.taskCounts.newTask}</span>
            </div>
            <h3 className='text-lg font-semibold text-white mb-1'>New Tasks</h3>
            <p className='text-sm text-gray-400'>Awaiting your attention</p>
        </div>

        <div className='bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 backdrop-blur-lg'>
            <div className='flex items-center justify-between mb-4'>
                <div className='w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center'>
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <span className='text-3xl font-bold text-emerald-400'>{data.taskCounts.completed}</span>
            </div>
            <h3 className='text-lg font-semibold text-white mb-1'>Completed</h3>
            <p className='text-sm text-gray-400'>Successfully finished</p>
        </div>

        <div className='bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6 backdrop-blur-lg'>
            <div className='flex items-center justify-between mb-4'>
                <div className='w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center'>
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <span className='text-3xl font-bold text-yellow-400'>{data.taskCounts.active}</span>
            </div>
            <h3 className='text-lg font-semibold text-white mb-1'>Active Tasks</h3>
            <p className='text-sm text-gray-400'>Currently in progress</p>
        </div>

        <div className='bg-red-500/10 border border-red-500/20 rounded-2xl p-6 backdrop-blur-lg'>
            <div className='flex items-center justify-between mb-4'>
                <div className='w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center'>
                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <span className='text-3xl font-bold text-red-400'>{data.taskCounts.failed}</span>
            </div>
            <h3 className='text-lg font-semibold text-white mb-1'>Failed Tasks</h3>
            <p className='text-sm text-gray-400'>Need attention</p>
        </div>
    </div>
  )
}

export default TaskListNumbers