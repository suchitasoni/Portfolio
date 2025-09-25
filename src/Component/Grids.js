import React from "react";
import { gridLayout } from "../constants";

const Grids = () => {
    return(
        <div className="grid-container">
                {gridLayout.map((item) => (
                    <div key={item.id} className={item.className}>
                        {item.component}
                    </div>
                ))}
        </div>
    )
}
export default Grids;