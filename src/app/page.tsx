import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      {/* Importação do Sidebar */}
      <Sidebar />

      {/* Conteúdo Principal */}
      <div className="flex-1 bg-gray-100 p-6 transition-all duration-300 md:ml-64">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Bem-vindo à Dashboard</h1>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500">
            Sair
          </button>
        </header>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Usuários Ativos</h3>
            <p className="text-3xl font-bold text-blue-600">120</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Vendas do Mês</h3>
            <p className="text-3xl font-bold text-green-600">$45,000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Tickets Pendentes</h3>
            <p className="text-3xl font-bold text-yellow-600">5</p>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Últimas Vendas</h3>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Data</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Produto</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 text-sm text-gray-700">12/03/2025</td>
                <td className="px-4 py-2 text-sm text-gray-700">Produto A</td>
                <td className="px-4 py-2 text-sm text-gray-700">$300</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm text-gray-700">13/03/2025</td>
                <td className="px-4 py-2 text-sm text-gray-700">Produto B</td>
                <td className="px-4 py-2 text-sm text-gray-700">$450</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm text-gray-700">14/03/2025</td>
                <td className="px-4 py-2 text-sm text-gray-700">Produto C</td>
                <td className="px-4 py-2 text-sm text-gray-700">$200</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

