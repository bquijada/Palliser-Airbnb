import React, { useState, useEffect } from 'react'
import apiClient from '../services/api-client'
import { UnorderedList } from '@chakra-ui/react';

interface Activity {
    name: string;
    id: number;
}

interface FetchActivityResponse{
    activities: Activity[]
}

const ActivityGrid = () => {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        apiClient.get<FetchActivityResponse>('/activity')
        .then(res => setActivities(res.data.activities))
    })
    return (
        <ul>{activities.map(activity => <li key={activity.id}>{activity.name}</li>)}
        </ul>
    )
}

export default ActivityGrid