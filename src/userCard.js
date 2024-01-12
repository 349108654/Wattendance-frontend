import React from "react";

import Card from '@mui/material/Card';
import Heatmap from "./Github";

export default function NoOfSubmissions() {
  return (
    <div>
      <Card>
        <div style={{ height: "27.8px", padding: "9px 12px 0px 12px" }}>
          <div style={{ fontWeight: 600 }}>
            {/* 1781 submissions in the last year */}
          </div>
        </div>
        <div style={{ padding: "50px" }}>
          <Heatmap />
        </div>
      </Card>
    </div>
  );
}