import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import PropTypes from "prop-types"

export function DatePicker({ onDateChange }) {
  // Initialize state with today's date
  const [date, setDate] = React.useState(() => new Date())

  // Only call onDateChange when date is explicitly set by the user
  const handleDateChange = newDate => {
    if ((newDate && !date) || newDate.getTime() !== date.getTime()) {
      setDate(newDate)
      onDateChange(newDate)
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='black' className={cn("w-[240px] justify-start text-left font-normal", !date && "text-muted-foreground")}>
          <CalendarIcon className='mr-2 h-4 w-4' />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0' align='start'>
        <Calendar mode='single' selected={date} onSelect={handleDateChange} initialFocus />
      </PopoverContent>
    </Popover>
  )
}

DatePicker.propTypes = {
  onDateChange: PropTypes.func.isRequired
}
