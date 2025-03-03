interface DashboardProps {
    isSidebarOpen: boolean; // Recebe o estado do sidebar
  }
  
  const Dashboard: React.FC<DashboardProps> = ({ isSidebarOpen }) => {
    return (
      <div
        className={`flex-1 p-4 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'ml-56' : 'ml-16' // Ajusta a margem esquerda com base no estado do sidebar
        }`} 
      >
        {/* Título do Dashboard */}
        <h1 className="text-2xl font-semibold mb-6">Portfólio do professor nerd</h1>
  
        {/* Aqui você pode adicionar outros conteúdos ou componentes no lugar do Card */}
      
        </div>
        
    );
  };
  
  export default Dashboard;
  