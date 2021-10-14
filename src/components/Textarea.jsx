import React from 'react'

export default function Textarea(props) {
    return (
        <div>
            <h1 className="text-center">{props.heading}</h1>
            <div className="mb-3">
  <textarea className="form-control" placeholder="Enter Text To Analyze" id="myBox" rows="8" ></textarea>

</div>
        </div>
    )
}

