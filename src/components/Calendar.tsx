import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock } from 'lucide-react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isDateAvailable = (day: number) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const dayOfWeek = date.getDay();
    const today = new Date();
    
    // Available Monday-Friday, not in the past
    return dayOfWeek >= 1 && dayOfWeek <= 5 && date >= today;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + (direction === 'next' ? 1 : -1));
    setCurrentDate(newDate);
    setSelectedDate(null);
    setSelectedTime('');
  };

  const selectDate = (day: number) => {
    if (isDateAvailable(day)) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      setSelectedDate(date);
      setSelectedTime('');
    }
  };

  const bookSession = () => {
    if (selectedDate && selectedTime) {
      alert(`Session booked for ${selectedDate.toLocaleDateString()} at ${selectedTime}. You will receive a confirmation email shortly!`);
      setSelectedDate(null);
      setSelectedTime('');
    }
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <section id="calendar" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Book Your Session
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Schedule a personalized tutoring session. Sessions are available Monday through Friday, 
            and I offer both in-person and virtual options.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calendar */}
            <div className="bg-white rounded-3xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => navigateMonth('prev')}
                    className="p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={() => navigateMonth('next')}
                    className="p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {/* Empty cells for days before the first day of the month */}
                {Array.from({ length: firstDay }, (_, i) => (
                  <div key={i} className="h-10"></div>
                ))}
                
                {/* Days of the month */}
                {Array.from({ length: daysInMonth }, (_, i) => {
                  const day = i + 1;
                  const isAvailable = isDateAvailable(day);
                  const isSelected = selectedDate?.getDate() === day;
                  
                  return (
                    <button
                      key={day}
                      onClick={() => selectDate(day)}
                      disabled={!isAvailable}
                      className={`h-10 w-10 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isSelected
                          ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg'
                          : isAvailable
                          ? 'hover:bg-blue-100 text-gray-700 hover:shadow-md'
                          : 'text-gray-300 cursor-not-allowed'
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700">
                  <CalendarIcon className="w-4 h-4 inline mr-2" />
                  Available sessions: Monday - Friday
                </p>
              </div>
            </div>

            {/* Time Slots & Booking */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-6 shadow-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Available Times</h3>
                
                {selectedDate ? (
                  <div>
                    <p className="text-gray-600 mb-4">
                      {selectedDate.toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                            selectedTime === time
                              ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg'
                              : 'bg-gray-50 hover:bg-green-100 text-gray-700 hover:shadow-md'
                          }`}
                        >
                          <Clock className="w-4 h-4 inline mr-2" />
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    Please select a date to view available time slots
                  </p>
                )}
              </div>

              {selectedDate && selectedTime && (
                <div className="bg-white rounded-3xl p-6 shadow-xl">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">Confirm Booking</h4>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-semibold text-gray-800">
                        {selectedDate.toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time:</span>
                      <span className="font-semibold text-gray-800">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold text-gray-800">60 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Session Type:</span>
                      <span className="font-semibold text-gray-800">Initial Consultation</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={bookSession}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Confirm Booking
                  </button>
                </div>
              )}

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
                <h4 className="text-lg font-bold text-yellow-800 mb-3">Session Information</h4>
                <ul className="space-y-2 text-sm text-yellow-700">
                  <li>• Initial consultation: Free 30-minute discovery call</li>
                  <li>• Regular sessions: 60 minutes</li>
                  <li>• 24-hour cancellation policy</li>
                  <li>• Materials and resources included</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;