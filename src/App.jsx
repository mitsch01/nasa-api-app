import { useState, useEffect, useCallback } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardFooter, CardTitleH1, CardTitleH2, CardContent, CardDescription } from "@/components/ui/card"
import { DatePicker } from "@/components/DatePicker"

function App() {
  const [apodData, setApodData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedDate, setSelectedDate] = useState(new Date()) // Default to today

  const fetchAPOD = useCallback(async date => {
    if (!date) return // Do nothing if no date

    const formattedDate = date.toISOString().split("T")[0] // Format date as YYYY-MM-DD
    try {
      const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=d344Xrq5ruqdXdeNSazTeV7TwxETB7aM170QYYAO&date=${formattedDate}`)
      setApodData(response.data)
      setLoading(false)
    } catch (error) {
      setError("Error Fetching Data from NASA API")
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    setLoading(true) // Ensure loading state is set
    fetchAPOD(selectedDate)
  }, [selectedDate, fetchAPOD])

  const handleDateChange = date => {
    if (date && (!selectedDate || date.getTime() !== selectedDate.getTime())) {
      setSelectedDate(date)
    }
  }

  if (loading) return <div className='text-white'>Loading...</div>
  if (error) return <div className='text-white'>{error}</div>

  return (
    <div className='flex justify-center items-center min-h-screen bg-black'>
      {/* Card Container */}
      <Card className='w-full max-w-lg bg-white shadow-lg rounded-lg'>
        {/* Card Header */}
        <CardHeader>
          <CardTitleH1>NASA Astronomy Picture of the Day</CardTitleH1>
          {/* <CardDescription>{apodData?.date}</CardDescription> */}
        </CardHeader>

        {/* Card Content */}
        {apodData && (
          <CardContent>
            <CardTitleH2>{apodData.title}</CardTitleH2>
            <img src={apodData.url} alt={apodData.title} className=' mb-4 w-full h-auto' />
            <p>{apodData.explanation}</p>
          </CardContent>
        )}

        {/* Card Footer */}
        <CardFooter >
          <p className='font-bold mb-2 '>Pick any date in the past: </p>
          <DatePicker onDateChange={handleDateChange} />
        </CardFooter>
      </Card>
    </div>
  )
}

export default App
