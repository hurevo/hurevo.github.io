import { createFileRoute } from '@tanstack/react-router';
import HomeApp from '../App';

export const Route = createFileRoute('/')({
  component: () => <HomeApp />,
});
