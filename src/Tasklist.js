import React from 'react';
function TaskList({ initialData, handleTaskDone, handleDoneButtonHover }) {
  // Rest of the TaskList component code
  return (
    <>
      <h1 style={headerStyle}>Driver pick up list</h1>
 <table style={taskTableStyle}>
        <thead>
          <tr style={taskRowStyle}>
          <th style={taskHeaderCellStyle}>Actions</th>
            <th style={taskHeaderCellStyle}>User ID</th>
            <th style={taskHeaderCellStyle}>Deliver ID</th>
            <th style={taskHeaderCellStyle}>Name</th>
            <th style={taskHeaderCellStyle}>Quantity</th>
            <th style={taskHeaderCellStyle}>Store ID</th>
            <th style={taskHeaderCellStyle}>Latitude</th>
            <th style={taskHeaderCellStyle}>Longitude</th>
   
          </tr>
        </thead>
        <tbody>
          {initialData.map((task, index) => (
            <tr key={index} style={taskRowStyle}>
                          <td style={taskCellStyle}>
                <button
                  style={{ ...openMapButtonStyle, marginRight: '5px' }}
                  onClick={() => {
                   // alert('map ' + task.lat + ' ' + task.lng);
                    window.open(
                      'https://maps.google.com?q=' + task.lat + '+' + task.lng
                    );
                  }}
                >
                  Open map
                </button>
                <button
                  style={doneButtonStyle}
                  onClick={() => handleTaskDone(index)}
                  onMouseOver={() => handleDoneButtonHover(index, true)}
                  onMouseOut={() => handleDoneButtonHover(index, false)}
                >
                  Done
                </button>
              </td>
              <td style={taskCellStyle}><p style={paragraphStyle}>{task.userId}</p></td>
              <td style={taskCellStyle}><p style={paragraphStyle}>{task.deliverId}</p></td>
              <td style={taskCellStyle}><p style={paragraphStyle}>{task.name}</p></td>
              <td style={taskCellStyle}><p style={paragraphStyle}>{task.quantity}</p></td>
              <td style={taskCellStyle}><p style={paragraphStyle}>{task.storeId}</p></td>
              <td style={taskCellStyle}><p style={paragraphStyle}>{task.lat}</p></td>
              <td style={taskCellStyle}><p style={paragraphStyle}>{task.lng}</p></td>
  
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TaskList;

