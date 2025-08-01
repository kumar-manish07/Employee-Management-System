import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 w-[320px] bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105'>
        <div className='flex justify-between items-start mb-4'>
            <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'>
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
                <div className='w-2 h-2 bg-emerald-400 rounded-full'></div>
                <span className='text-xs text-emerald-400 font-medium'>Completed</span>
            </div>
            
            <div className='flex items-center space-x-1'>
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className='text-xs text-emerald-400 font-medium'>Success</span>
            </div>
        </div>
    </div>
  )
}

export default CompleteTask