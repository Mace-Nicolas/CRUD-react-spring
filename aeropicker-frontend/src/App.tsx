import React, { useEffect, useState } from "react"
import "./App.css"
import AddSection from "./components/AddSection"
import AircraftInfo from "./components/AircraftInfo"
import Button from "./components/Button"
import Selector from "./components/Selector"
import { fromDataToSelectOptions } from "./utils"

const App = () => {
  const [addSectionIsOpen, setAddSectionIsOpen] = useState(false)
  const [aircraftName, setAircraftName] = useState("")
  const [aircraftOptions, setAircraftOptions] = useState<any>([])
  const [aircrafts, setAircrafts] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [aircraftToUpdate, setAircraftToUpdate] = useState({
    id: '', 
    brand: '', 
    model: '',
    imgUrl: ''
  })

  useEffect(() => {
    if (aircraftOptions.length > 0) {
      setAircraftName(aircraftOptions[0])
    }
  }, [aircraftOptions])

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      await fetchAllAircrafts()
      setIsLoading(false)
    })()
  }, [])

  const fetchAllAircrafts = async () => {
    const response = await fetch("http://localhost:8080/aircraft/getAll", {
      method: "GET"
    })
    const data = await response.json()
    setAircraftOptions(fromDataToSelectOptions(data))
    setAircrafts(data)
  }

  if (isLoading) {
    return (
      <div className="App" style={{ color: "white", fontSize: 48 }}>
        Loading....
      </div>
    )
  }

  return (
    <div className="App">
      <div style={{ marginTop: 100 }}>
        {!addSectionIsOpen && (
          <>
            <Selector
              value={aircraftName}
              onChange={(e: any) => setAircraftName(e.target.value)}
              options={aircraftOptions}
            />
            <Button onClick={() =>{
               setEditMode(false)
               setAddSectionIsOpen(true)
            }} text={"+"} />
          </>
        )}
        {addSectionIsOpen && <AddSection onClose={() => setAddSectionIsOpen(false)} editMode={editMode} dataToUpdate={aircraftToUpdate}/>}
      </div>

      {!addSectionIsOpen && (
        <div style={{ marginTop: 100 }}>
          <AircraftInfo allAircrafts={aircrafts} aircraftName={aircraftName} setEditMode={() => {
            setEditMode(true)
            setAddSectionIsOpen(true)
          }}
          setAircraftToUpdate={setAircraftToUpdate}
          />
        </div>
      )}
    </div>
  )
}

export default App
