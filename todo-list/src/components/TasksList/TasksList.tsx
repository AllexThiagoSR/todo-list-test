import { Task } from "@/app/tasks/page";
import { Accordion, AccordionItem, Button, Checkbox, Chip } from "@nextui-org/react";

type Props = {
  tasks: Task[]
}

function ItemListSubtitle({ category, createdAt, updatedAt, user }: Task) {
  return (
    <section className="relative flex flex-row gap-4 w-full items-center py-2">
      <Chip color="secondary" variant="bordered">{ category }</Chip>
      <Chip color="primary" variant="bordered">{ user.username }</Chip>
      <div className="absolute right-0">
        <p>Criada: {createdAt}</p>
        <p>Atualizada: {updatedAt}</p>
      </div>
    </section>
  )
}

function ItemListTitle({title, isCompleted}: Task) {
  return (
    <section className="flex justify-between">
      <span className={isCompleted ? "line-through text-xl" : "text-xl"}>{title}</span>
      {/* <Button variant="bordered" className="border-default-400 hover:border-default-500">Editar</Button> */}
      <span>Editar</span>
    </section>
  )
}

export default function TasksList({ tasks }: Props) {
  return (
    <Accordion
      variant="bordered"
      className="w-full border-default-400 p-4 h-[90vh] overflow-y-scroll"
      itemClasses={{
        trigger: "px-2 data-[hover=true]:bg-default-300 flex items-center",
        indicator: "text-medium",
        content: "px-16",
      }}
      dividerProps={{
        className: "bg-default-400"
      }}
    >
      {
        tasks.map((task) => (
          <AccordionItem
            startContent={<Checkbox isSelected={task.isCompleted} color="secondary" size="lg" />}
            className=""
            key={task.id}
            title={<ItemListTitle {...task} />}
            subtitle={<ItemListSubtitle {...task} />}
          >
            {task.description}
          </AccordionItem>
        ))
      }
    </Accordion>
  )
}