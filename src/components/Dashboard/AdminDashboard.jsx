import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6'>
            <div className='max-w-7xl mx-auto space-y-8'>
                <Header changeUser={props.changeUser} />
                <CreateTask />
                <AllTask />
            </div>
        </div>
    )
}

export default AdminDashboard