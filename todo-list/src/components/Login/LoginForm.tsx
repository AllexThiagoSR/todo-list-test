import { Button, Input } from "@nextui-org/react";

export default function LoginForm() {
  return (
    <form className="flex items-center justify-center flex-col min-w-[400px] px-10 py-32 border border-black rounded-xl gap-6">
      <Input
        className="w-full"
        classNames={{
          inputWrapper: [
            "border-default-400 hover:border-default-500"
          ]
        }}
        label="Nome de Usuário"
        type="text"
        name="username"
        variant="underlined"
      />
      <Input
        className="w-full" 
        classNames={{
          inputWrapper: [
            "border-default-400 hover:border-default-500"
          ]
        }}
        label="Senha" 
        type="password" 
        name="password" 
        variant="underlined"
      />
      <Button className="w-[70%] border-default-400 hover:border-default-500" variant="bordered" color="default">Login</Button>
    </form>
  )
}