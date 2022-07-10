import { useState, useMemo } from 'react';

export interface IEvent {
  id: string;
  onOutsidePress: () => void;
}

export default function useEventStore() {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [skippedEventId, setSkippedEventId] = useState<string>('');
  const eventActions = useMemo(() => ({
    events,
    appendEvent: (newEvent: IEvent) => setEvents((state) => [...state, newEvent]),
    removeEvent: (id: string) => setEvents((state) => state.filter((event) => event.id !== id)),
    skippedEventId,
    setSkippedEventId,
  }), [skippedEventId, events]);

  return eventActions;
}
