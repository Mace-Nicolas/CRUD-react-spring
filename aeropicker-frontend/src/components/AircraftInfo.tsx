import React from "react"
import { decomposeAircraftName } from "../utils"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import EditIcon from "@mui/icons-material/Edit"
import { Button } from "@mui/material"

type AircraftInfoProps = {
  aircraftName: string
  allAircrafts: { id: number; brand: string; model: string; imgUrl: string }[]
  setEditMode: any
  setAircraftToUpdate:any;
}

const AircraftInfo = ({ aircraftName, allAircrafts, setEditMode, setAircraftToUpdate }: AircraftInfoProps) => {
  const { brand, model } = decomposeAircraftName(aircraftName)
  const aircraft = allAircrafts.find(aircraft => aircraft.brand === brand && aircraft.model === model)

  const handleOnDelete = async () => {
    await fetch(`http://localhost:8080/aircraft/${aircraft?.id}`, {
      method: "DELETE"
    })
    window.location.reload()
  }

  return (
    <div
      style={{
        backgroundColor: "#111",
        boxShadow: "1px 1px 15px #080808",
        color: "white",
        borderRadius: 10,
        height: 350,
        width: 400,
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <h1>
        {aircraft?.brand} {aircraft?.model}
      </h1>

      {aircraft?.imgUrl ? (
        <img style={{ borderRadius: 10 }} width="80%" src={aircraft?.imgUrl} alt="aircraft" />
      ) : (
        <div style={{ backgroundColor: "white", width: "80%", height: 200, borderRadius: 10 }} />
      )}

      <div style={{ display: "flex", justifyContent: "space-evenly", width: "80%", height: 50 }}>
        <Button onClick={() => {
          setEditMode(true)
          setAircraftToUpdate({id: aircraft?.id, brand: aircraft?.brand, model: aircraft?.model, imgUrl: aircraft?.imgUrl})
        }} color="primary">
          <EditIcon />
        </Button>
        <Button onClick={handleOnDelete} color="error">
          <DeleteForeverIcon />
        </Button>
      </div>
    </div>
  )
}

export default AircraftInfo
