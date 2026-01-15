import { X } from "lucide-react";

interface CalendarModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CalendarModal = ({ isOpen, onClose }: CalendarModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in duration-300">
                <button
                    onClick={onClose}
                    aria-label="Sluit agenda"
                    className="absolute top-4 right-4 z-10 p-2 bg-secondary/80 hover:bg-secondary rounded-full transition-colors text-foreground"
                >
                    <X className="w-6 h-6" />
                </button>
                <iframe
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0jlTOKGEkHRLwr7JBpLZpOx2Rz0-FJdMijoqDATRx7xIqNxzjRhTAJC8LeeCB0C3D92tYIErVI?gv=true"
                    title="Plan een afspraak via Google Calendar"
                    className="border-0"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                ></iframe>
            </div>
        </div>
    );
};
