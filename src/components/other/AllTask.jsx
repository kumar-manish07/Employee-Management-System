import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

   const [userData,setUserData] =  useContext(AuthContext)

   
  return (
    <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl'>
        <div className='mb-6'>
            <h2 className='text-2xl font-bold text-white mb-2'>Team Task Overview</h2>
            <p className='text-gray-400'>Monitor task distribution across your team</p>
        </div>

        <div className='overflow-x-auto'>
            <table className='w-full'>
                <thead>
                    <tr className='border-b border-gray-700'>
                        <th className='text-left py-4 px-4 font-semibold text-gray-300'>Employee Name</th>
                        <th className='text-center py-4 px-4 font-semibold text-gray-300'>New Tasks</th>
                        <th className='text-center py-4 px-4 font-semibold text-gray-300'>Active Tasks</th>
                        <th className='text-center py-4 px-4 font-semibold text-gray-300'>Completed</th>
                        <th className='text-center py-4 px-4 font-semibold text-gray-300'>Failed</th>
                        <th className='text-center py-4 px-4 font-semibold text-gray-300'>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((elem, idx) => {
                        const total = elem.taskCounts.newTask + elem.taskCounts.active + elem.taskCounts.completed + elem.taskCounts.failed;
                        return (
                            <tr key={idx} className='border-b border-gray-800/50 hover:bg-white/5 transition-colors duration-200'>
                                <td className='py-4 px-4'>
                                    <div className='flex items-center space-x-3'>
                                        <div className='w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center'>
                                            <span className='text-white font-semibold text-sm'>
                                                {elem.firstName.charAt(0).toUpperCase()}
                                            </span>
                                        </div>
                                        <span className='font-medium text-white'>{elem.firstName}</span>
                                    </div>
                                </td>
                                <td className='text-center py-4 px-4'>
                                    <span className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30'>
                                        {elem.taskCounts.newTask}
                                    </span>
                                </td>
                                <td className='text-center py-4 px-4'>
                                    <span className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'>
                                        {elem.taskCounts.active}
                                    </span>
                                </td>
                                <td className='text-center py-4 px-4'>
                                    <span className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'>
                                        {elem.taskCounts.completed}
                                    </span>
                                </td>
                                <td className='text-center py-4 px-4'>
                                    <span className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-500/20 text-red-400 border border-red-500/30'>
                                        {elem.taskCounts.failed}
                                    </span>
                                </td>
                                <td className='text-center py-4 px-4'>
                                    <span className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-500/20 text-gray-300 border border-gray-500/30'>
                                        {total}
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>

        {/* Summary Stats */}
        <div className='mt-8 grid grid-cols-2 md:grid-cols-4 gap-4'>
            <div className='bg-blue-500/10 border border-blue-500/20 rounded-xl p-4'>
                <div className='text-2xl font-bold text-blue-400'>
                    {userData.reduce((sum, elem) => sum + elem.taskCounts.newTask, 0)}
                </div>
                <div className='text-sm text-gray-400'>Total New Tasks</div>
            </div>
            <div className='bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4'>
                <div className='text-2xl font-bold text-yellow-400'>
                    {userData.reduce((sum, elem) => sum + elem.taskCounts.active, 0)}
                </div>
                <div className='text-sm text-gray-400'>Total Active Tasks</div>
            </div>
            <div className='bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4'>
                <div className='text-2xl font-bold text-emerald-400'>
                    {userData.reduce((sum, elem) => sum + elem.taskCounts.completed, 0)}
                </div>
                <div className='text-sm text-gray-400'>Total Completed</div>
            </div>
            <div className='bg-red-500/10 border border-red-500/20 rounded-xl p-4'>
                <div className='text-2xl font-bold text-red-400'>
                    {userData.reduce((sum, elem) => sum + elem.taskCounts.failed, 0)}
                </div>
                <div className='text-sm text-gray-400'>Total Failed</div>
            </div>
        </div>
    </div>
  )
}

export default AllTask