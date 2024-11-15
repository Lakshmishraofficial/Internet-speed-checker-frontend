import React from 'react'
import styled from 'styled-components'
import { useTestResult } from '../../../contexts/testResultContext'
import ResultCard from './ResultCard'

const StyledResultsCardsContainer = styled.div`
    background-color:white;
    display: flex;
    flex-direction: column;
    gap: 3vh;
    justify-content: center;
`;

const resultsCardsDetails =
{
    downloadSpeed: { icon: 'cloud_download', text: 'Download', unit: 'mbps' },
    uploadSpeed: { icon: 'cloud_upload', text: 'Upload', unit: 'mbps' },
    latency: { icon: 'monitor_heart', text: 'Latency', unit: 's' },
}

export default function ResultsCardsContainer() 
{
    const { testResult } = useTestResult()

    return (
        <StyledResultsCardsContainer>
            { Object.keys( resultsCardsDetails ).map( ( cardKey ) =>{

                const currentCard = resultsCardsDetails[ cardKey ]
                return <ResultCard key={ cardKey } dataKey={ cardKey } icon={ currentCard.icon } text={ currentCard.text } unit={ currentCard.unit }  data={ testResult[ cardKey ] }/>
            }) }
        </StyledResultsCardsContainer>
    )
}
