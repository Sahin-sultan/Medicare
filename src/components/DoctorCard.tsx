import { CalendarDays, Clock, GraduationCap, Stethoscope } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface DoctorSchedule {
  day: string;
  times: string[];
}

interface DoctorCardProps {
  id: string;
  name: string;
  photo: string;
  specialization: string;
  degrees: string[];
  experience: number;
  schedule: DoctorSchedule[];
  consultationFee: number;
}

const DoctorCard = ({
  id,
  name,
  photo,
  specialization,
  degrees,
  experience,
  schedule,
  consultationFee
}: DoctorCardProps) => {
  return (
    <Card className="group hover:shadow-elevated transition-all duration-300 hover:scale-[1.02] h-full">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center mb-4">
          <Avatar className="w-16 h-16 mb-4">
            <AvatarImage src={photo} alt={name} />
            <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
              {name}
            </h3>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Stethoscope className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{specialization}</span>
            </div>
            <div className="flex items-center justify-center gap-2 flex-wrap mb-3">
              <GraduationCap className="w-4 h-4 text-muted-foreground" />
              <div className="flex flex-wrap justify-center gap-1">
                {degrees.map((degree, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {degree}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">{experience} years of experience</span>
          </div>
          
          <div>
            <div className="flex items-center justify-center gap-2 mb-3">
              <CalendarDays className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Available Schedule</span>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {schedule.slice(0, 3).map((slot) => (
                <div key={slot.day} className="text-sm bg-muted/50 rounded-lg p-2">
                  <div className="font-medium text-primary mb-1">{slot.day}</div>
                  <div className="text-muted-foreground text-xs">
                    {slot.times.map((time, index) => (
                      <span key={time} className="inline-block">
                        {time}
                        {index < slot.times.length - 1 && <span className="mx-1">&bull;</span>}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex flex-col gap-2">
        <div className="text-center">
          <span className="text-sm text-muted-foreground block">Consultation Fee</span>
          <div className="text-lg font-bold text-primary mb-3">₹{consultationFee}</div>
        </div>
        <Button className="w-full">Book Appointment</Button>
      </CardFooter>
    </Card>
  );
};

export default DoctorCard;