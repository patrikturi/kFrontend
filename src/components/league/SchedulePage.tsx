import React from 'react';

export const SchedulePage = () => {
  return (
    <>
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <h2 className="mb-4">Mini League Schedule</h2>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=44vqrma458fs70qi83ge9bd3bc%40group.calendar.google.com&ctz=Europe%2FBudapest"
          style={{ border: 0, width: 800, height: 600, borderStyle: '0' }}
        ></iframe>
      </div>
    </>
  );
};
