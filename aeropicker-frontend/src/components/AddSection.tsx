import React, { useEffect, useState } from "react"
import BasicInput from "./BasicInput"
import CloseIcon from "@mui/icons-material/Close"
import { Button } from "@mui/material"

interface AddSectionProps {
  onClose: () => void
  editMode?: boolean
  dataToUpdate?: {
    id: string; 
    brand: string
    model: string
    imgUrl: string
  }
}

const AddSection = ({ onClose, editMode = false, dataToUpdate }: AddSectionProps) => {
  const [brand, setBrand] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  const [model, setModel] = useState("")

  useEffect(() => {
    if (editMode && dataToUpdate) {
      setBrand(dataToUpdate.brand)
      setImgUrl(dataToUpdate.imgUrl)
      setModel(dataToUpdate.model)
    }
  }, [editMode, dataToUpdate])

  const handleSubmit = async () => {
    if (editMode && dataToUpdate?.id) {
      await fetch(`http://localhost:8080/aircraft/${dataToUpdate.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          brand,
          model,
          imgUrl
        })
      })
    } else {
      await fetch("http://localhost:8080/aircraft/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ brand, model, imgUrl })
      })
      alert("Aircraft added!")
    }
    setBrand("")
    setImgUrl("")
    setModel("")
    onClose()
    window.location.reload()
  }

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#111",
        borderRadius: 5,
        height: 350,
        width: 300,
        padding: 50
      }}
    >
      <div
        onClick={() => {
          setBrand("")
          setImgUrl("")
          setModel("")
          onClose()
        }}
        style={{ position: "absolute", top: 10, right: 20, color: "white", fontSize: 24, cursor: "pointer" }}
      >
        <CloseIcon />
      </div>

      <BasicInput value={brand} onChange={(e: any) => setBrand(e.target.value)} placeholder="Brand" />
      <BasicInput value={model} onChange={(e: any) => setModel(e.target.value)} placeholder="Model" />
      <BasicInput value={imgUrl} onChange={(e: any) => setImgUrl(e.target.value)} placeholder="Image URL" />
      <Button onClick={handleSubmit} variant="contained">
        {editMode ? "Edit" : "Save"}
      </Button>
    </div>
  )
}

export default AddSection
