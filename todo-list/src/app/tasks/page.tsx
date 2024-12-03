'use client'

import TasksList from "@/components/TasksList/TasksList"

export type Task = {
  id: string,
  title: string,
  description: string,
  isCompleted: boolean,
  category: string,
  createdAt: string,
  updatedAt: string,
  user: {
    id: string,
    username: string
  }
}
export default function Tasks() {
  
  const tasks: Task[] = [
    {
      id: "1",
      title: "Comprar supermercado",
      description: "Fazer compras de itens básicos para a casa",
      isCompleted: false,
      category: "Casa",
      createdAt: "2024-12-01T08:30:00Z",
      updatedAt: "2024-12-01T08:30:00Z",
      user: {
        id: "user1",
        username: "joao123"
      }
    },
    {
      id: "2",
      title: "Estudar JavaScript",
      description: "Revisar conceitos de JavaScript e praticar exercícios",
      isCompleted: true,
      category: "Estudo",
      createdAt: "2024-11-28T10:15:00Z",
      updatedAt: "2024-11-29T14:00:00Z",
      user: {
        id: "user2",
        username: "maria456"
      }
    },
    {
      id: "3",
      title: "Ir à academia",
      description: "Fazer treino de musculação e cardio",
      isCompleted: false,
      category: "Saúde",
      createdAt: "2024-12-01T07:00:00Z",
      updatedAt: "2024-12-01T07:00:00Z",
      user: {
        id: "user3",
        username: "pedro789"
      }
    },
    {
      id: "4",
      title: "Reunião de trabalho",
      description: "Participar da reunião de planejamento do projeto",
      isCompleted: true,
      category: "Trabalho",
      createdAt: "2024-11-30T09:00:00Z",
      updatedAt: "2024-11-30T09:45:00Z",
      user: {
        id: "user1",
        username: "joao123"
      }
    },
    {
      id: "5",
      title: "Pagar contas",
      description: "Pagar as contas de água, luz e internet",
      isCompleted: false,
      category: "Financeiro",
      createdAt: "2024-12-02T11:00:00Z",
      updatedAt: "2024-12-02T11:00:00Z",
      user: {
        id: "user4",
        username: "lucas101"
      }
    },
    {
      id: "6",
      title: "Comprar presente de aniversário",
      description: "Escolher e comprar presente para o aniversário de um amigo",
      isCompleted: false,
      category: "Pessoal",
      createdAt: "2024-11-29T14:45:00Z",
      updatedAt: "2024-11-29T14:45:00Z",
      user: {
        id: "user5",
        username: "ana202"
      }
    },
    {
      id: "7",
      title: "Assistir ao filme",
      description: "Assistir ao novo lançamento de cinema",
      isCompleted: true,
      category: "Lazer",
      createdAt: "2024-11-27T20:00:00Z",
      updatedAt: "2024-11-27T22:00:00Z",
      user: {
        id: "user6",
        username: "rafael303"
      }
    },
    {
      id: "8",
      title: "Fazer backup dos arquivos",
      description: "Fazer backup dos arquivos importantes no computador",
      isCompleted: true,
      category: "Tecnologia",
      createdAt: "2024-11-30T13:00:00Z",
      updatedAt: "2024-12-01T10:00:00Z",
      user: {
        id: "user2",
        username: "maria456"
      }
    },
    {
      id: "9",
      title: "Organizar a casa",
      description: "Fazer a limpeza e organização geral da casa",
      isCompleted: false,
      category: "Casa",
      createdAt: "2024-12-01T12:00:00Z",
      updatedAt: "2024-12-01T12:00:00Z",
      user: {
        id: "user7",
        username: "fernando404"
      }
    },
    {
      id: "10",
      title: "Revisar código",
      description: "Revisar o código do projeto de software",
      isCompleted: true,
      category: "Trabalho",
      createdAt: "2024-11-25T15:00:00Z",
      updatedAt: "2024-11-26T10:00:00Z",
      user: {
        id: "user3",
        username: "pedro789"
      }
    },
    {
      id: "11",
      title: "Ler livro",
      description: "Ler pelo menos 50 páginas do livro em andamento",
      isCompleted: false,
      category: "Estudo",
      createdAt: "2024-11-28T18:00:00Z",
      updatedAt: "2024-11-28T18:00:00Z",
      user: {
        id: "user8",
        username: "lucia505"
      }
    },
    {
      id: "12",
      title: "Fazer refeição",
      description: "Preparar e comer almoço saudável",
      isCompleted: true,
      category: "Saúde",
      createdAt: "2024-12-02T12:30:00Z",
      updatedAt: "2024-12-02T12:30:00Z",
      user: {
        id: "user9",
        username: "mario606"
      }
    },
    {
      id: "13",
      title: "Fazer planejamento financeiro",
      description: "Revisar orçamento mensal e definir prioridades",
      isCompleted: false,
      category: "Financeiro",
      createdAt: "2024-12-02T10:00:00Z",
      updatedAt: "2024-12-02T10:00:00Z",
      user: {
        id: "user10",
        username: "carla707"
      }
    },
    {
      id: "14",
      title: "Escrever artigo",
      description: "Escrever artigo sobre novas tendências tecnológicas",
      isCompleted: true,
      category: "Trabalho",
      createdAt: "2024-11-25T09:30:00Z",
      updatedAt: "2024-11-25T12:00:00Z",
      user: {
        id: "user11",
        username: "marcos808"
      }
    },
    {
      id: "15",
      title: "Fazer compras online",
      description: "Comprar produtos em lojas online",
      isCompleted: false,
      category: "Pessoal",
      createdAt: "2024-11-29T16:30:00Z",
      updatedAt: "2024-11-29T16:30:00Z",
      user: {
        id: "user12",
        username: "victor909"
      }
    },
    {
      id: "16",
      title: "Verificar e-mails",
      description: "Verificar e responder aos e-mails importantes",
      isCompleted: true,
      category: "Trabalho",
      createdAt: "2024-11-30T08:00:00Z",
      updatedAt: "2024-11-30T09:00:00Z",
      user: {
        id: "user6",
        username: "rafael303"
      }
    },
    {
      id: "17",
      title: "Agendar consulta médica",
      description: "Agendar consulta com o médico de rotina",
      isCompleted: false,
      category: "Saúde",
      createdAt: "2024-11-29T13:00:00Z",
      updatedAt: "2024-11-29T13:00:00Z",
      user: {
        id: "user1",
        username: "joao123"
      }
    },
    {
      id: "18",
      title: "Aula de yoga",
      description: "Participar da aula de yoga no parque",
      isCompleted: true,
      category: "Saúde",
      createdAt: "2024-11-27T08:30:00Z",
      updatedAt: "2024-11-27T09:30:00Z",
      user: {
        id: "user3",
        username: "pedro789"
      }
    },
    {
      id: "19",
      title: "Reunião com equipe",
      description: "Reunião para discutir andamento de projeto",
      isCompleted: false,
      category: "Trabalho",
      createdAt: "2024-12-01T14:30:00Z",
      updatedAt: "2024-12-01T14:30:00Z",
      user: {
        id: "user4",
        username: "lucas101"
      }
    },
    {
      id: "20",
      title: "Fazer compras no mercado",
      description: "Comprar alimentos e bebidas para a casa",
      isCompleted: false,
      category: "Casa",
      createdAt: "2024-12-02T09:00:00Z",
      updatedAt: "2024-12-02T09:00:00Z",
      user: {
        id: "user7",
        username: "fernando404"
      }
    }
  ]

  return (
    <section className="flex flex-col items-center h-[100vh] max-h-[100vh]">
      <header className="pt-10">
        <h1 className="font-bold text-5xl">Tarefas</h1>
      </header>
      <main className="flex w-full  flex-col pt-10 px-96">
        <TasksList tasks={tasks} />
      </main>
    </section>
  )
}