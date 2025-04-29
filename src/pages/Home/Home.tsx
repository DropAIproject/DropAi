import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-6">
      <h1 className="text-4xl font-bold">Ласкаво просимо в DropAi!</h1>
      <Link to="/dashboard">
        <Button>Перейти в Кабінет</Button>
      </Link>
    </div>
  );
}

export default Home;
