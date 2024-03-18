"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = () => {
    const startingTicketData = {
        title: "",
        description: "",
        priority: 1,
        progress: 0,
        status: "not started",
        category: "Hardware Problem",
    }

    const [formData, setFormData] = useState(startingTicketData)
  return (
    <div>
        <form className="flex justify-center" >
            <h3>Create your ticket</h3>
            <label>Title</label>
            <input type="text" id="title" name="title" onChange={handleChange} required={true} value={formData.title}/>
        </form>
    </div>
  )
}

export default TicketForm