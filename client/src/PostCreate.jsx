import React,{ useState } from "react";
import axios from "axios";



export default function PostCreate(){
    return (<div>
        <form>
            <div className="form-group">
                <label>Title</label>
                <input className="form-control"/>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>

    </div>
    )
}