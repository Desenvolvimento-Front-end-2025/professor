import { useEffect, useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';
import { useAuth } from '../context/AuthProvider';
import { getAllAnimais } from '../service/apiService';

const ViewAnimais = () => {
  const { user } = useAuth();
  const [animais, setAnimais] = useState([
    {"nome": "a",
      "tipo":"CACHORRO",
      "dono": "ABC",
      "raca": "dssdfsdf"
    },
    {"nome": "b",
      "tipo":"GATO",
      "dono": "XXXXX",
      "raca": "asdadd"}
  ]);
  const [busca, setBusca] = useState('');

  const carregar = async (q = '') => {
    try {
       let lista = await getAllAnimais(user.id, user.nome, user.token);
      setAnimais(lista);
    } catch {
      alert('Erro ao buscar animais');
    }
  };

  useEffect(() => {
    carregar();
  }, []);

  // busca ao digitar
  const handleSearch = e => {
    const q = e.target.value;
    setBusca(q);
    carregar(q);
  };

  return (
    <Container className="py-4">
      <h3>Animais cadastrados</h3>

      <Form.Control
        placeholder="Pesquisar por nome ou proprietário..."
        value={busca}
        onChange={handleSearch}
        className="my-3"
      />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Espécie</th>
            <th>Proprietário</th>
            <th>Raça</th>
          </tr>
        </thead>
        <tbody>
          {animais.map(a => (
            <tr key={a.id}>
              <td>{a.nome}</td>
              <td>{a.tipo}</td>
              <td>{a.dono}</td>
              <td>{a.raca}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ViewAnimais;