import ItemTable from "./ItemTable"

import { Input, Container } from "@nextui-org/react";

import { useState, useEffect} from "react"

export default function TableSection({ data, rows, setRows, setForm, setModal, setIsOpened }) {
    const [searchTerm, setSearchTerm] = useState("")

    const columns = [
        {
          key:"name",
          label: "Name",
        },
        {
          key: "count",
          label: "#",
        },
        {
          key: "date",
          label: "Due",
        },
        {
          key: "group",
          label: "Place",
        }
    ]

    useEffect(() => {
        if(searchTerm.length > 0) {
          const filteredRows = data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
          setRows(filteredRows)
        } else { setRows(data) }
      }, [searchTerm, data, setRows])

    return (
    <>
    <Container>
        <Input clearable bordered 
            labelPlaceholder='Search' onChange={(e) => setSearchTerm(e.target.value)} />
    </Container>

    <ItemTable 
        setIsOpened={setIsOpened} setForm={setForm} 
        setModal={setModal} origData={data} 
        rows={rows} columns={columns} />
    </>
    )
}