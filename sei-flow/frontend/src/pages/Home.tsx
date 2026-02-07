import Header from '../components/Header';
import { useApi } from '../hooks/useApi';
import './Home.css';

/* =========================
   Tipos das respostas da API
   ========================= */

type HealthResponse = {
  status: string;
  uptime: number;
  timestamp: string;
};

type User = {
  id: number;
  nome: string;
  email: string;
};

/* =========================
   Componente
   ========================= */

const Home = () => {
  // Health check do backend
  const {
    data: healthData,
    loading: healthLoading,
    error: healthError
  } = useApi<HealthResponse>('/health');

  // Lista de usuários
  const {
    data: users,
    loading: usersLoading,
    error: usersError
  } = useApi<User[]>('/users');

  return (
    <div className="home">
      <Header title="Minha Aplicação Full-Stack" />

      <main className="main-content">
        {/* ================= STATUS ================= */}
        <section className="status-card">
          <h2>Status do Sistema</h2>

          {healthLoading && <p>Verificando backend...</p>}

          {!healthLoading && healthError && (
            <p>❌ Backend não encontrado</p>
          )}

          {!healthLoading && healthData && (
            <p>
              ✅ Backend conectado — Uptime:{' '}
              <strong>{healthData.uptime.toFixed(2)}s</strong>
            </p>
          )}

          <p>Frontend: ✅ Rodando</p>
        </section>

        {/* ================= USUÁRIOS ================= */}
        <section className="users-section">
          <h2>Usuários (Exemplo do Backend)</h2>

          {usersLoading && <p>Carregando usuários...</p>}

          {!usersLoading && usersError && (
            <p>❌ Erro ao carregar usuários</p>
          )}

          {!usersLoading && users && users.length === 0 && (
            <p>Nenhum usuário encontrado.</p>
          )}

          {!usersLoading && users && users.length > 0 && (
            <ul>
              {users.map(user => (
                <li key={user.id}>
                  <strong>{user.nome}</strong> — {user.email}
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
};

export default Home;
