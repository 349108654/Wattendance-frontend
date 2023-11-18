import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

function Github(){
    return(
    <CalendarHeatmap
        startDate={new Date('2023-01-01')}
        endDate={new Date('2023-12-31')}
        values={[
            { date: '2023-01-01', count: 1 },
            { date: '2023-01-22', count: 2 },
            { date: '2023-01-30', count: 3 },
            { date: '2023-03-03', count: 4 },
            // ...and so on
        ]}
        classForValue={(value) => {
            if (!value) {
              return 'color-empty';
            }
            return `color-gitlab-${value.count}`;
          }}
          
    />
    )
}

export default Github;