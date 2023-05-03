import React from "react";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js'

ChartJS.register(LineElement,
    CategoryScale,
    LinearScale,
    PointElement);

export const BirdGraph = () => {

    const { birdId } = useParams()
    const [weights, setWeights] = useState([]) //initial state
    const [filteredWeights, setFilteredWeights] = useState([])

    const label = filteredWeights.map((weight) => weight.date) //represent labels on xaxis

    const weightData = filteredWeights.map((weight) => weight.weight) //represent data on yaxis

    const data = { //will be called in line graph element in JSX
        labels: label,
        datasets: [
            {
                label: "Weights over time",
                data: weightData,
                borderColor: "black",
                borderWidth: 1,
                pointBorderColor: "red",
                tension: 0.4
            }
        ]
    } 


    const getAllWeights = () => {
        fetch(`http://localhost:8088/weights?_sort=date`)
            .then(response => response.json())
            .then((weightData) => {
                setWeights(weightData) //establish request
            })
    }

    useEffect(
        () => {
            getAllWeights() // establish state
        },
        []
    )

    //Filter weights down to param of birdId

    const getOneBirdsWeights = () => {
        fetch(`http://localhost:8088/weights/?_sort=date&birdId=${birdId}`)
            .then(response => response.json())
            .then((singleBirdData) => {
                setFilteredWeights(singleBirdData)
            })
    }

    useEffect(
        () => {
            getOneBirdsWeights()
        },
        [weights]
    )

    return <div className="chart-container"> 
        <Line
            data={data}
            options={{
                plugins: {
                    title: {
                        display: true,
                        text: "Weight Trends"
                    },
                    legend: {
                        display: true
                    },
                    scales: {
                        y:{
                            min: 50,
                            max: 200
                        }
                    }
                }
            }}/>
    </div>
}