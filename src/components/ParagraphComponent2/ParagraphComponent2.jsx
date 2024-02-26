    import React from "react";
    import "./ParagraphComponent2.css"

    export default function ParagraphComponent2() {

        const updated_at = 1609459200;
        const current_time = Math.floor(Date.now() / 1000);

        const timeSecond = current_time - updated_at;
        const timeHours = Math.floor(timeSecond / 3600)
        return (
            <p className="joke_time">
                Last update: {timeHours} hours ago
            </p>
        )
    }