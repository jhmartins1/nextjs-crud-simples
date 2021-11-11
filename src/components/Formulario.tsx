import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface IFormulario {
  cliente: Cliente
  clienteMudou?: (cliente: Cliente) => void
  cancelado?: () => void
}

export default function Formulario(props: IFormulario) {
  const id = props.cliente?.id
  const [nome, setNome] = useState(props.cliente?.nome ?? '')
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
  return (
    <div>
      {id ? (
        <Entrada 
          somenteLeitura
          texto="Código" 
          valor={id}
          className="mb-4"
        />
      ) : false}
      <Entrada
        texto="Nome" 
        valor={nome}
        valorMudou={setNome}
        className="mb-4"
       />
      <Entrada 
        texto="Idade" 
        tipo="number" 
        valor={idade}
        valorMudou={setIdade}
      />
      <div className="flex justify-end mt-6">
        <Botao  className="mr-4" onClick={props.cancelado}>
          Cancelar
        </Botao>
        <Botao cor="blue" onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
          {id ? 'Alterar' : 'Salvar'}
        </Botao>
      </div>
    </div>
  )
}